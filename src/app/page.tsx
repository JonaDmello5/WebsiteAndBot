
"use client";

import { useState, useEffect, type FormEvent } from 'react';
import { formatDistanceToNow } from 'date-fns';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ContentCard from '@/components/content/content-card';
import AdPlaceholder from '@/components/ads/ad-placeholder';
import SampleBarChart from '@/components/charts/sample-bar-chart';
import { Separator } from '@/components/ui/separator';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';


const sampleArticles = [
  {
    id: 1,
    title: "The Future of Web Monetization",
    description: "Exploring new trends in digital advertising and content revenue.",
    content: (
      <>
        <p>The landscape of web monetization is constantly evolving. As traditional advertising models face new challenges, content creators and publishers are seeking innovative ways to generate revenue. This article delves into emerging trends, including programmatic advertising, native ads, subscription models, and the role of AI in optimizing ad performance.</p>
        <p>We'll examine case studies of successful monetization strategies and discuss the ethical considerations that come with them. The goal is to provide a comprehensive overview for anyone looking to maximize their online earnings while maintaining a positive user experience.</p>
      </>
    ),
    imageUrl: "",
    imageHint: "digital monetization",
    date: "October 26, 2023",
    chart: <SampleBarChart />,
  },
  {
    id: 2,
    title: "Top 5 Gadgets of the Year",
    description: "A rundown of the most innovative and exciting tech gadgets released this year.",
    content: (
      <>
        <p>This year has been packed with technological advancements, and a slew of new gadgets have hit the market. From foldable smartphones to AI-powered home assistants, innovation is at an all-time high. In this article, we count down the top 5 gadgets that have impressed us the most with their design, functionality, and impact.</p>
        <p>Each gadget is reviewed in detail, covering its key features, pros, cons, and why it made our list. Whether you're a tech enthusiast or just curious about the latest trends, this guide will keep you informed.</p>
        <div className="my-6 rounded-lg overflow-hidden shadow-lg">
          <Image src="https://placehold.co/800x450.png" alt="Various tech gadgets" width={800} height={450} data-ai-hint="tech gadgets" />
        </div>
        
        <h3 className="text-xl font-semibold mt-6 mb-3 text-primary">1. The "Nova" Smart Glasses</h3>
        <p>Kicking off our list are the Nova Smart Glasses. These aren't your average AR specs; they seamlessly integrate augmented reality into your daily life with a sleek, unobtrusive design. Imagine navigation overlays, instant language translation, and hands-free notifications, all without reaching for your phone.</p>
        <div className="my-4 rounded-lg overflow-hidden shadow-md">
          <Image src="https://placehold.co/700x400.png" alt="Nova Smart Glasses" width={700} height={400} data-ai-hint="smart glasses" />
        </div>
        <p>The Nova glasses boast an impressive battery life and a surprisingly intuitive user interface controlled by subtle gestures and voice commands. While still a premium product, they represent a significant step towards mainstream AR adoption.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-primary">2. "EchoSphere" 360 Audio Pod</h3>
        <p>Next up is the EchoSphere, a revolutionary personal audio device that creates a truly immersive 360-degree sound bubble. Unlike traditional headphones, it uses advanced acoustic projection to deliver rich, spatial audio that feels like it's coming from all around you, without isolating you from your environment.</p>
        <div className="my-4 rounded-lg overflow-hidden shadow-md">
          <Image src="https://placehold.co/700x350.png" alt="EchoSphere 360 Audio Pod" width={700} height={350} data-ai-hint="audio device" />
        </div>
        <p>Perfect for music lovers, gamers, and even for enhancing conference calls, the EchoSphere is compact, stylish, and offers unparalleled audio fidelity. Its adaptive noise cancellation is also top-notch, letting you tune in or out as needed.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-primary">3. The "Terra" Portable Solar Charger</h3>
        <p>For the eco-conscious tech enthusiast, the Terra Portable Solar Charger is a game-changer. This ultra-lightweight and foldable solar panel is incredibly efficient, capable of charging multiple devices simultaneously even in less-than-ideal sunlight conditions.</p>
        <div className="my-4 rounded-lg overflow-hidden shadow-md">
          <Image src="https://placehold.co/600x400.png" alt="Terra Portable Solar Charger" width={600} height={400} data-ai-hint="solar charger" />
        </div>
        <p>Its durable, weather-resistant design makes it perfect for outdoor adventures or as a reliable backup power source. The integrated smart-charging technology optimizes power delivery to protect your devices. This gadget proves that sustainability and cutting-edge tech can go hand-in-hand.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-primary">4. "BioScan" Health Monitor Patch</h3>
        <p>The BioScan Health Monitor is a discreet, wearable patch that provides continuous, real-time tracking of vital health metrics. Far beyond a simple step counter, it monitors heart rate variability, sleep patterns, skin temperature, and even early indicators of stress or illness.</p>
        <div className="my-4 rounded-lg overflow-hidden shadow-md">
          <Image src="https://placehold.co/650x400.png" alt="BioScan Health Monitor Patch" width={650} height={400} data-ai-hint="health monitor" />
        </div>
        <p>Data syncs wirelessly to a companion app, offering personalized insights and actionable health advice. Its hypoallergenic material and long battery life make it comfortable for extended wear, empowering users to take proactive control of their well-being.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-primary">5. "AquaPure" Smart Bottle</h3>
        <p>Rounding out our top 5 is the AquaPure Smart Bottle. This innovative water bottle doesn't just hold water; it purifies it on the go using UV-C LED technology, eliminating up to 99.9% of bacteria and viruses. It also tracks your hydration levels and glows to remind you when it's time to take a sip.</p>
        <div className="my-4 rounded-lg overflow-hidden shadow-md">
          <Image src="https://placehold.co/500x500.png" alt="AquaPure Smart Bottle" width={500} height={500} data-ai-hint="smart bottle" />
        </div>
        <p>Constructed from durable, insulated stainless steel, it keeps drinks cold for 24 hours or hot for 12. For health-conscious individuals and outdoor adventurers, the AquaPure is a must-have for clean, convenient hydration.</p>
      </>
    ),
    imageUrl: "https://placehold.co/800x300.png",
    imageHint: "tech gadgets",
    date: "November 5, 2023",
  },
  {
    id: 3,
    title: "Understanding Ad Viewability",
    description: "A deep dive into what ad viewability means and why it matters for publishers.",
    content: (
      <>
        <p>Ad viewability is a critical metric in digital advertising. It measures whether an ad had the opportunity to be seen by a user. But what constitutes a 'viewable' ad, and why is this metric so important for both advertisers and publishers?</p>
        <p>This piece explains the standards for ad viewability, how it's measured, and the factors that can impact it. We also provide actionable tips for publishers to improve their ad viewability rates, ultimately leading to better campaign performance and higher revenue.</p>
      </>
    ),
    date: "November 12, 2023",
  }
];

