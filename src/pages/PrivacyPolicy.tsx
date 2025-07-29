import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
              
              <h3 className="text-xl font-semibold mb-4">1. Information We Collect</h3>
              <p className="mb-4">
                We collect information you provide directly to us, such as when you create an account, make a booking, or contact us for support. This includes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Personal information (name, email, phone number, address)</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Travel preferences and requirements</li>
                <li>Communication history with our support team</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">2. How We Use Your Information</h3>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Process your bookings and provide travel services</li>
                <li>Communicate with you about your trips and our services</li>
                <li>Improve our website and services</li>
                <li>Send you promotional offers (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">3. Information Sharing</h3>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers (hotels, airlines, local tour operators) necessary for your trip</li>
                <li>Payment processors for transaction processing</li>
                <li>Legal authorities when required by law</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">4. Data Security</h3>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data and secure payment processing.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">5. Cookies and Tracking</h3>
              <p className="mb-4">
                Our website uses cookies to enhance your browsing experience, remember your preferences, and analyze website traffic. You can control cookie settings through your browser.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">6. Your Rights</h3>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">7. Children's Privacy</h3>
              <p className="mb-4">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">8. Changes to This Policy</h3>
              <p className="mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">9. Contact Us</h3>
              <p className="mb-4">
                If you have any questions about this privacy policy, please contact us at privacy@etour.com or call +91-11-2345-6789.
              </p>
              
              <p className="text-sm text-muted-foreground mt-8">
                Last updated: January 2024
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;