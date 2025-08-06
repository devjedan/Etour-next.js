import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuickViewModal from "@/components/ui/QuickViewModal";
import { Calendar, Clock, IndianRupee, Star, MapPin, Car } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

interface TourPackage {
  id: string;
  name: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  highlights: string[];
  groupSize: string;
}

const WeekendGetaways = () => {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const weekendPackages = [
    {
      id: "agra-weekend",
      name: "Agra Weekend Express",
      description: "Quick trip to see the magnificent Taj Mahal",
      image: heroBanner,
      duration: "2 Days / 1 Night",
      price: "₹6,999",
      originalPrice: "₹8,999",
      rating: 4.8,
      reviews: 324,
      distance: "3-4 hrs from Delhi",
      transport: "AC Car",
      highlights: ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Local Cuisine"],
      groupSize: "2-8 people"
    },
    {
      id: "rishikesh-weekend",
      name: "Rishikesh Adventure Weekend",
      description: "Yoga capital with river rafting and spiritual vibes",
      image: heroBanner,
      duration: "2 Days / 1 Night",
      price: "₹5,999",
      originalPrice: "₹7,999",
      rating: 4.7,
      reviews: 267,
      distance: "5-6 hrs from Delhi",
      transport: "AC Car",
      highlights: ["River Rafting", "Laxman Jhula", "Yoga Session", "Ganga Aarti"],
      groupSize: "2-8 people"
    },
    {
      id: "jaipur-weekend",
      name: "Jaipur Royal Weekend",
      description: "Pink city's palaces and culture in a quick getaway",
      image: heroBanner,
      duration: "2 Days / 1 Night",
      price: "₹7,999",
      originalPrice: "₹9,999",
      rating: 4.6,
      reviews: 189,
      distance: "4-5 hrs from Delhi",
      transport: "AC Car",
      highlights: ["Amber Fort", "City Palace", "Hawa Mahal", "Local Markets"],
      groupSize: "2-10 people"
    },
    {
      id: "mussoorie-weekend",
      name: "Mussoorie Hill Station",
      description: "Queen of Hills perfect for weekend relaxation",
      image: heroBanner,
      duration: "2 Days / 1 Night",
      price: "₹8,999",
      originalPrice: "₹11,999",
      rating: 4.5,
      reviews: 156,
      distance: "6-7 hrs from Delhi",
      transport: "AC Car",
      highlights: ["Mall Road", "Kempty Falls", "Gun Hill", "Cable Car"],
      groupSize: "2-6 people"
    },
    {
      id: "haridwar-weekend",
      name: "Haridwar Spiritual Weekend",
      description: "Holy city on banks of Ganges for spiritual rejuvenation",
      image: heroBanner,
      duration: "2 Days / 1 Night",
      price: "₹4,999",
      originalPrice: "₹6,999",
      rating: 4.4,
      reviews: 234,
      distance: "4-5 hrs from Delhi",
      transport: "AC Car",
      highlights: ["Har Ki Pauri", "Ganga Aarti", "Mansa Devi", "Chandi Devi"],
      groupSize: "2-8 people"
    },
    {
      id: "jim-corbett-weekend",
      name: "Jim Corbett Wildlife Weekend",
      description: "Wildlife safari and nature retreat near Delhi",
      image: heroBanner,
      duration: "2 Days / 1 Night",
      price: "₹9,999",
      originalPrice: "₹12,999",
      rating: 4.7,
      reviews: 178,
      distance: "5-6 hrs from Delhi",
      transport: "AC Car",
      highlights: ["Jeep Safari", "Wildlife Spotting", "Nature Walk", "River Side"],
      groupSize: "2-6 people"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="w-8 h-8" />
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Weekend Special
            </Badge>
          </div>
          <h1 className="text-5xl font-bold mb-6">Weekend Getaways</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Quick escapes from city life - Perfect 2-day trips to refresh and recharge
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Car className="w-4 h-4" />
              <span>AC Transport</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>2 Days Only</span>
            </div>
            <div className="flex items-center gap-1">
              <IndianRupee className="w-4 h-4" />
              <span>Best Value</span>
            </div>
          </div>
        </div>
      </section>

      {/* Weekend Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Weekend Escapes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Perfect getaways for busy professionals - short trips with maximum experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weekendPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover-lift cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="font-semibold">
                      Weekend Special
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Car className="w-3 h-3" />
                    {pkg.transport}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{pkg.description}</p>
                  
                  {/* Key Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{pkg.rating} ({pkg.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground col-span-2">
                      <MapPin className="w-4 h-4" />
                      <span>{pkg.distance}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.slice(0, 3).map((highlight, index) => (
                        <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                      {pkg.highlights.length > 3 && (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          +{pkg.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">per person</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setSelectedTour(pkg)}
                    >
                      Quick View
                    </Button>
                    <Button 
                      variant="tour" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <Link to={`/book/${pkg.id}`}>
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Weekend Tips */}
          <div className="mt-16">
            <Card className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-center">Weekend Travel Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Leave Friday Evening</h4>
                  <p className="text-sm text-muted-foreground">Start your journey Friday evening to maximize weekend time</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Car className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Pre-book Transport</h4>
                  <p className="text-sm text-muted-foreground">Avoid weekend rush by pre-booking your transport</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Choose Nearby</h4>
                  <p className="text-sm text-muted-foreground">Pick destinations within 6-7 hours for comfortable travel</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Book in Advance</h4>
                  <p className="text-sm text-muted-foreground">Weekend packages fill up fast, book early for best deals</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal 
        isOpen={!!selectedTour} 
        onClose={() => setSelectedTour(null)} 
        tour={selectedTour} 
      />

      <Footer />
    </div>
  );
};

export default WeekendGetaways;