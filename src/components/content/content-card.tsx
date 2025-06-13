import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { FC, ReactNode } from 'react';

interface ContentCardProps {
  title: string;
  description?: string;
  content: ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  imageHint?: string;
  date?: string;
  chart?: ReactNode;
}

const ContentCard: FC<ContentCardProps> = ({ title, description, content, imageUrl, imageAlt, imageHint, date, chart }) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {date && <p className="text-xs text-muted-foreground mt-1">{date}</p>}
      </CardHeader>
      {imageUrl && (
        <div className="relative w-full h-48 sm:h-64 md:h-80">
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHint || "article image"}
          />
        </div>
      )}
      <CardContent className="prose prose-sm sm:prose-base max-w-none dark:prose-invert mt-4">
        {content}
      </CardContent>
      {chart && (
        <div className="p-4 sm:p-6">
          {chart}
        </div>
      )}
      <CardFooter>
        {/* Placeholder for potential actions like "Read More" or social shares */}
      </CardFooter>
    </Card>
  );
};

export default ContentCard;
