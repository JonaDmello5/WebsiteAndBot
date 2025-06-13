import type { FC } from 'react';
import { cn } from '@/lib/utils';

interface AdPlaceholderProps {
  label: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const AdPlaceholder: FC<AdPlaceholderProps> = ({ label, width, height, className }) => {
  const dynamicStyle: React.CSSProperties = {};
  if (width) dynamicStyle.width = typeof width === 'number' ? `${width}px` : width;
  if (height) dynamicStyle.height = typeof height === 'number' ? `${height}px` : height;
  
  // Ensure minimum height for visibility if height is not explicitly "auto" or a small value
  if (height !== 'auto' && (!height || (typeof height === 'number' && height < 50))) {
    dynamicStyle.minHeight = '50px';
  }


  return (
    <div
      className={cn(
        'flex items-center justify-center border-2 border-dashed border-muted-foreground/50 bg-muted/20 text-muted-foreground p-4 rounded-lg shadow-inner text-center text-xs sm:text-sm',
        className
      )}
      style={dynamicStyle}
      aria-label={`Ad Slot: ${label}`}
      data-ai-hint="advertisement banner"
    >
      <p>Ad Slot: {label}</p>
    </div>
  );
};

export default AdPlaceholder;
