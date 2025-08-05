import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, SkipForward, ArrowRight, Download } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Showcase = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % advertisementSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const advertisementSlides = [
    {
      title: "New Year Special Offers",
      subtitle: "Save up to 40% on International Packages",
      description: "Limited time offer on all European and Asian tour packages. Book now and save big!",
      image: heroBanner,
      type: "promotion"
    },
    {
      title: "TourIndia Campaign 2024",
      subtitle: "Discover Incredible India",
      description: "Experience the diversity and beauty of India with our specially curated domestic tour packages.",
      image: heroBanner,
      type: "campaign"
    },
    {
      title: "Adventure Awaits",
      subtitle: "Himalayan Expedition Special",
      description: "Join our exclusive mountain expeditions and trekking adventures in the mighty Himalayas.",
      image: heroBanner,
      type: "adventure"
    }
  ];

  const mediaContent = [
    {
      title: "TourIndia Official Video",
      type: "video",
      duration: "2:30",
      description: "Watch our latest promotional video showcasing the beauty of Indian destinations."
    },
    {
      title: "Travel Brochure 2024",
      type: "pdf",
      size: "2.5 MB",
      description: "Download our comprehensive travel brochure with all tour packages and offers."
    },
    {
      title: "Destination Guide",
      type: "pdf", 
      size: "1.8 MB",
      description: "Complete guide to top travel destinations in India and abroad."
    }
  ];

  const handleSkipToHome = () => {
    navigate("/home");
  };

  const handleContinue = () => {
    navigate("/home?from=showcase");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Company Header */}
      <div className="relative h-32 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-strong">
              <span className="text-primary font-bold text-2xl">E</span>
            </div>
            <div className="text-white">
              <h1 className="text-3xl font-bold">Etour Travels</h1>
              <p className="text-white/90">Your Gateway to Incredible Journeys</p>
            </div>
          </div>
          <Button
            variant="skip"
            onClick={handleSkipToHome}
            className="flex items-center gap-2"
          >
            <SkipForward className="w-4 h-4" />
            Skip Info
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Main Advertisement Slideshow */}
        <div className="mb-12">
          <Card className="relative overflow-hidden shadow-strong">
            <div className="relative h-96 md:h-[500px]">
              <img
                src={advertisementSlides[currentSlide].image}
                alt={advertisementSlides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 overlay-gradient"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-2xl px-4">
                  <div className="animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                      {advertisementSlides[currentSlide].title}
                    </h2>
                    <h3 className="text-xl md:text-2xl mb-6 text-secondary">
                      {advertisementSlides[currentSlide].subtitle}
                    </h3>
                    <p className="text-lg mb-8 text-white/90">
                      {advertisementSlides[currentSlide].description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="hero" size="lg" onClick={handleContinue}>
                        Explore Now
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                      <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
                        <Link to="/home" state={{ fromShowcase: true }}>
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-2">
                {advertisementSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "bg-white" 
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* TourIndia Media Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">TourIndia Media Center</h2>
            <p className="text-lg text-muted-foreground">
              Watch our promotional videos and download travel guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaContent.map((media, index) => (
              <Card key={index} className="p-6 hover-lift cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    media.type === 'video' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {media.type === 'video' ? (
                      <Play className="w-6 h-6" />
                    ) : (
                      <Download className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{media.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {media.description}
                    </p>
                    <div className="text-xs text-primary font-medium">
                      {media.type === 'video' ? `Duration: ${media.duration}` : `Size: ${media.size}`}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 hero-gradient text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-6 text-white/90">
              Discover amazing destinations and create unforgettable memories with Etour
            </p>
            <Button variant="secondary" size="xl" onClick={handleContinue}>
              Continue to Home
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Showcase;