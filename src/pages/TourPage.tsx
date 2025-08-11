import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Calendar,
  Clock,
  IndianRupee,
  Utensils,
  Bed,
  Camera,
  FileText,
  AlertTriangle,
  CreditCard,
  Route,
} from "lucide-react";

// ---------- Interfaces ----------
interface Category {
  ctgMasterId: number;
  ctgId: string;
  ctgName: string;
  subCtgName: string;
  ctgImgPath: string;
  flag: boolean;
}

interface Itinerary {
  itineraryId: number;
  dayNo: number;
  detailHeader: string;
  dayDetail: string;
}

interface PackageMaster {
  packageId: number;
  packageName: string;
  packageImagePath: string;
  packageInfo: string;
  durationDays: number;
  startDate: string;
  endDate: string;
  category: {
    ctgMasterId: number;
    ctgId: string;
    subCtgName: string;
    ctgName: string;
    ctgImgPath: string;
    flag: boolean;
  };
  itineraries?: Itinerary[];
}

// ---------- Component ----------
const TourPage = () => {
  const { tourId } = useParams<{ tourId: string }>();

  const [tourData, setTourData] = useState<PackageMaster | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("itinerary");

  useEffect(() => {
    if (!tourId) return;

    setLoading(true);
    fetch(`http://localhost:8088/api/packages/${tourId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched package:", data);
        setTourData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching package:", err);
        setLoading(false);
      });
  }, [tourId]);

  // ---------- Static shared sections ----------
  const costDetails = [
    { category: "Twin Sharing", price: "₹15,999", discount: "20%" },
    { category: "Single Occupancy", price: "₹22,999", discount: "15%" },
    { category: "Triple Sharing", price: "₹13,999", discount: "25%" },
    { category: "Child (5-12 years)", price: "₹9,999", discount: "30%" },
  ];

  const departureDates = [
    { date: "15 Nov 2025", availability: "Available", seats: 8 },
    { date: "22 Nov 2025", availability: "Filling Fast", seats: 3 },
    { date: "29 Nov 2025", availability: "Available", seats: 12 },
    { date: "05 Dec 2025", availability: "Available", seats: 15 },
  ];

  const leftPanelLinks = [
    { name: "Itinerary", icon: Route, tab: "itinerary" },
    { name: "Cost", icon: IndianRupee, tab: "cost" },
    { name: "Dates", icon: Calendar, tab: "dates" },
    {
      name: "Do's & Don'ts",
      icon: AlertTriangle,
      tab: "guidelines",
    },
    { name: "Photos", icon: Camera, tab: "photos" },
    { name: "Terms", icon: FileText, tab: "terms" },
    { name: "Book Tour", icon: CreditCard, tab: "book", special: true },
  ];

  if (loading) {
    return <div className="p-8 text-center">Loading tour details...</div>;
  }

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
            <Link to="/sector/domestic" className="hover:text-primary">
              Domestic Tours
            </Link>
            <span className="mx-2">&gt;</span>
            <span>{tourData?.packageName}</span>
          </nav>
        </div>
      </section>

      {/* Tour Header */}
      <section className="py-8 bg-white shadow-soft">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Image */}
          <div className="lg:col-span-2">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <img
                src={`http://localhost:8088${tourData?.packageImagePath}`}
                alt={tourData?.packageName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                {tourData?.category?.ctgName}
              </div>
            </div>
          </div>

          {/* Tour Info */}
          <div>
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h1 className="text-2xl font-bold mb-2">
                {tourData?.packageName}
              </h1>
              <p className="text-muted-foreground mb-4">
                {tourData?.packageInfo}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    {tourData?.durationDays} Days /{" "}
                    {tourData ? tourData.durationDays - 1 : 0} Nights
                  </span>
                </div>
              </div>

              <Button
                variant="booking"
                size="lg"
                className="w-full mt-2"
                asChild
              >
                <Link to={`/book/${tourData?.packageId}`}>
                  <CreditCard className="w-4 h-4" />
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Navigation Panel */}
          <div className="lg:col-span-1">
            <Card className="p-4 sticky top-24">
              <h3 className="font-semibold mb-4">Tour Information</h3>
              <nav className="space-y-2">
                {leftPanelLinks.map((link) => {
                  const Icon = link.icon;
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

          {/* Right Main Tabs */}
          <div className="lg:col-span-3">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-6"
            >
              {/* Itinerary Tab */}
              <TabsContent value="itinerary">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Detailed Itinerary
                  </h2>
                  <div className="space-y-6">
                    {tourData?.itineraries &&
                    tourData.itineraries.length > 0 ? (
                      tourData.itineraries.map((day) => (
                        <div
                          key={day.itineraryId}
                          className="border-l-2 border-primary pl-6 relative"
                        >
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                          <div className="bg-muted p-4 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">
                              Day {day.dayNo}: {day.detailHeader}
                            </h3>
                            <p className="text-muted-foreground mb-3">
                              {day.dayDetail}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-muted-foreground">
                        No itinerary available.
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>

              {/* Cost Tab */}
              <TabsContent value="cost">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Cost Details</h2>
                  <div className="space-y-4">
                    {costDetails.map((cost, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-muted rounded-lg"
                      >
                        <div>
                          <h3 className="font-semibold">{cost.category}</h3>
                          <span className="text-sm text-green-600">
                            {cost.discount} discount
                          </span>
                        </div>
                        <div className="text-xl font-bold text-primary">
                          {cost.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Dates Tab */}
              <TabsContent value="dates">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Available Dates</h2>
                  <div className="space-y-4">
                    {departureDates.map((departure, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted transition-colors"
                      >
                        <div>
                          <h3 className="font-semibold">{departure.date}</h3>
                          <span
                            className={`text-sm ${
                              departure.availability === "Filling Fast"
                                ? "text-orange-600"
                                : "text-green-600"
                            }`}
                          >
                            {departure.availability} • {departure.seats} seats
                            left
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

              {/* Guidelines Tab */}
              <TabsContent value="guidelines">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Do's & Don'ts</h2>
                  <ul className="list-disc list-inside text-sm space-y-2">
                    <li>Carry valid ID proof at all times.</li>
                    <li>Respect local customs and traditions.</li>
                    <li>Avoid littering in tourist areas.</li>
                    <li>Follow the guide’s instructions for safety.</li>
                  </ul>
                </Card>
              </TabsContent>

              {/* Photos Tab */}
              <TabsContent value="photos">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Tour Photos</h2>
                  <p className="text-muted-foreground">
                    Photo gallery will be displayed here.
                  </p>
                </Card>
              </TabsContent>

              {/* Terms Tab */}
              <TabsContent value="terms">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Terms & Conditions
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    All bookings are subject to availability. Cancellations are
                    subject to applicable charges. Please read the complete
                    terms before booking.
                  </p>
                </Card>
              </TabsContent>

              {/* Book Tab */}
              <TabsContent value="book">
                <Card className="p-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">Book This Tour</h2>
                  <Button variant="booking" size="xl" asChild>
                    <Link to={`/book/${tourData?.packageId}`}>
                      <CreditCard className="w-5 h-5" />
                      Proceed to Booking
                    </Link>
                  </Button>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourPage;
