import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, IndianRupee, Star, Thermometer, Umbrella } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const SummerSpecial = () => {
  const summerPackages = [
    {
      id: "ladakh-summer",
      name: "Ladakh Summer Adventure",
      description: "Beat the heat with cool mountain air and breathtaking landscapes",
      image: heroBanner,
      duration: "8 Days / 7 Nights",
      price: "₹24,999",
      originalPrice: "₹32,999",
      rating: 4.9,
      reviews: 189,
      discount: "25% OFF",
      temperature: "10-20°C",
      highlights: ["Leh Palace", "Pangong Lake", "Nubra Valley", "Monasteries"]
    },
    {
      id: "manali-summer",
      name: "Manali Hill Station Escape",
      description: "Cool mountain breeze and scenic beauty await you",
      image: heroBanner,
      duration: "6 Days / 5 Nights",
      price: "₹18,999",
      originalPrice: "₹24,999",
      rating: 4.7,
      reviews: 245,
      discount: "24% OFF",
      temperature: "15-25°C",
      highlights: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Old Manali"]
    },
    {
      id: "shimla-summer",
      name: "Shimla Summer Retreat",
      description: "Queen of Hills offers perfect summer getaway",
      image: heroBanner,
      duration: "5 Days / 4 Nights",
      price: "₹15,999",
      originalPrice: "₹20,999",
      rating: 4.6,
      reviews: 156,
      discount: "24% OFF",
      temperature: "20-28°C",
      highlights: ["Mall Road", "Jakhu Temple", "Christ Church", "Toy Train"]
    },
    {
      id: "darjeeling-summer",
      name: "Darjeeling Summer Delight",
      description: "Tea gardens and cool weather in the lap of Himalayas",
      image: heroBanner,
      duration: "7 Days / 6 Nights",
      price: "₹21,999",
      originalPrice: "₹28,999",
      rating: 4.8,
      reviews: 134,
      discount: "24% OFF",
      temperature: "18-26°C",
      highlights: ["Tiger Hill", "Tea Gardens", "Toy Train", "Batasia Loop"]
    },
    {
      id: "ooty-summer",
      name: "Ooty Summer Bliss",
      description: "Queen of Nilgiris with pleasant weather year-round",
      image: heroBanner,
      duration: "4 Days / 3 Nights",
      price: "₹12,999",
      originalPrice: "₹16,999",
      rating: 4.5,
      reviews: 189,
      discount: "24% OFF",
      temperature: "15-25°C",
      highlights: ["Botanical Garden", "Lake", "Toy Train", "Rose Garden"]
    },
    {
      id: "kashmir-summer",
      name: "Kashmir Summer Paradise",
      description: "Heaven on Earth with perfect summer climate",
      image: heroBanner,
      duration: "8 Days / 7 Nights",
      price: "₹26,999",
      originalPrice: "₹35,999",
      rating: 4.9,
      reviews: 167,
      discount: "25% OFF",
      temperature: "12-22°C",
      highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Shikara Ride"]
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
            <Thermometer className="w-8 h-8" />
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Summer Special 2024
            </Badge>
          </div>
          <h1 className="text-5xl font-bold mb-6">Beat the Heat!</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Escape to cool destinations and enjoy special summer discounts up to 25% OFF
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Umbrella className="w-4 h-4" />
              <span>Cool Weather</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>Premium Packages</span>
            </div>
            <div className="flex items-center gap-1">
              <IndianRupee className="w-4 h-4" />
              <span>Best Prices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Summer Special Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked destinations with pleasant weather to beat the summer heat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {summerPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover-lift cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="destructive" className="font-semibold">
                      {pkg.discount}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Thermometer className="w-3 h-3" />
                    {pkg.temperature}
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
                    <Button variant="outline" size="sm" className="flex-1">
                      Quick View
                    </Button>
                    <Button 
                      variant="tour" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <Link to={`/tour/${pkg.id}`}>
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Summer Tips */}
          <div className="mt-16">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-center">Summer Travel Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Thermometer className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Stay Hydrated</h4>
                  <p className="text-sm text-muted-foreground">Carry water bottles and stay hydrated throughout your journey</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Umbrella className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Pack Light</h4>
                  <p className="text-sm text-muted-foreground">Bring light, breathable clothing and sun protection</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Book Early</h4>
                  <p className="text-sm text-muted-foreground">Summer is peak season, book early for best deals</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Plan Activities</h4>
                  <p className="text-sm text-muted-foreground">Plan outdoor activities for early morning or evening</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SummerSpecial;