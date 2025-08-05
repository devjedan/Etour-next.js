import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Calendar, 
  Clock, 
  IndianRupee, 
  Star,
  Users,
  MapPin,
  Utensils,
  Bed,
  Camera,
  Video,
  FileText,
  Map,
  Plus,
  Shield,
  Cloud,
  AlertTriangle,
  CreditCard,
  Route
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const TourPage = () => {
  const { tourId } = useParams();
  const [activeTab, setActiveTab] = useState("itinerary");

  // Mock tour data
  const tour = {
    id: "golden-triangle-deluxe",
    name: "Golden Triangle Deluxe",
    description: "Experience the magnificent Golden Triangle - Delhi, Agra, and Jaipur - in ultimate luxury and comfort",
    image: heroBanner,
    duration: "6 Days / 5 Nights",
    price: "₹15,999",
    originalPrice: "₹19,999",
    rating: 4.8,
    reviews: 245,
    category: "Heritage & Culture",
    difficulty: "Easy",
    groupSize: "2-15 people",
    includes: ["Accommodation", "Transportation", "Guide", "Breakfast"],
    excludes: ["Flights", "Lunch & Dinner", "Personal Expenses"],
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrival in Delhi",
      description: "Arrive at Delhi airport. Meet and greet by our representative. Transfer to hotel. Evening at leisure.",
      meals: "Dinner",
      accommodation: "Hotel Deluxe Delhi"
    },
    {
      day: 2,
      title: "Delhi Sightseeing",
      description: "Full day Delhi tour covering Red Fort, Jama Masjid, India Gate, Lotus Temple, and Qutub Minar.",
      meals: "Breakfast",
      accommodation: "Hotel Deluxe Delhi"
    },
    {
      day: 3,
      title: "Delhi to Agra",
      description: "Drive to Agra (3 hours). Visit Taj Mahal at sunset. Check-in to hotel.",
      meals: "Breakfast",
      accommodation: "Hotel Agra Grand"
    },
    {
      day: 4,
      title: "Agra to Jaipur",
      description: "Morning visit to Agra Fort. Drive to Jaipur via Fatehpur Sikri (5 hours).",
      meals: "Breakfast", 
      accommodation: "Hotel Jaipur Palace"
    },
    {
      day: 5,
      title: "Jaipur Sightseeing",
      description: "Visit Amber Fort, City Palace, Hawa Mahal, and local markets for shopping.",
      meals: "Breakfast",
      accommodation: "Hotel Jaipur Palace"
    },
    {
      day: 6,
      title: "Jaipur to Delhi Departure",
      description: "Drive back to Delhi (5 hours). Transfer to airport for onward journey.",
      meals: "Breakfast",
      accommodation: "N/A"
    }
  ];

  const costDetails = [
    { category: "Twin Sharing", price: "₹15,999", discount: "20%" },
    { category: "Single Occupancy", price: "₹22,999", discount: "15%" },
    { category: "Triple Sharing", price: "₹13,999", discount: "25%" },
    { category: "Child (5-12 years)", price: "₹9,999", discount: "30%" }
  ];

  const departureDates = [
    { date: "15 Jan 2024", availability: "Available", seats: 8 },
    { date: "22 Jan 2024", availability: "Filling Fast", seats: 3 },
    { date: "29 Jan 2024", availability: "Available", seats: 12 },
    { date: "05 Feb 2024", availability: "Available", seats: 15 }
  ];

  const leftPanelLinks = [
    { name: "Itinerary", icon: Route, tab: "itinerary" },
    { name: "Cost", icon: IndianRupee, tab: "cost" },
    { name: "Dates", icon: Calendar, tab: "dates" },
    { name: "Stay & Meals", icon: Utensils, tab: "stay", link: `/tour/${tourId}/stay-meals` },
    { name: "Do's & Don'ts", icon: AlertTriangle, tab: "guidelines", link: `/tour/${tourId}/dos-and-donts` },
    { name: "Photos", icon: Camera, tab: "photos" },
    { name: "Terms", icon: FileText, tab: "terms" },
    { name: "Book Tour", icon: CreditCard, tab: "book", special: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-4 bg-muted">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/home" className="hover:text-primary">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/sector/domestic" className="hover:text-primary">Domestic Tours</Link>
            <span className="mx-2">&gt;</span>
            <span>{tour.name}</span>
          </nav>
        </div>
      </section>

      {/* Tour Header */}
      <section className="py-8 bg-white shadow-soft">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tour Image */}
            <div className="lg:col-span-2">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.category}
                </div>
              </div>
            </div>

            {/* Tour Info */}
            <div>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h1 className="text-2xl font-bold mb-2">{tour.name}</h1>
                <p className="text-muted-foreground mb-4">{tour.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{tour.rating} ({tour.reviews} reviews)</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-primary">{tour.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{tour.originalPrice}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">per person (twin sharing)</span>
                </div>

                <Button variant="booking" size="lg" className="w-full mt-6" asChild>
                  <Link to={`/book/${tour.id}`}>
                    <CreditCard className="w-4 h-4" />
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Navigation Panel */}
            <div className="lg:col-span-1">
              <Card className="p-4 sticky top-24">
                <h3 className="font-semibold mb-4">Tour Information</h3>
                <nav className="space-y-2">
                  {leftPanelLinks.map((link) => {
                    const Icon = link.icon;
                    
                    if (link.link) {
                      return (
                        <Link
                          key={link.tab}
                          to={link.link}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all duration-300 text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          <Icon className="w-4 h-4" />
                          {link.name}
                        </Link>
                      );
                    }
                    
                    return (
                      <button
                        key={link.tab}
                        onClick={() => setActiveTab(link.tab)}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all duration-300 ${
                          activeTab === link.tab
                            ? "bg-primary text-primary-foreground"
                            : link.special
                            ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {link.name}
                      </button>
                    );
                  })}
                </nav>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                {/* Itinerary Tab */}
                <TabsContent value="itinerary">
                  <Card className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
                    <div className="space-y-6">
                      {itinerary.map((day, index) => (
                        <div key={index} className="border-l-2 border-primary pl-6 relative">
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                          <div className="bg-muted p-4 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">
                              Day {day.day}: {day.title}
                            </h3>
                            <p className="text-muted-foreground mb-3">{day.description}</p>
                            <div className="flex gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <Utensils className="w-4 h-4" />
                                <span>{day.meals}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Bed className="w-4 h-4" />
                                <span>{day.accommodation}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                {/* Cost Tab */}
                <TabsContent value="cost">
                  <Card className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Cost Details</h2>
                    <div className="space-y-4">
                      {costDetails.map((cost, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                          <div>
                            <h3 className="font-semibold">{cost.category}</h3>
                            <span className="text-sm text-green-600">{cost.discount} discount</span>
                          </div>
                          <div className="text-xl font-bold text-primary">{cost.price}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <h3 className="font-semibold mb-2">What's Included:</h3>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {tour.includes.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </TabsContent>

                {/* Dates Tab */}
                <TabsContent value="dates">
                  <Card className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Available Dates</h2>
                    <div className="space-y-4">
                      {departureDates.map((departure, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted transition-colors">
                          <div>
                            <h3 className="font-semibold">{departure.date}</h3>
                            <span className={`text-sm ${
                              departure.availability === "Filling Fast" ? "text-orange-600" : "text-green-600"
                            }`}>
                              {departure.availability} • {departure.seats} seats left
                            </span>
                          </div>
                          <Button variant="outline" size="sm">
                            Select Date
                          </Button>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                {/* Other tabs content would go here... */}
                <TabsContent value="book">
                  <Card className="p-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">Book This Tour</h2>
                    <p className="text-muted-foreground mb-6">
                      Ready to embark on this amazing journey? Book now and create unforgettable memories!
                    </p>
                    <Button variant="booking" size="xl" asChild>
                      <Link to={`/book/${tour.id}`}>
                        <CreditCard className="w-5 h-5" />
                        Proceed to Booking
                      </Link>
                    </Button>
                  </Card>
                </TabsContent>

                {/* Remaining tabs */}
                {["photos", "terms"].map((tab) => (
                  <TabsContent key={tab} value={tab}>
                    <Card className="p-6">
                      <h2 className="text-2xl font-bold mb-6 capitalize">{tab.replace(/([A-Z])/g, ' $1').trim()}</h2>
                      <p className="text-muted-foreground">
                        Content for {tab} will be displayed here. This section will contain detailed information about the tour's {tab}.
                      </p>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourPage;
