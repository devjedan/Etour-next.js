import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuickViewModal from "@/components/ui/QuickViewModal";
import { 
  Calendar, 
  Clock, 
  IndianRupee, 
  Star,
  Users,
  MapPin,
  ArrowRight
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const ProductPage = () => {
  const { sectorId, subSectorId } = useParams();
  const [selectedTour, setSelectedTour] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Mock data for products
  const products = [
    {
      id: "golden-triangle-deluxe",
      name: "Golden Triangle Deluxe",
      description: "Explore Delhi, Agra, and Jaipur in luxury",
      image: heroBanner,
      duration: "6 Days / 5 Nights",
      price: "₹15,999",
      originalPrice: "₹19,999",
      rating: 4.8,
      reviews: 245,
      highlights: ["Taj Mahal Visit", "Luxury Hotels", "Private Transport", "Guide Included"],
      difficulty: "Easy",
      groupSize: "2-15 people"
    },
    {
      id: "rajasthan-royal",
      name: "Rajasthan Royal Heritage",
      description: "Experience the royal heritage of Rajasthan",
      image: heroBanner,
      duration: "8 Days / 7 Nights", 
      price: "₹22,999",
      originalPrice: "₹27,999",
      rating: 4.9,
      reviews: 189,
      highlights: ["Palace Hotels", "Camel Safari", "Cultural Shows", "Desert Camping"],
      difficulty: "Moderate",
      groupSize: "4-20 people"
    },
    {
      id: "kerala-backwaters",
      name: "Kerala Backwaters Cruise",
      description: "Peaceful cruise through Kerala's backwaters",
      image: heroBanner,
      duration: "5 Days / 4 Nights",
      price: "₹18,999",
      originalPrice: "₹23,999", 
      rating: 4.7,
      reviews: 156,
      highlights: ["Houseboat Stay", "Ayurveda Spa", "Wildlife Safari", "Beach Resort"],
      difficulty: "Easy",
      groupSize: "2-12 people"
    },
    {
      id: "goa-beach-special",
      name: "Goa Beach Paradise",
      description: "Relax on the beautiful beaches of Goa",
      image: heroBanner,
      duration: "4 Days / 3 Nights",
      price: "₹12,999",
      originalPrice: "₹16,999",
      rating: 4.6,
      reviews: 298,
      highlights: ["Beach Resort", "Water Sports", "Sunset Cruise", "Local Cuisine"],
      difficulty: "Easy",
      groupSize: "2-25 people"
    },
    {
      id: "himachal-adventure",
      name: "Himachal Adventure Trek",
      description: "Thrilling trekking experience in Himachal",
      image: heroBanner,
      duration: "7 Days / 6 Nights",
      price: "₹14,999",
      originalPrice: "₹18,999",
      rating: 4.5,
      reviews: 167,
      highlights: ["Mountain Trekking", "Camping", "Adventure Sports", "Local Culture"],
      difficulty: "Challenging",
      groupSize: "6-15 people"
    },
    {
      id: "kashmir-valley",
      name: "Kashmir Valley Beauty",
      description: "Discover the paradise of Kashmir",
      image: heroBanner,
      duration: "6 Days / 5 Nights",
      price: "₹19,999",
      originalPrice: "₹24,999",
      rating: 4.8,
      reviews: 134,
      highlights: ["Dal Lake", "Shikara Ride", "Gulmarg", "Pahalgam"],
      difficulty: "Easy",
      groupSize: "2-18 people"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-100";
      case "Moderate": return "text-yellow-600 bg-yellow-100"; 
      case "Challenging": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-4 bg-muted">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/home" className="hover:text-primary">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link to={`/sector/${sectorId}`} className="hover:text-primary">Tours</Link>
            <span className="mx-2">&gt;</span>
            <span>{subSectorId} Products</span>
          </nav>
        </div>
      </section>

      {/* Page Header */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Tour Products</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose from our carefully selected tour packages
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover-lift cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(product.difficulty)}`}>
                      {product.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Save {Math.round(((parseInt(product.originalPrice.replace('₹', '').replace(',', '')) - parseInt(product.price.replace('₹', '').replace(',', ''))) / parseInt(product.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                  
                  {/* Key Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{product.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{product.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{product.rating} ({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Multi-city</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.highlights.slice(0, 3).map((highlight, index) => (
                        <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                      {product.highlights.length > 3 && (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          +{product.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
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
                      onClick={() => {
                        setSelectedTour(product);
                        setIsQuickViewOpen(true);
                      }}
                    >
                      Quick View
                    </Button>
                    <Button 
                      variant="tour" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <Link to={`/tour/${product.id}`}>
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      <QuickViewModal 
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        tour={selectedTour}
      />

      <Footer />
    </div>
  );
};

export default ProductPage;