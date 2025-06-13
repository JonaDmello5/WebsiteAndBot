import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="AdPublisher" />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 max-w-screen-md">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose-base max-w-none dark:prose-invert">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using AdPublisher ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>

            <h2>2. Description of Service</h2>
            <p>AdPublisher provides content and information related to various topics and displays advertisements, including those served by Google AdSense. The content is provided for informational purposes only.</p>
            
            <h2>3. User Conduct</h2>
            <p>You agree not to use the Website for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Website in any way that could damage the Website, the services, or the general business of AdPublisher.</p>

            <h2>4. Intellectual Property</h2>
            <p>The Website and its original content, features, and functionality are owned by AdPublisher and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

            <h2>5. Third-Party Advertising</h2>
            <p>The Website displays advertisements from third parties, including Google AdSense. AdPublisher is not responsible for the content of these advertisements or the practices of such third-party advertisers. Your interactions with advertisers found on or through the Website are solely between you and such advertisers.</p>

            <h2>6. Disclaimer of Warranties</h2>
            <p>The Website is provided on an "AS IS" and "AS AVAILABLE" basis. AdPublisher makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h2>7. Limitation of Liability</h2>
            <p>In no event shall AdPublisher or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AdPublisher's Website, even if AdPublisher or an AdPublisher authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            
            <h2>8. Changes to Terms</h2>
            <p>AdPublisher reserves the right to modify these Terms of Service at any time. We will do so by posting and drawing attention to the updated terms on the Website. Your decision to continue to visit and make use of the Website after such changes have been made constitutes your formal acceptance of the new Terms of Service.</p>

            <h2>9. Governing Law</h2>
            <p>Any claim relating to AdPublisher's Website shall be governed by the laws of the jurisdiction of AdPublisher's owner without regard to its conflict of law provisions.</p>

            <h2>10. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at: <a href="mailto:contact@adpublisher.com">contact@adpublisher.com</a>.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
