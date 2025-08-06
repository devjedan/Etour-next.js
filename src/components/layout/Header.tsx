import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {

  Globe,
  Phone,
  Mail,
  Menu,
  X,
  Search,
  MapPin,
  Home,

} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  const menuItems = [
    { name: "Home", path: "/home", icon: Home },
    { name: "Domestic Tours", path: "/sector/domestic", icon: MapPin },
    { name: "International Tours", path: "/sector/international", icon: Globe },
    { name: "Sports Tourism", path: "/sector/sports", icon: null },
    { name: "Couple Tours", path: "/sector/couple", icon: null },
    { name: "Search Tours", path: "/search", icon: Search },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-3">
            <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Etour</h1>
              <p className="text-xs text-muted-foreground">Explore the World</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground ${
                      isActivePath(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:text-primary-foreground"
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {item.name}
                  </Link>
                );
              })}
            </nav>


            <div className="flex items-center gap-2 ml-4">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 rounded-full hover:bg-muted"
                    >
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-48 bg-background border shadow-lg"
                  >
                    <DropdownMenuItem className="flex items-center gap-2 p-3 cursor-pointer hover:bg-muted">
                      <User className="w-4 h-4" />
                      <div className="flex flex-col">
                        <span className="font-medium">{user?.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {user?.email}
                        </span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={logout}
                      className="flex items-center gap-2 p-3 cursor-pointer hover:bg-muted text-red-600 hover:text-red-700"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button variant="booking" size="sm" asChild>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActivePath(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {item.name}
                  </Link>
                );
              })}

</div>
            </div>
          </nav>
        )}
      </div>

      {/* Crawling Text Banner */}
      <div className="bg-secondary text-secondary-foreground py-2 overflow-hidden">
        <div className="crawling-text whitespace-nowrap">
          <span className="inline-block px-8">
            🎉 Special Offer: 20% off on all International Tours! Book now and
            save big! | 🏔️ New Himalayan Adventure packages available | 🏖️ Beach
            holidays starting from ₹15,000 | 📱 Download our mobile app for
            exclusive deals
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
