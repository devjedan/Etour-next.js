import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight } from "lucide-react";

interface TourSector {
  ctgMasterId: number;
  ctgId: string;
  ctgName: string;
  ctgImgPath: string;
  flag: boolean;
}

const SectorPage = () => {
  const { sectorId } = useParams<{ sectorId: string }>();
  const [subSectors, setSubSectors] = useState<TourSector[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sectorId) return;
    setLoading(true);
    fetch(`http://localhost:8088/api/categories/${sectorId}`)
      .then((res) => res.json())
      .then((data) => {
        setSubSectors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load subcategories:", error);
        setLoading(false);
      });
  }, [sectorId]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Explore {sectorId} Tours</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover exciting subcategories within this tour sector.
          </p>
        </div>
      </section>

      {/* Sub-Sectors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <p className="text-center text-muted-foreground">Loading...</p>
          ) : subSectors.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No subcategories found.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subSectors.map((subSector) => (
                <Card
                  key={subSector.ctgId}
                  className="overflow-hidden hover-lift cursor-pointer group"
                >
                  <Link to={`/categories/${subSector.ctgId}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`http://localhost:8088${subSector.ctgImgPath}`}
                        alt={subSector.ctgName}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        Subcategory
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {subSector.ctgName}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Click to explore packages or further subcategories.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{subSector.ctgId}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>4.5+</span>
                          </div>
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
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SectorPage;
