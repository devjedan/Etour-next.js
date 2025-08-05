import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";

const TourDosAndDonts = () => {
  const { tourId } = useParams();

  const generalDos = [
    "Carry valid photo identification",
    "Pack according to weather conditions",
    "Stay hydrated throughout the journey",
    "Follow your guide's instructions",
    "Respect local customs and traditions",
    "Keep emergency contacts handy",
    "Carry basic first aid supplies",
    "Inform guide about any medical conditions"
  ];

  const generalDonts = [
    "Don't carry unnecessary valuables",
    "Don't wander off alone in unknown areas",
    "Don't ignore safety instructions",
    "Don't photograph people without permission",
    "Don't litter or damage the environment",
    "Don't consume tap water without purification",
    "Don't miss scheduled departure times",
    "Don't engage in illegal activities"
  ];

  const tourSpecificTips = [
    {
      category: "Mountain Tours",
      tips: [
        "Acclimatize properly to avoid altitude sickness",
        "Wear layered clothing for temperature changes",
        "Use sunscreen and sunglasses at high altitude",
        "Don't rush - take time to adjust to elevation"
      ]
    },
    {
      category: "Beach Tours", 
      tips: [
        "Apply waterproof sunscreen regularly",
        "Stay hydrated in hot weather",
        "Respect marine life and coral reefs",
        "Don't swim in rough seas or during red flags"
      ]
    },
    {
      category: "Cultural Tours",
      tips: [
        "Dress modestly when visiting religious sites",
        "Remove shoes before entering temples",
        "Learn basic local greetings",
        "Don't point feet towards religious objects"
      ]
    }
  ];

  const emergencyInfo = [
    {
      icon: AlertTriangle,
      title: "Emergency Contacts",
      content: "Keep tour guide and local emergency numbers saved in your phone"
    },
    {
      icon: Info,
      title: "Medical Emergency",
      content: "Inform guide immediately about any health issues or injuries"
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
            <span>Do's & Don'ts</span>
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
          <h1 className="text-4xl font-bold mb-4">Do's & Don'ts</h1>
          <p className="text-xl text-white/90">Important guidelines for a safe and enjoyable travel experience</p>
        </div>
      </section>

      {/* General Guidelines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Do's */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-green-600">Do's</h2>
              </div>
              <ul className="space-y-3">
                {generalDos.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Don'ts */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-red-600">Don'ts</h2>
              </div>
              <ul className="space-y-3">
                {generalDonts.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Tour Specific Tips */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Tour-Specific Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tourSpecificTips.map((category, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-primary">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Emergency Information */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-8">Emergency Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-5 h-5 text-orange-600" />
                      <h3 className="font-semibold">{info.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourDosAndDonts;