import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Showcase from "./pages/Showcase";
import Home from "./pages/Home";
import SectorPage from "./pages/SectorPage";
import ProductPage from "./pages/ProductPage";
import TourPage from "./pages/TourPage";
import SearchPage from "./pages/SearchPage";
import BookTourPage from "./pages/BookTourPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ContactUs from "./pages/ContactUs";
import SiteMap from "./pages/SiteMap";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import SummerSpecial from "./pages/SummerSpecial";
import WeekendGetaways from "./pages/WeekendGetaways";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import TourAddons from "./pages/TourAddons";
import TourDosAndDonts from "./pages/TourDosAndDonts";
import TourStayMeals from "./pages/TourStayMeals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sector/:sectorId" element={<SectorPage />} />
          <Route path="/products/:sectorId/:subSectorId" element={<ProductPage />} />
          <Route path="/tour/:tourId" element={<TourPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/book/:tourId" element={<BookTourPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/summer-special" element={<SummerSpecial />} />
          <Route path="/weekend-getaways" element={<WeekendGetaways />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/tour/:tourId/addons" element={<TourAddons />} />
          <Route path="/tour/:tourId/dos-and-donts" element={<TourDosAndDonts />} />
          <Route path="/tour/:tourId/stay-meals" element={<TourStayMeals />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </AuthProvider>
  </QueryClientProvider>
);

export default App;
