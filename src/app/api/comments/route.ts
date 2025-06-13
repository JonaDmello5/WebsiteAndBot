import { NextResponse, type NextRequest } from 'next/server';
import { db } from '@/db';
import { commentsTable, type InsertComment } from '@/db/schema';
import { z } from 'zod';
import { desc } from 'drizzle-orm';

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
    
    // Convert Date objects to ISO strings for JSON serialization
    const serializedComments = allComments.map(comment => ({
      ...comment,
      createdAt: comment.createdAt instanceof Date ? comment.createdAt.toISOString() : String(comment.createdAt),
    }));

    return NextResponse.json(serializedComments);
  } catch (error) {
    console.error("GET /api/comments error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { message: "Internal Server Error", error: errorMessage },
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
      // createdAt will be set by default in the database
    };

    const insertedComments = await db.insert(commentsTable).values(newCommentData).returning().get();
    
    if (!insertedComments) {
      throw new Error("Failed to insert comment or retrieve the inserted comment.");
    }
    
    const newComment = {
      ...insertedComments,
      createdAt: insertedComments.createdAt instanceof Date ? insertedComments.createdAt.toISOString() : String(insertedComments.createdAt),
    };


    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error("POST /api/comments error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { message: "Could not post comment.", error: errorMessage },
      { status: 500 }
    );
  }
}
