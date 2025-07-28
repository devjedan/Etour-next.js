import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronFirst, 
  ChevronLast,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Star
} from "lucide-react";
import { useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";

const SectorPage = () => {
  const { sectorId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock data for different sectors
  const sectorData = {
    domestic: {
      title: "Domestic Tours",
      description: "Explore the incredible diversity of India",
      breadcrumb: "Tours >> Domestic",
      subSectors: [
        {
          id: "north-india",
          name: "North India",
          description: "Delhi, Agra, Jaipur, Kashmir",
          image: heroBanner,
          tourCount: 25,
          startingPrice: "₹8,999"
        },
        {
          id: "south-india", 
          name: "South India",
          description: "Kerala, Tamil Nadu, Karnataka",
          image: heroBanner,
          tourCount: 18,
          startingPrice: "₹12,999"
        },
        {
          id: "west-india",
          name: "West India", 
          description: "Goa, Maharashtra, Rajasthan",
          image: heroBanner,
          tourCount: 22,
          startingPrice: "₹7,999"
        },
        {
          id: "east-india",
          name: "East India",
          description: "West Bengal, Odisha, Seven Sisters",
          image: heroBanner,
          tourCount: 15,
          startingPrice: "₹9,999"
        },
        {
          id: "hill-stations",
          name: "Hill Stations",
          description: "Manali, Shimla, Darjeeling",
          image: heroBanner,
          tourCount: 30,
          startingPrice: "₹6,999"
        },
        {
          id: "beaches",
          name: "Beach Destinations",
          description: "Goa, Kerala, Andaman",
          image: heroBanner,
          tourCount: 20,
          startingPrice: "₹11,999"
        }
      ]
    },
    international: {
      title: "International Tours",
      description: "Discover amazing destinations worldwide",
      breadcrumb: "Tours >> International",
      subSectors: [
        {
          id: "europe",
          name: "Europe",
          description: "France, Italy, Switzerland, Germany",
          image: heroBanner,
          tourCount: 35,
          startingPrice: "₹89,999"
        },
        {
          id: "asia",
          name: "Asia",
          description: "Thailand, Singapore, Malaysia, Japan",
          image: heroBanner,
          tourCount: 28,
          startingPrice: "₹45,999"
        },
        {
          id: "middle-east",
          name: "Middle East",
          description: "Dubai, Turkey, Egypt",
          image: heroBanner,
          tourCount: 15,
          startingPrice: "₹55,999"
        },
        {
          id: "americas",
          name: "Americas",
          description: "USA, Canada, Brazil",
          image: heroBanner,
          tourCount: 20,
          startingPrice: "₹125,999"
        }
      ]
    },
    sports: {
      title: "Sports Tourism",
      description: "Adventure and sports activities for thrill seekers",
      breadcrumb: "Tours >> Sports Tourism",
      subSectors: [
        {
          id: "trekking",
          name: "Trekking & Hiking",
          description: "Mountain trails and hiking expeditions",
          image: heroBanner,
          tourCount: 40,
          startingPrice: "₹3,999"
        },
        {
          id: "water-sports",
          name: "Water Sports",
          description: "Scuba diving, surfing, rafting",
          image: heroBanner,
          tourCount: 25,
          startingPrice: "₹8,999"
        },
        {
          id: "adventure",
          name: "Adventure Sports",
          description: "Paragliding, rock climbing, skiing",
          image: heroBanner,
          tourCount: 30,
          startingPrice: "₹12,999"
        },
        {
          id: "cycling",
          name: "Cycling Tours",
          description: "Bicycle tours through scenic routes",
          image: heroBanner,
          tourCount: 18,
          startingPrice: "₹5,999"
        }
      ]
    },
    couple: {
      title: "Couple Tours",
      description: "Romantic getaways for couples",
      breadcrumb: "Tours >> Couple Tours",
      subSectors: [
        {
          id: "honeymoon",
          name: "Honeymoon Packages",
          description: "Perfect romantic destinations for newlyweds",
          image: heroBanner,
          tourCount: 35,
          startingPrice: "₹25,999"
        },
        {
          id: "anniversary",
          name: "Anniversary Specials",
          description: "Celebrate your love with special packages",
          image: heroBanner,
          tourCount: 20,
          startingPrice: "₹18,999"
        },
        {
          id: "romantic-international",
          name: "International Romance",
          description: "Exotic international destinations for couples",
          image: heroBanner,
          tourCount: 25,
          startingPrice: "₹85,999"
        }
      ]
    }
  };

  const currentSector = sectorData[sectorId as keyof typeof sectorData];
  
  if (!currentSector) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Sector Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested tour sector does not exist.</p>
          <Button asChild>
            <Link to="/home">Return to Home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const totalPages = Math.ceil(currentSector.subSectors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSubSectors = currentSector.subSectors.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <span>{currentSector.breadcrumb}</span>
          </nav>
        </div>
      </section>

      {/* Page Header */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{currentSector.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {currentSector.description}
          </p>
        </div>
      </section>

      {/* Sub-Sectors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentSubSectors.map((subSector, index) => (
              <Card key={subSector.id} className="overflow-hidden hover-lift cursor-pointer group">
                <Link to={`/products/${sectorId}/${subSector.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={subSector.image}
                      alt={subSector.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {subSector.tourCount} Tours
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{subSector.name}</h3>
                    <p className="text-muted-foreground mb-4">{subSector.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{subSector.tourCount} tours</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>4.5+</span>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-primary">
                        From {subSector.startingPrice}
                      </div>
                    </div>
                    <Button variant="tour" className="w-full mt-4">
                      View Tours
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Link>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                <ChevronFirst className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                <ChevronLast className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SectorPage;