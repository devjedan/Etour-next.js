import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Clock, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

interface TourPackage {
  id: number;
  name: string;
  info: string;
  image: string;
  duration: number;
  start: string;
  end: string;
  category: number;
}

const ProductPage = () => {
  const { sectorId, subSectorId } = useParams<{
    sectorId: string;
    subSectorId: string;
  }>();

  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!subSectorId) return;

    setLoading(true);
    fetch(`http://localhost:8088/api/categories/${subSectorId}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched package data:", data); // ✅ DEBUG LOG
        const mapped = data.map((pkg: any) => ({
          id: pkg.packageId,
          name: pkg.packageName,
          info: pkg.packageInfo,
          image: pkg.packageImagePath,
          duration: pkg.durationDays,
          start: pkg.startDate,
          end: pkg.endDate,
          category: pkg.ctgMasterId,
        }));
        setPackages(mapped);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching packages:", err);
        setLoading(false);
      });
  }, [subSectorId]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <section className="py-4 bg-muted">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/home" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <Link to={`/sector/${sectorId}`} className="hover:text-primary">
              Tours
            </Link>
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
            Explore our handpicked travel experiences
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <p className="text-center text-muted-foreground">
              Loading packages...
            </p>
          ) : packages.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No packages found.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden group hover-lift">
                  <Link to={`/packages/${pkg.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={
                          pkg.image
                            ? `http://localhost:8080${pkg.image}`
                            : heroBanner
                        }
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                        {pkg.info}
                      </p>

                      <div className="grid grid-cols-1 gap-2 text-sm mb-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{pkg.duration} Days</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {pkg.start} to {pkg.end}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>Category #{pkg.category}</span>
                        </div>
                      </div>

                      <Button variant="tour" className="w-full">
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
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

export default ProductPage;
