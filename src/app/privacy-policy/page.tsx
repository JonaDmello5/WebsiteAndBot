import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="ClickSynergy" />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 max-w-screen-md">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose-base max-w-none dark:prose-invert">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <h2>1. Introduction</h2>
            <p>Welcome to ClickSynergy. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

            <h2>2. Information We Collect</h2>
            <p>We may collect personal information such as your name and email address if you voluntarily provide it to us (e.g., by contacting us). We may also collect non-personal information, such as browser type, operating system, and website usage data through cookies and other tracking technologies.</p>
            <p>Our website uses Google AdSense, a service provided by Google Inc. Google AdSense uses cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Ads Settings</a>.</p>

            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our website.</li>
              <li>Improve, personalize, and expand our website.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service.</li>
              <li>Serve advertisements, including personalized ads through Google AdSense.</li>
            </ul>

            <h2>4. Third-Party Advertisers</h2>
            <p>We may use third-party advertising companies to serve ads when you visit the website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.</p>
            <p>For more information about Google AdSense and its privacy practices, please visit <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google AdSense Privacy & Terms</a>.</p>
            
            <h2>5. Your Choices</h2>
            <p>You can choose to disable cookies through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers' respective websites.</p>

            <h2>6. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2>7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:jonadmello6@gmail.com">jonadmello6@gmail.com</a>.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
