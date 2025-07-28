import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Search, 
  Calendar, 
  IndianRupee, 
  Clock, 
  Star,
  MapPin,
  Filter,
  ArrowRight,
  Users
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const SearchPage = () => {
  const [searchFilters, setSearchFilters] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    minPrice: "",
    maxPrice: "",
    minDuration: "",
    maxDuration: "",
    category: ""
  });

  const [searchResults, setSearchResults] = useState([
    {
      id: "golden-triangle-deluxe",
      name: "Golden Triangle Deluxe",
      startDate: "15 Jan 2024",
      endDate: "20 Jan 2024", 
      duration: "6 Days / 5 Nights",
      price: "₹15,999",
      rating: 4.8,
      image: heroBanner,
      category: "Heritage",
      description: "Explore Delhi, Agra, and Jaipur in luxury"
    },
    {
      id: "kerala-backwaters",
      name: "Kerala Backwaters",
      startDate: "22 Jan 2024",
      endDate: "29 Jan 2024",
      duration: "8 Days / 7 Nights", 
      price: "₹22,999",
      rating: 4.9,
      image: heroBanner,
      category: "Nature",
      description: "Peaceful cruise through Kerala's backwaters"
    },
    {
      id: "goa-beach-special",
      name: "Goa Beach Paradise",
      startDate: "01 Feb 2024",
      endDate: "04 Feb 2024",
      duration: "4 Days / 3 Nights",
      price: "₹12,999",
      rating: 4.6,
      image: heroBanner,
      category: "Beach",
      description: "Relax on the beautiful beaches of Goa"
    },
    {
      id: "rajasthan-royal",
      name: "Rajasthan Royal Heritage",
      startDate: "10 Feb 2024",
      endDate: "17 Feb 2024",
      duration: "8 Days / 7 Nights",
      price: "₹25,999",
      rating: 4.7,
      image: heroBanner,
      category: "Heritage",
      description: "Experience the royal heritage of Rajasthan"
    },
    {
      id: "himachal-adventure",
      name: "Himachal Adventure",
      startDate: "15 Feb 2024",
      endDate: "21 Feb 2024",
      duration: "7 Days / 6 Nights",
      price: "₹18,999",
      rating: 4.5,
      image: heroBanner,
      category: "Adventure",
      description: "Thrilling adventure in the Himalayas"
    }
  ]);

  const handleSearch = () => {
    // In a real application, this would make an API call
    console.log("Searching with filters:", searchFilters);
  };

  const handleFilterChange = (key: string, value: string) => {
    setSearchFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Search Tours</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find your perfect tour based on your preferences
          </p>
        </div>
      </section>

      {/* Search Filters */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Search Filters</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Destination */}
              <div>
                <Label htmlFor="destination">Destination</Label>
                <Input
                  id="destination"
                  placeholder="Where do you want to go?"
                  value={searchFilters.destination}
                  onChange={(e) => handleFilterChange("destination", e.target.value)}
                />
              </div>

              {/* Start Date */}
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={searchFilters.startDate}
                  onChange={(e) => handleFilterChange("startDate", e.target.value)}
                />
              </div>

              {/* End Date */}
              <div>
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={searchFilters.endDate}
                  onChange={(e) => handleFilterChange("endDate", e.target.value)}
                />
              </div>

              {/* Category */}
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={searchFilters.category} onValueChange={(value) => handleFilterChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="heritage">Heritage</SelectItem>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="beach">Beach</SelectItem>
                    <SelectItem value="nature">Nature</SelectItem>
                    <SelectItem value="spiritual">Spiritual</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div>
                <Label htmlFor="minPrice">Min Price (₹)</Label>
                <Input
                  id="minPrice"
                  type="number"
                  placeholder="5,000"
                  value={searchFilters.minPrice}
                  onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="maxPrice">Max Price (₹)</Label>
                <Input
                  id="maxPrice"
                  type="number"
                  placeholder="50,000"
                  value={searchFilters.maxPrice}
                  onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                />
              </div>

              {/* Duration Range */}
              <div>
                <Label htmlFor="minDuration">Min Duration (days)</Label>
                <Input
                  id="minDuration"
                  type="number"
                  placeholder="3"
                  value={searchFilters.minDuration}
                  onChange={(e) => handleFilterChange("minDuration", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="maxDuration">Max Duration (days)</Label>
                <Input
                  id="maxDuration"
                  type="number"
                  placeholder="15"
                  value={searchFilters.maxDuration}
                  onChange={(e) => handleFilterChange("maxDuration", e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button onClick={handleSearch} className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search Tours
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setSearchFilters({
                  destination: "",
                  startDate: "",
                  endDate: "",
                  minPrice: "",
                  maxPrice: "",
                  minDuration: "",
                  maxDuration: "",
                  category: ""
                })}
              >
                Clear Filters
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Search Results</h2>
            <span className="text-muted-foreground">{searchResults.length} tours found</span>
          </div>

          <div className="space-y-6">
            {searchResults.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover-lift cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                  {/* Tour Image */}
                  <div className="md:col-span-1">
                    <div className="relative h-48 md:h-full">
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                        {tour.category}
                      </div>
                    </div>
                  </div>

                  {/* Tour Details */}
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                    <p className="text-muted-foreground mb-4">{tour.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>Start: {tour.startDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>End: {tour.endDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{tour.rating} rating</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="md:col-span-1 p-6 flex flex-col justify-between bg-muted/50">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">{tour.price}</div>
                      <span className="text-xs text-muted-foreground">per person</span>
                    </div>
                    
                    <div className="space-y-2 mt-4">
                      <Button variant="tour" size="sm" className="w-full" asChild>
                        <Link to={`/tour/${tour.id}`}>
                          Get Details
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Quick View
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="default" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SearchPage;