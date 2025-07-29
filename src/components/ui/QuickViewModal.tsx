import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  Clock, 
  IndianRupee, 
  Star, 
  Users, 
  MapPin, 
  ArrowRight,
  X
} from "lucide-react";

interface TourPackage {
  id: string;
  name: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  highlights: string[];
  difficulty?: string;
  groupSize: string;
}

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: TourPackage | null;
}

const QuickViewModal = ({ isOpen, onClose, tour }: QuickViewModalProps) => {
  if (!tour) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-100";
      case "Moderate": return "text-yellow-600 bg-yellow-100"; 
      case "Challenging": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">{tour.name}</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-full object-cover"
              />
              {tour.difficulty && (
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(tour.difficulty)}`}>
                    {tour.difficulty}
                  </span>
                </div>
              )}
            </div>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>{tour.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>{tour.rating} ({tour.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Multi-city</span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{tour.description}</p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3">Tour Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {tour.highlights.map((highlight, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3">Pricing</h3>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-bold text-primary">{tour.price}</span>
                <span className="text-lg text-muted-foreground line-through">{tour.originalPrice}</span>
              </div>
              <p className="text-sm text-muted-foreground">per person (all inclusive)</p>
              <div className="mt-2">
                <Badge variant="secondary">
                  Save {Math.round(((parseInt(tour.originalPrice.replace('₹', '').replace(',', '')) - parseInt(tour.price.replace('₹', '').replace(',', ''))) / parseInt(tour.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                </Badge>
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button 
                variant="tour" 
                className="flex-1"
                asChild
              >
                <Link to={`/tour/${tour.id}`}>
                  View Full Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                asChild
              >
                <Link to={`/book/${tour.id}`}>
                  Book Now
                </Link>
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Need help? Call us at <strong>+91-11-2345-6789</strong>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;