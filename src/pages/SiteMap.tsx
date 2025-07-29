import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";

const SiteMap = () => {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/home" },
        { name: "Showcase", path: "/" },
        { name: "Search Tours", path: "/search" },
      ]
    },
    {
      title: "Tour Sectors",
      links: [
        { name: "Domestic Tours", path: "/sector/domestic" },
        { name: "International Tours", path: "/sector/international" },
        { name: "Sports Tourism", path: "/sector/sports" },
        { name: "Couple Tours", path: "/sector/couple" },
        { name: "Adventure Tours", path: "/sector/adventure" },
        { name: "Pilgrimage Tours", path: "/sector/pilgrimage" },
      ]
    },
    {
      title: "Special Offers",
      links: [
        { name: "Summer Special", path: "/summer-special" },
        { name: "Weekend Getaways", path: "/weekend-getaways" },
      ]
    },
    {
      title: "User Account",
      links: [
        { name: "Login", path: "/login" },
        { name: "Sign Up", path: "/signup" },
      ]
    },
    {
      title: "Information",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "Terms & Conditions", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Disclaimer", path: "/disclaimer" },
        { name: "Careers", path: "/careers" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Site Map</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find all our pages and navigate easily through our website
          </p>
        </div>
      </section>

      {/* Site Map Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteStructure.map((section, index) => (
              <Card key={index} className="p-6">
                <h2 className="text-xl font-bold mb-4 text-primary">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path} 
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SiteMap;