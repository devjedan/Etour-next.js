import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Showcase from "./pages/Showcase";
import Home from "./pages/Home";
import SectorPage from "./pages/SectorPage";
import ProductPage from "./pages/ProductPage";
import TourPage from "./pages/TourPage";
import SearchPage from "./pages/SearchPage";
import BookTourPage from "./pages/BookTourPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
