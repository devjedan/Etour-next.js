import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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

  const tourSectors = [
    {
      name: "Domestic Tours",
      description: "Explore incredible India",
      icon: MapPin,
      color: "tour-domestic",
      link: "/sector/domestic",
      image: heroBanner,

    },
    {
      name: "International Tours",
      description: "Discover the world beyond",
      icon: Globe,
      color: "tour-international",
      link: "/sector/international",
      image: heroBanner,

    },
    {
      name: "special Tourism",
      description: "Adventure and sports activities",
      icon: Trophy,
      color: "tour-sports",
      link: "/sector/sports",
      image: heroBanner,
      features: ["Trekking", "Water Sports", "Adventure", "Cycling"],

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

    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />


          </div>


              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tour Categories */}
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
            {tourSectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Card

                >
                  <Link to={sector.link}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                          >
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



      <Footer />
    </div>
  );
};

export default Home;