interface Comment {
  id: number;
  content: string;
  createdAt: string; 
}

export default function HomePage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  async function safeFetchComments() {
    setIsLoadingComments(true);
    setError(null);
    try {
      const response = await fetch('/api/comments');
      const contentType = response.headers.get('content-type') || '';
      const isJson = contentType.includes('application/json');

      if (!response.ok) {
        let detail = `Status ${response.status} (${response.statusText || 'N/A'})`;
        if (isJson) {
          const body = await response.json().catch(() => null);
          if (body?.message) detail += `: ${body.message}`;
          if (body?.error) detail += ` - ${body.error}`;
        }
        throw new Error(`Failed to fetch comments — ${detail}`);
      }
      const data: Comment[] = isJson ? await response.json() : [];
      setComments(data);
    } catch (err) {
      console.error("Error in safeFetchComments:", err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
      toast({
        title: "Error loading comments",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoadingComments(false);
    }
  }

  useEffect(() => {
    safeFetchComments();
  }, []);

  const handleCommentSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newComment.trim()) {
      toast({ title: "Cannot post empty comment", variant: "destructive" });
      return;
    }
    setIsSubmittingComment(true);
    setError(null);
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newComment }),
      });
      const contentType = response.headers.get('content-type') || '';
      const isJson = contentType.includes('application/json');

      if (!response.ok) {
        let detail = `Status ${response.status} (${response.statusText || 'N/A'})`;
        if (isJson) {
          const body = await response.json().catch(() => null);
          if (body?.message) detail += `: ${body.message}`;
          if (body?.errors) detail += `: ${JSON.stringify(body.errors)}`;
          if (body?.error) detail += ` - ${body.error}`;
        }
        throw new Error(`Failed to post comment — ${detail}`);
      }
      const postedComment: Comment = isJson ? await response.json() : null;
      if (postedComment) {
        setComments(prevComments => [postedComment, ...prevComments]);
        setNewComment('');
        toast({ title: "Comment posted successfully!", variant: "default" });
        // After posting, refresh comments to reflect potential deletions due to threshold
        safeFetchComments(); 
      } else {
        throw new Error("Failed to process comment post response.");
      }
    } catch (err) {
      console.error("Error in handleCommentSubmit:", err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
      toast({
        title: "Error posting comment",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmittingComment(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="ClickSynergy" />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <section className="lg:w-2/3 flex flex-col gap-8">
            {sampleArticles.map((article) => (
              <ContentCard
                key={article.id}
                title={article.title}
                description={article.description}
                content={article.content}
                imageUrl={article.imageUrl}
                imageHint={article.imageHint}
                date={article.date}
                chart={article.chart}
              />
            ))}
            
            <div className="my-4">
              <AdPlaceholder label="In-Content Ad (e.g., 300x250 or responsive)" height="250px" className="max-w-md mx-auto" />
            </div>

            <Separator className="my-8" />
            
            <Card className="shadow-lg border border-border/70">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">Leave a Comment</CardTitle>
                <CardDescription>Share your thoughts on these articles.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleCommentSubmit}>
                  <Textarea
                    placeholder="Write your comment here..."
                    className="min-h-[100px] focus:ring-2 focus:ring-primary/50 transition-shadow"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    disabled={isSubmittingComment}
                  />
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-shadow" disabled={isSubmittingComment}>
                    {isSubmittingComment ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Posting...
                      </>
                    ) : "Post Comment"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-semibold text-primary border-b border-border pb-2 mb-4">Comments</h3>
              {isLoadingComments && (
                <div className="flex flex-col items-center justify-center text-muted-foreground p-8 space-y-2">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  <p>Loading comments...</p>
                </div>
              )}
              {error && !isLoadingComments && (
                 <Alert variant="destructive" className="mt-4">
                   <AlertTitle>Error Loading Comments</AlertTitle>
                   <AlertDescription>{error}</AlertDescription>
                 </Alert>
              )}
              {!isLoadingComments && !error && comments.length > 0 && (
                comments.map((comment) => (
                  <Card key={comment.id} className="shadow-md border border-border/50 bg-card/50">
                    <CardContent className="p-4 flex items-start space-x-4">
                      <Avatar className="mt-1 h-10 w-10 border border-border/30">
                        <AvatarFallback>
                          <User className="h-5 w-5 text-muted-foreground" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-foreground leading-relaxed">{comment.content}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
              {!isLoadingComments && !error && comments.length === 0 && (
                <Card className="border-2 border-dashed border-muted-foreground/30 bg-muted/10 shadow-none">
                  <CardContent className="p-6 text-center text-muted-foreground">
                    <p>No comments yet. Be the first to share your thoughts!</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </section>

          <aside className="lg:w-1/3 flex flex-col gap-8 lg:sticky lg:top-24 h-fit">
            <AdPlaceholder label="Sidebar Ad - Unit 1 (e.g., 300x250)" width="100%" height="250px" />
            <AdPlaceholder label="Sidebar Ad - Unit 2 (e.g., 300x600)" width="100%" height="600px" />
            <Card className="p-4 shadow-md">
              <CardHeader className="p-0">
                <CardTitle className="text-lg mb-2 font-headline">About Us</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription>
                  ClickSynergy is dedicated to helping content creators maximize their ad revenue through optimized content and strategic ad placements.
                </CardDescription>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
