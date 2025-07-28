import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  MapPin, 
  Globe, 
  Trophy, 
  Heart, 
  Mountain, 
  Building2,
  Calendar,
  Users,
  Star,
  ArrowRight
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import tourCategories from "@/assets/tour-categories.jpg";

const Home = () => {
  const tourSectors = [
    {
      name: "Domestic Tours",
      description: "Explore the incredible beauty of India",
      icon: MapPin,
      color: "tour-domestic",
      link: "/sector/domestic",
      image: heroBanner,
      features: ["Heritage Sites", "Hill Stations", "Beaches", "Wildlife"]
    },
    {
      name: "International Tours",
      description: "Discover amazing destinations worldwide",
      icon: Globe,
      color: "tour-international", 
      link: "/sector/international",
      image: heroBanner,
      features: ["Europe", "Asia", "Americas", "Australia"]
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
      description: "Romantic getaways for couples",
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
      features: ["Mountain", "Desert", "Forest", "River"]
    },
    {
      name: "Heritage Tours",
      description: "Cultural and historical journeys",
      icon: Building2,
      color: "tour-heritage",
      link: "/sector/heritage",
      image: heroBanner,
      features: ["Monuments", "Museums", "Culture", "History"]
    }
  ];

  const featuredOffers = [
    {
      title: "Golden Triangle Tour",
      price: "₹15,999",
      duration: "6 Days",
      rating: 4.8,
      image: heroBanner,
      discount: "20% OFF"
    },
    {
      title: "Kerala Backwaters",
      price: "₹22,999", 
      duration: "8 Days",
      rating: 4.9,
      image: heroBanner,
      discount: "15% OFF"
    },
    {
      title: "Goa Beach Holiday",
      price: "₹12,999",
      duration: "5 Days", 
      rating: 4.7,
      image: heroBanner,
      discount: "25% OFF"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={heroBanner}
          alt="Travel destinations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-gradient"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Discover Your Next
              <span className="text-secondary block">Adventure</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              From the majestic Himalayas to exotic international destinations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/search">
                  <Calendar className="w-5 h-5" />
                  Plan Your Trip
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                View All Tours
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advertisement Panels */}
      <section className="py-4 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center gap-4">
            <Card className="flex-1 p-4 hover-lift cursor-pointer">
              <div className="text-center">
                <h3 className="font-semibold text-primary">Summer Special</h3>
                <p className="text-sm text-muted-foreground">Hill Station packages from ₹8,999</p>
              </div>
            </Card>
            <Card className="flex-1 p-4 hover-lift cursor-pointer">
              <div className="text-center">
                <h3 className="font-semibold text-secondary">Weekend Getaways</h3>
                <p className="text-sm text-muted-foreground">Quick escapes starting ₹3,999</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tour Sectors */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Choose Your Adventure</h2>
            <p className="text-lg text-muted-foreground">Explore our diverse range of tour categories</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourSectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card key={index} className="overflow-hidden hover-lift cursor-pointer group">
                  <Link to={sector.link}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                      <div className={`absolute top-4 left-4 w-12 h-12 bg-${sector.color} rounded-full flex items-center justify-center shadow-medium`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{sector.name}</h3>
                      <p className="text-muted-foreground mb-4">{sector.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {sector.features.map((feature, i) => (
                          <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Button variant="tour" className="w-full">
                        Explore Tours
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Featured Offers</h2>
            <p className="text-lg text-muted-foreground">Don't miss these amazing deals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredOffers.map((offer, index) => (
              <Card key={index} className="overflow-hidden hover-lift cursor-pointer group">
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {offer.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{offer.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{offer.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">{offer.price}</div>
                    <Button variant="booking" size="sm">
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-float">
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-white/90">Happy Travelers</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/90">Destinations</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '3s' }}>
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="text-white/90">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;