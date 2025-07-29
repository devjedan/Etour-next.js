import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Important information about the use of our website and services
          </p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6">Website Disclaimer</h2>
              
              <h3 className="text-xl font-semibold mb-4">1. General Information</h3>
              <p className="mb-4">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, ETour excludes all representations, warranties, conditions and terms related to our website and the use of this website.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">2. Accuracy of Information</h3>
              <p className="mb-4">
                While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties about the completeness, accuracy, reliability, suitability or availability of the website or the information, products, services, or related graphics for any purpose.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">3. External Links</h3>
              <p className="mb-4">
                Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">4. Travel Risks</h3>
              <p className="mb-4">
                Travel involves inherent risks including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Changes in political, social, or economic conditions</li>
                <li>Natural disasters and weather conditions</li>
                <li>Health and safety risks</li>
                <li>Transportation delays and cancellations</li>
                <li>Currency fluctuations</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">5. Third Party Services</h3>
              <p className="mb-4">
                ETour acts as an intermediary between travelers and various service providers including airlines, hotels, transportation companies, and local operators. We are not responsible for the acts, errors, omissions, representations, warranties, breaches or negligence of any such suppliers.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">6. Price Changes</h3>
              <p className="mb-4">
                Prices shown on our website are subject to change without notice due to factors including but not limited to currency fluctuations, fuel surcharges, taxes, and availability.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">7. Photography and Images</h3>
              <p className="mb-4">
                Images on our website are for illustration purposes only. Actual accommodations, transportation, and destinations may vary from the images shown.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">8. Limitation of Liability</h3>
              <p className="mb-4">
                In no event shall ETour be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising from your use of the website or any travel services.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">9. Government Regulations</h3>
              <p className="mb-4">
                Travelers are responsible for complying with all government regulations including passport, visa, health, and customs requirements for their destinations.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">10. Medical Conditions</h3>
              <p className="mb-4">
                Travelers with medical conditions should consult their physician before traveling. ETour is not responsible for any medical emergencies or conditions that may arise during travel.
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

export default Disclaimer;