import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Plus, Clock, IndianRupee, Users } from "lucide-react";

const TourAddons = () => {
  const { tourId } = useParams();

  const addons = [
    {
      id: "spa-wellness",
      name: "Spa & Wellness Package",
      description: "Rejuvenating spa treatments and wellness activities",
      price: "₹2,999",
      duration: "Half Day",
      includes: ["Ayurvedic Massage", "Yoga Session", "Meditation", "Herbal Tea"],
      available: true
    },
    {
      id: "adventure-sports",
      name: "Adventure Sports Package",
      description: "Exciting adventure activities for thrill seekers",
      price: "₹3,999",
      duration: "Full Day",
      includes: ["River Rafting", "Rock Climbing", "Zip Line", "Safety Equipment"],
      available: true
    },
    {
      id: "cultural-immersion",
      name: "Cultural Immersion Experience",
      description: "Deep dive into local culture and traditions",
      price: "₹1,999",
      duration: "Half Day",
      includes: ["Village Tour", "Traditional Cooking", "Folk Dance", "Local Guide"],
      available: true
    },
    {
      id: "wildlife-safari",
      name: "Extended Wildlife Safari",
      description: "Extended wildlife viewing experience",
      price: "₹4,999",
      duration: "Full Day",
      includes: ["Jeep Safari", "Bird Watching", "Nature Photography", "Lunch"],
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-4 bg-muted">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground flex items-center gap-2">
            <Link to="/home" className="hover:text-primary">Home</Link>
            <span>&gt;</span>
            <Link to={`/tour/${tourId}`} className="hover:text-primary">Tour Details</Link>
            <span>&gt;</span>
            <span>Add-ons</span>
          </nav>
        </div>
      </section>

      {/* Header */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <Button variant="outline" className="mb-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
            <Link to={`/tour/${tourId}`}>
              <ArrowLeft className="w-4 h-4" />
              Back to Tour
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-4">Tour Add-ons</h1>
          <p className="text-xl text-white/90">Enhance your travel experience with optional add-on packages</p>
        </div>
      </section>

      {/* Add-ons List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addons.map((addon) => (
              <Card key={addon.id} className="p-6 hover-lift">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{addon.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    addon.available 
                      ? "bg-green-100 text-green-600" 
                      : "bg-red-100 text-red-600"
                  }`}>
                    {addon.available ? "Available" : "Unavailable"}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">{addon.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-primary" />
                    <span className="font-semibold">{addon.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{addon.duration}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Includes:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {addon.includes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant={addon.available ? "booking" : "outline"} 
                  className="w-full"
                  disabled={!addon.available}
                >
                  {addon.available ? (
                    <>
                      <Plus className="w-4 h-4" />
                      Add to Tour
                    </>
                  ) : (
                    "Currently Unavailable"
                  )}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourAddons;