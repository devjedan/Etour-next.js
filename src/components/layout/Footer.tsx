import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Globe
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">E</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Etour</h3>
                <p className="text-sm opacity-90">Explore the World</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Your trusted travel partner for unforgettable journeys across India and around the world. 
              Experience the beauty of travel with our carefully curated tour packages.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/home" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sector/domestic" className="hover:text-secondary transition-colors">
                  Domestic Tours
                </Link>
              </li>
              <li>
                <Link to="/sector/international" className="hover:text-secondary transition-colors">
                  International Tours
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-secondary transition-colors">
                  Search Tours
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tour Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sector/adventure" className="hover:text-secondary transition-colors">
                  Adventure Tours
                </Link>
              </li>
              <li>
                <Link to="/sector/sports" className="hover:text-secondary transition-colors">
                  Sports Tourism
                </Link>
              </li>
              <li>
                <Link to="/sector/couple" className="hover:text-secondary transition-colors">
                  Couple Tours
                </Link>
              </li>
              <li>
                <Link to="/sector/family" className="hover:text-secondary transition-colors">
                  Family Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Head Office</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>
                  Etour Travels Pvt. Ltd.<br />
                  123, Travel Plaza<br />
                  Connaught Place<br />
                  New Delhi - 110001, India
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91-11-2345-6789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@etour.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>www.etour.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="hover:text-secondary transition-colors">
                Contact Us
              </Link>
              <span className="text-primary-light/60">|</span>
              <Link to="/sitemap" className="hover:text-secondary transition-colors">
                Site Map
              </Link>
              <span className="text-primary-light/60">|</span>
              <Link to="/careers" className="hover:text-secondary transition-colors">
                Career
              </Link>
              <span className="text-primary-light/60">|</span>
              <Link to="/terms" className="hover:text-secondary transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-primary-light/60">|</span>
              <Link to="/privacy" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-primary-light/60">|</span>
              <Link to="/disclaimer" className="hover:text-secondary transition-colors">
                Disclaimer
              </Link>
            </div>
            <div className="text-center">
              <p className="opacity-90">
                © 2024 Etour Travels Pvt. Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;