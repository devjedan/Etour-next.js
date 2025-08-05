import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuickViewModal from "@/components/ui/QuickViewModal";
import { 
  ArrowRight, 
  Star, 
  Clock, 
  Users, 
  IndianRupee, 
  MapPin,
  Globe,
  Mountain,
  Utensils,
  Trophy,
  Heart,
  Camera
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import tourCategories from "@/assets/tour-categories.jpg";

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
  difficulty?: string;
  groupSize: string;
}

const Home = () => {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [showHero, setShowHero] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Hide hero section if coming from showcase
    if (location.state?.fromShowcase) {
      setShowHero(false);
    }
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [location]);

  const tourSectors = [
    {
      name: "Domestic Tours",
      description: "Explore incredible India",
      icon: MapPin,
      color: "tour-domestic",
      link: "/sector/domestic",
      image: heroBanner,
      features: ["Golden Triangle", "Kerala", "Rajasthan", "Himachal"]
    },
    {
      name: "International Tours", 
      description: "Discover the world beyond",
      icon: Globe,
      color: "tour-international", 
      link: "/sector/international",
      image: heroBanner,
      features: ["Europe", "Southeast Asia", "Middle East", "Americas"]
    },
    {
      name: "Sports Tourism",
      description: "Adventure and sports activities",
      icon: Trophy,
      color: "tour-sports",
      link: "/sector/sports",
      image: heroBanner,
      features: ["Trekking", "Water Sports", "Adventure", "Cycling"]
    },
    {
      name: "Couple Tours",
      description: "Romantic getaways for two",
      icon: Heart,
      color: "tour-couple",
      link: "/sector/couple",
      image: heroBanner,
      features: ["Honeymoon", "Anniversary", "Romantic", "Private"]
    },
    {
      name: "Adventure Tours",
      description: "Thrilling adventure experiences",
      icon: Mountain,
      color: "tour-adventure",
      link: "/sector/adventure",
      image: heroBanner,
      features: ["Mountaineering", "Rafting", "Safari", "Extreme Sports"]
    },
    {
      name: "Heritage Tours", 
      description: "Explore cultural treasures",
      icon: Camera,
      color: "tour-heritage",
      link: "/sector/heritage",
      image: heroBanner,
      features: ["Monuments", "Culture", "History", "Museums"]
    }
  ];

  const featuredTours = [
    {
      id: "golden-triangle-1",
      name: "Golden Triangle Classic",
      description: "Delhi, Agra, Jaipur - The classic India experience",
      image: heroBanner,
      duration: "6 Days / 5 Nights",
      price: "₹15,999",
      originalPrice: "₹19,999",
      rating: 4.8,
      reviews: 324,
      highlights: ["Taj Mahal", "Red Fort", "Amber Palace", "Local Guide"],
      groupSize: "2-15 people"
    },
    {
      id: "golden-triangle-2", 
      name: "Kerala Backwaters",
      description: "Serene backwaters and spice plantations of God's Own Country",
      image: heroBanner,
      duration: "7 Days / 6 Nights", 
      price: "₹18,999",
      originalPrice: "₹23,999",
      rating: 4.9,
      reviews: 267,
      highlights: ["Houseboat", "Spice Gardens", "Ayurveda", "Beach Resort"],
      groupSize: "2-12 people"
    },
    {
      id: "golden-triangle-3",
      name: "Rajasthan Royal",
      description: "Palaces, forts, and desert adventures in the royal state",
      image: heroBanner,
      duration: "8 Days / 7 Nights",
      price: "₹22,999", 
      originalPrice: "₹28,999",
      rating: 4.7,
      reviews: 189,
      highlights: ["Desert Safari", "Palace Hotels", "Camel Ride", "Folk Dance"],
      groupSize: "2-10 people"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Conditional Hero Section */}
      {showHero && (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0">
            <img 
              src={heroBanner} 
              alt="Travel destinations" 
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Discover Your Next
                <span className="text-secondary block">Adventure</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                From ancient temples to modern cities, from serene beaches to mighty mountains - 
                explore the world with our curated travel experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/search">
                    Explore Tours
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/contact">Plan My Trip</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tour Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Choose Your Adventure</h2>
            <p className="text-lg text-muted-foreground">Explore our diverse range of tour categories</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourSectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Card key={sector.name} className="group hover-lift cursor-pointer overflow-hidden">
                  <Link to={sector.link}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={sector.image} 
                        alt={sector.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Icon className="w-12 h-12 mx-auto mb-3" />
                          <h3 className="text-xl font-semibold">{sector.name}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4">{sector.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {sector.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Tours</h2>
            <p className="text-muted-foreground">Hand-picked experiences for unforgettable journeys</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <Card key={tour.id} className="overflow-hidden hover-lift cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{tour.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{tour.rating} ({tour.reviews})</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.slice(0, 3).map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">{tour.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{tour.originalPrice}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">per person</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setSelectedTour(tour)}
                    >
                      Quick View
                    </Button>
                    <Button variant="booking" size="sm" className="flex-1" asChild>
                      <Link to={`/book/${tour.id}`}>Book Now</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
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

export default Home;