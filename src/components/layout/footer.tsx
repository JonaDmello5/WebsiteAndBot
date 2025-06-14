import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card shadow-md mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AdPublisher. All rights reserved.
        </p>
        <p className="text-sm mt-1">
          Contact: <a href="mailto:jonadmello6@gmail.com" className="text-primary hover:underline">jonadmello6@gmail.com</a>
        </p>
        <nav className="mt-2">
          <Link href="/privacy-policy" className="text-sm text-primary hover:underline mx-2">
            Privacy Policy
          </Link>
          <span className="text-sm">|</span>
          <Link href="/terms-of-service" className="text-sm text-primary hover:underline mx-2">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
