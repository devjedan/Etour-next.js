import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
              
              <h3 className="text-xl font-semibold mb-4">1. Booking and Payment</h3>
              <p className="mb-4">
                All bookings are subject to availability and confirmation. A booking is considered confirmed only after receipt of the required deposit and written confirmation from ETour.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">2. Cancellation Policy</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Cancellation 30+ days before departure: 25% of tour cost</li>
                <li>Cancellation 15-29 days before departure: 50% of tour cost</li>
                <li>Cancellation 7-14 days before departure: 75% of tour cost</li>
                <li>Cancellation less than 7 days: 100% of tour cost</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">3. Travel Insurance</h3>
              <p className="mb-4">
                We strongly recommend purchasing comprehensive travel insurance. ETour is not responsible for any losses due to medical emergencies, trip cancellations, or other unforeseen circumstances.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">4. Passport and Visa Requirements</h3>
              <p className="mb-4">
                Travelers are responsible for ensuring their passport is valid for at least 6 months from travel date and obtaining necessary visas for all destinations.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">5. Liability</h3>
              <p className="mb-4">
                ETour acts as an agent for various service providers. Our liability is limited to the amount paid for the tour package. We are not responsible for delays, cancellations, or changes by airlines, hotels, or other service providers.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">6. Force Majeure</h3>
              <p className="mb-4">
                ETour is not liable for any delay, cancellation, or loss caused by circumstances beyond our control including but not limited to natural disasters, strikes, political unrest, or pandemic situations.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">7. Changes to Itinerary</h3>
              <p className="mb-4">
                ETour reserves the right to modify itineraries due to local conditions, safety concerns, or circumstances beyond our control. Every effort will be made to maintain the integrity of the tour.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">8. Complaints and Disputes</h3>
              <p className="mb-4">
                Any complaints must be reported immediately to our tour guide or local representative. Disputes will be handled according to Indian law and jurisdiction of Delhi courts.
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

export default TermsConditions;