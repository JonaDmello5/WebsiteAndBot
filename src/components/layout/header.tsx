import Link from 'next/link';
import { Megaphone } from 'lucide-react';
import AdPlaceholder from '@/components/ads/ad-placeholder';
import { Card } from '@/components/ui/card';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Megaphone className="h-8 w-8" />
            <h1 className="text-2xl font-bold font-headline">{title}</h1>
          </Link>
          <div className="w-full sm:w-auto max-w-lg sm:max-w-none">
             <AdPlaceholder label="Top Banner (e.g., 728x90 or responsive)" height="90px" className="min-w-[300px] sm:min-w-[468px] md:min-w-[728px]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
