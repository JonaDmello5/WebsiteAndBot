"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getAdOptimizationSuggestions, type AdOptimizationSuggestionsInput, type AdOptimizationSuggestionsOutput } from '@/ai/flows/ad-optimization-suggestions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  articleContent: z.string().min(50, { message: "Article content must be at least 50 characters." }),
  viewabilityData: z.string().optional(),
  userEngagementData: z.string().optional(),
  adRevenueData: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const AdOptimizationTool: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<AdOptimizationSuggestionsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      articleContent: '',
      viewabilityData: '',
      userEngagementData: '',
      adRevenueData: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setSuggestions(null);
    setError(null);

    try {
      const result = await getAdOptimizationSuggestions(data as AdOptimizationSuggestionsInput);
      setSuggestions(result);
      toast({
        title: "Suggestions Generated",
        description: "AI has provided optimization suggestions.",
      });
    } catch (e) {
      console.error("Error fetching ad optimization suggestions:", e);
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
      setError(`Failed to get suggestions: ${errorMessage}`);
      toast({
        title: "Error",
        description: `Failed to generate suggestions: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-xl flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-primary" />
          Ad Content Optimizer
        </CardTitle>
        <CardDescription>
          Get AI-powered suggestions to improve your content for better ad performance.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="articleContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Article Content (Required)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste your article content here..."
                      className="min-h-[150px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="viewabilityData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Viewability Data (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Avg time on page: 60s, Bounce rate: 40%" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userEngagementData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Engagement (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Comments: 10, Shares: 5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="adRevenueData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ad Revenue Data (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., CPM: $2.50, CTR: 0.5%" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <Button type="submit" disabled={isLoading} className="bg-accent text-accent-foreground hover:bg-accent/90">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Get Suggestions
                </>
              )}
            </Button>
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {suggestions && (
              <Alert variant="default" className="w-full bg-primary/10 border-primary/30">
                <AlertTitle className="text-primary font-semibold">Optimization Suggestions</AlertTitle>
                <AlertDescription>
                  <h4 className="font-medium mt-2 mb-1">Suggestions:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {suggestions.suggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                  <h4 className="font-medium mt-3 mb-1">Explanation:</h4>
                  <p>{suggestions.explanation}</p>
                </AlertDescription>
              </Alert>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default AdOptimizationTool;
