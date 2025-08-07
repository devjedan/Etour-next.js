import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuickViewModal from "@/components/ui/QuickViewModal";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { useParams } from "react-router-dom";

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

interface TourSector {
  ctgMasterId: number;
  ctgId: string;
  ctgName: string;
  ctgImgPath: string;
  flag: boolean;
}

const Home = () => {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [showHero, setShowHero] = useState(true);
  const [tourSectors, setTourSectors] = useState<TourSector[]>([]);
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:8088/api/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTourSectors(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
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
                From ancient temples to modern cities, from serene beaches to
                mighty mountains – explore the world with our curated travel
                experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/search">
                    Explore Tours
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link to="/contact">Plan My Trip</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tour Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our diverse range of tour categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourSectors.map((sector) => (
              <Card
                key={sector.ctgId}
                className="group hover-lift cursor-pointer overflow-hidden"
              >
                <Link to={`/categories/${sector.ctgId}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`http://localhost:8080${sector.ctgImgPath}`}
                      alt={sector.ctgName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-semibold">
                          {sector.ctgName}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
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
