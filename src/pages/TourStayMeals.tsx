import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Bed, Utensils, Star, Wifi, Car, Coffee } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const TourStayMeals = () => {
  const { tourId } = useParams();

  const accommodations = [
    {
      name: "Hotel Paradise Deluxe",
      category: "4 Star Hotel",
      location: "City Center, Delhi",
      image: heroBanner,
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Gym", "Restaurant"],
      roomType: "Deluxe Room with City View",
      checkIn: "Day 1 - Evening",
      checkOut: "Day 3 - Morning"
    },
    {
      name: "Royal Heritage Resort",
      category: "Heritage Hotel",
      location: "Old City, Jaipur",
      image: heroBanner,
      amenities: ["Heritage Architecture", "Garden", "Cultural Shows", "Restaurant"],
      roomType: "Heritage Suite",
      checkIn: "Day 3 - Afternoon",
      checkOut: "Day 5 - Morning"
    },
    {
      name: "Luxury Palace Hotel",
      category: "5 Star Palace",
      location: "Lake Side, Udaipur",
      image: heroBanner,
      amenities: ["Lake View", "Royal Dining", "Boat Rides", "Spa", "Butler Service"],
      roomType: "Palace Room with Lake View",
      checkIn: "Day 5 - Evening",
      checkOut: "Day 6 - Morning"
    }
  ];

  const mealPlan = [
    {
      day: "Day 1",
      breakfast: "Hotel Continental Breakfast",
      lunch: "Welcome Lunch at Local Restaurant",
      dinner: "Traditional Indian Cuisine",
      specialNote: "Vegetarian and non-vegetarian options available"
    },
    {
      day: "Day 2",
      breakfast: "Hotel Buffet Breakfast",
      lunch: "Packed Lunch for Sightseeing",
      dinner: "Rooftop Dinner with City View",
      specialNote: "Special dietary requirements can be accommodated"
    },
    {
      day: "Day 3",
      breakfast: "Traditional Indian Breakfast",
      lunch: "Royal Rajasthani Thali",
      dinner: "Cultural Dinner with Folk Performance",
      specialNote: "Experience authentic Rajasthani cuisine"
    }
  ];

  const diningOptions = [
    {
      type: "Breakfast",
      description: "Continental and Indian breakfast options",
      timings: "7:00 AM - 10:00 AM",
      included: true
    },
    {
      type: "Lunch",
      description: "Local cuisine and international options",
      timings: "12:30 PM - 2:30 PM",
      included: true
    },
    {
      type: "Dinner",
      description: "Multi-cuisine dining experience",
      timings: "7:30 PM - 10:30 PM",
      included: true
    },
    {
      type: "Snacks",
      description: "Evening tea/coffee with snacks",
      timings: "4:00 PM - 6:00 PM",
      included: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-4 bg-muted">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground flex items-center gap-2">
            <Link to="/home" className="hover:text-primary">Home</Link>
            <span>&gt;</span>
            <Link to={`/tour/${tourId}`} className="hover:text-primary">Tour Details</Link>
            <span>&gt;</span>
            <span>Stay & Meals</span>
          </nav>
        </div>
      </section>

      {/* Header */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <Button variant="outline" className="mb-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
            <Link to={`/tour/${tourId}`}>
              <ArrowLeft className="w-4 h-4" />
              Back to Tour
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-4">Stay & Meals</h1>
          <p className="text-xl text-white/90">Comfortable accommodations and delicious dining experiences</p>
        </div>
      </section>

      {/* Accommodation Information - General stay guidelines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Stay Information</h2>
          
          {/* General Accommodation Guidelines */}
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Bed className="w-5 h-5 text-primary" />
                Accommodation Standards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Room Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Air-conditioned rooms with comfortable bedding</li>
                    <li>• Private bathroom with hot/cold water</li>
                    <li>• Daily housekeeping service</li>
                    <li>• 24/7 room service availability</li>
                    <li>• Safe and secure environment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Hotel Amenities</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Complimentary WiFi access</li>
                    <li>• Front desk assistance</li>
                    <li>• Laundry services</li>
                    <li>• Travel assistance desk</li>
                    <li>• Emergency medical support</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-primary" />
                Transportation & Location
              </h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• Hotels are strategically located near major attractions</p>
                <p>• Convenient access to local transportation</p>
                <p>• Safe and well-connected areas</p>
                <p>• Airport/railway station pickup and drop available</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Meal Plan */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Daily Meal Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {mealPlan.map((day, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">{day.day}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Coffee className="w-4 h-4 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-sm">Breakfast</p>
                      <p className="text-xs text-muted-foreground">{day.breakfast}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Utensils className="w-4 h-4 text-green-500 mt-1" />
                    <div>
                      <p className="font-medium text-sm">Lunch</p>
                      <p className="text-xs text-muted-foreground">{day.lunch}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Utensils className="w-4 h-4 text-purple-500 mt-1" />
                    <div>
                      <p className="font-medium text-sm">Dinner</p>
                      <p className="text-xs text-muted-foreground">{day.dinner}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-xs text-muted-foreground">{day.specialNote}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Dining Options */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-6">Dining Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {diningOptions.map((option, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{option.type}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      option.included 
                        ? "bg-green-100 text-green-600" 
                        : "bg-orange-100 text-orange-600"
                    }`}>
                      {option.included ? "Included" : "Optional"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                  <p className="text-xs text-primary font-medium">{option.timings}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourStayMeals;