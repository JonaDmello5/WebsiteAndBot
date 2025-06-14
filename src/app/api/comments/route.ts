
import { NextResponse, type NextRequest } from 'next/server';
import { db } from '@/db';
import { commentsTable, type InsertComment } from '@/db/schema';
import { z } from 'zod';
import { desc, count, asc, inArray } from 'drizzle-orm';

const postCommentSchema = z.object({
  content: z.string().min(1, { message: "Content cannot be empty." }).max(1000, { message: "Content too long." }),
});

export async function GET() {
  try {
    const allComments = await db
      .select()
      .from(commentsTable)
      .orderBy(desc(commentsTable.createdAt))
      .all();
    
    const serializedComments = allComments.map(comment => ({
      ...comment,
      createdAt: comment.createdAt instanceof Date ? comment.createdAt.toISOString() : String(comment.createdAt),
    }));

    return NextResponse.json(serializedComments);
  } catch (error) {
    const errorDetails = error instanceof Error ? `${error.name}: ${error.message} (Stack: ${error.stack})` : "An unknown error occurred";
    console.error("GET /api/comments error:", errorDetails);
    return NextResponse.json(
      { message: "Internal Server Error while fetching comments.", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = postCommentSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: "Invalid input.", errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { content } = validation.data;

    const newCommentData: InsertComment = {
      content,
    };

    const insertedComment = await db.insert(commentsTable).values(newCommentData).returning().get();
    
    if (!insertedComment) {
      console.error("POST /api/comments - Failed to insert or retrieve comment. Drizzle 'returning()' might have yielded undefined.");
      throw new Error("Failed to insert comment or retrieve the inserted comment.");
    }
    
    const COMMENTS_DELETION_THRESHOLD = 16; 
    const NUM_COMMENTS_TO_DELETE = 5;

    const allCommentsCountResult = await db.select({ count: count() }).from(commentsTable).get();
    const totalComments = allCommentsCountResult?.count ?? 0;

    if (totalComments >= COMMENTS_DELETION_THRESHOLD) {
      const oldestCommentsToDelete = await db
        .select({ id: commentsTable.id })
        .from(commentsTable)
        .orderBy(asc(commentsTable.createdAt)) 
        .limit(NUM_COMMENTS_TO_DELETE);

      if (oldestCommentsToDelete.length > 0) {
        const idsToDelete = oldestCommentsToDelete.map(c => c.id);
        await db.delete(commentsTable).where(inArray(commentsTable.id, idsToDelete));
        console.log(`Deleted ${idsToDelete.length} oldest comments as total count (${totalComments}) met or exceeded threshold (${COMMENTS_DELETION_THRESHOLD}).`);
      }
    }
    
    const newCommentResponse = {
      ...insertedComment,
      createdAt: insertedComment.createdAt instanceof Date ? insertedComment.createdAt.toISOString() : String(insertedComment.createdAt),
    };

    return NextResponse.json(newCommentResponse, { status: 201 });
  } catch (error) {
    const errorDetails = error instanceof Error ? `${error.name}: ${error.message} (Stack: ${error.stack})` : "An unknown error occurred";
    console.error("POST /api/comments error:", errorDetails);
    return NextResponse.json(
      { message: "Could not post comment due to an internal server error.", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
