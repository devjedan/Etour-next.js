import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  User, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Plus, 
  Minus,
  CreditCard,
  Shield,
  Users,
  X
} from "lucide-react";

export interface PassengerData {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  passportNumber?: string;
  passportExpiry?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  specialRequirements?: string;
  travelInsurance: boolean;
  dietaryRestrictions?: string;
}

interface PassengerFormProps {
  passenger: PassengerData;
  index: number;
  isLead?: boolean;
  onUpdate: (id: string, field: keyof PassengerData, value: any) => void;
  onRemove?: (id: string) => void;
  tourPrice: number;
}

const PassengerForm = ({ 
  passenger, 
  index, 
  isLead = false, 
  onUpdate, 
  onRemove, 
  tourPrice 
}: PassengerFormProps) => {
  // Component for collecting passenger information for tour bookings
  // Supports different pricing based on age groups and room sharing options
  const [expandedSections, setExpandedSections] = useState({
    personal: true,
    contact: false,
    passport: false,
    emergency: false,
    preferences: false
  });

  const calculatePassengerPrice = () => {
    if (passenger.age <= 5) return 0; // Free for children under 5
    if (passenger.age <= 12) return tourPrice * 0.6; // 40% discount for children
    return tourPrice;
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              {isLead ? "Lead Passenger" : `Passenger ${index + 1}`}
            </h3>
            <p className="text-sm text-muted-foreground">
              Price: ₹{calculatePassengerPrice().toLocaleString()}
              {passenger.age <= 5 && " (Free)"}
              {passenger.age > 5 && passenger.age <= 12 && " (Child Discount)"}
            </p>
          </div>
        </div>
        {!isLead && onRemove && (
          <Button
            onClick={() => onRemove(passenger.id)}
            variant="outline"
            size="sm"
            className="text-destructive hover:text-destructive"
          >
            <X className="w-4 h-4" />
            Remove
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Personal Information */}
        <div>
          <button
            type="button"
            onClick={() => toggleSection('personal')}
            className="flex items-center justify-between w-full text-left font-medium mb-4"
          >
            <span>Personal Information</span>
            <Plus className={`w-4 h-4 transition-transform ${expandedSections.personal ? 'rotate-45' : ''}`} />
          </button>
          
          {expandedSections.personal && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`firstName-${passenger.id}`}>First Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id={`firstName-${passenger.id}`}
                    value={passenger.firstName}
                    onChange={(e) => onUpdate(passenger.id, "firstName", e.target.value)}
                    placeholder="Enter first name"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`lastName-${passenger.id}`}>Last Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id={`lastName-${passenger.id}`}
                    value={passenger.lastName}
                    onChange={(e) => onUpdate(passenger.id, "lastName", e.target.value)}
                    placeholder="Enter last name"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`age-${passenger.id}`}>Age *</Label>
                <Input
                  id={`age-${passenger.id}`}
                  type="number"
                  value={passenger.age || ""}
                  onChange={(e) => onUpdate(passenger.id, "age", parseInt(e.target.value) || 0)}
                  placeholder="Enter age"
                  min="0"
                  max="120"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`dateOfBirth-${passenger.id}`}>Date of Birth</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id={`dateOfBirth-${passenger.id}`}
                    type="date"
                    value={passenger.dateOfBirth}
                    onChange={(e) => onUpdate(passenger.id, "dateOfBirth", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor={`gender-${passenger.id}`}>Gender *</Label>
                <Select 
                  value={passenger.gender} 
                  onValueChange={(value) => onUpdate(passenger.id, "gender", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div>
          <button
            type="button"
            onClick={() => toggleSection('contact')}
            className="flex items-center justify-between w-full text-left font-medium mb-4"
          >
            <span>Contact Information</span>
            <Plus className={`w-4 h-4 transition-transform ${expandedSections.contact ? 'rotate-45' : ''}`} />
          </button>
          
          {expandedSections.contact && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`email-${passenger.id}`}>Email Address {isLead ? '*' : ''}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id={`email-${passenger.id}`}
                    type="email"
                    value={passenger.email}
                    onChange={(e) => onUpdate(passenger.id, "email", e.target.value)}
                    placeholder="Enter email address"
                    className="pl-10"
                    required={isLead}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`phone-${passenger.id}`}>Phone Number {isLead ? '*' : ''}</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id={`phone-${passenger.id}`}
                    value={passenger.phone}
                    onChange={(e) => onUpdate(passenger.id, "phone", e.target.value)}
                    placeholder="Enter phone number"
                    className="pl-10"
                    required={isLead}
                  />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor={`address-${passenger.id}`}>Address {isLead ? '*' : ''}</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id={`address-${passenger.id}`}
                    value={passenger.address}
                    onChange={(e) => onUpdate(passenger.id, "address", e.target.value)}
                    placeholder="Enter street address"
                    className="pl-10"
                    required={isLead}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`city-${passenger.id}`}>City</Label>
                <Input
                  id={`city-${passenger.id}`}
                  value={passenger.city}
                  onChange={(e) => onUpdate(passenger.id, "city", e.target.value)}
                  placeholder="Enter city"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`state-${passenger.id}`}>State</Label>
                <Input
                  id={`state-${passenger.id}`}
                  value={passenger.state}
                  onChange={(e) => onUpdate(passenger.id, "state", e.target.value)}
                  placeholder="Enter state"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`pincode-${passenger.id}`}>Pincode</Label>
                <Input
                  id={`pincode-${passenger.id}`}
                  value={passenger.pincode}
                  onChange={(e) => onUpdate(passenger.id, "pincode", e.target.value)}
                  placeholder="Enter pincode"
                />
              </div>
            </div>
          )}
        </div>

        {/* Passport Information */}
        <div>
          <button
            type="button"
            onClick={() => toggleSection('passport')}
            className="flex items-center justify-between w-full text-left font-medium mb-4"
          >
            <span>Passport Information (International Tours)</span>
            <Plus className={`w-4 h-4 transition-transform ${expandedSections.passport ? 'rotate-45' : ''}`} />
          </button>
          
          {expandedSections.passport && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`passportNumber-${passenger.id}`}>Passport Number</Label>
                <div className="relative">
                  <Shield className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id={`passportNumber-${passenger.id}`}
                    value={passenger.passportNumber || ""}
                    onChange={(e) => onUpdate(passenger.id, "passportNumber", e.target.value)}
                    placeholder="Enter passport number"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`passportExpiry-${passenger.id}`}>Passport Expiry Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id={`passportExpiry-${passenger.id}`}
                    type="date"
                    value={passenger.passportExpiry || ""}
                    onChange={(e) => onUpdate(passenger.id, "passportExpiry", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Emergency Contact */}
        <div>
          <button
            type="button"
            onClick={() => toggleSection('emergency')}
            className="flex items-center justify-between w-full text-left font-medium mb-4"
          >
            <span>Emergency Contact</span>
            <Plus className={`w-4 h-4 transition-transform ${expandedSections.emergency ? 'rotate-45' : ''}`} />
          </button>
          
          {expandedSections.emergency && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`emergencyContactName-${passenger.id}`}>Emergency Contact Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id={`emergencyContactName-${passenger.id}`}
                    value={passenger.emergencyContactName || ""}
                    onChange={(e) => onUpdate(passenger.id, "emergencyContactName", e.target.value)}
                    placeholder="Enter emergency contact name"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`emergencyContactPhone-${passenger.id}`}>Emergency Contact Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id={`emergencyContactPhone-${passenger.id}`}
                    value={passenger.emergencyContactPhone || ""}
                    onChange={(e) => onUpdate(passenger.id, "emergencyContactPhone", e.target.value)}
                    placeholder="Enter emergency contact phone"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Preferences */}
        <div>
          <button
            type="button"
            onClick={() => toggleSection('preferences')}
            className="flex items-center justify-between w-full text-left font-medium mb-4"
          >
            <span>Travel Preferences</span>
            <Plus className={`w-4 h-4 transition-transform ${expandedSections.preferences ? 'rotate-45' : ''}`} />
          </button>
          
          {expandedSections.preferences && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`travelInsurance-${passenger.id}`}
                  checked={passenger.travelInsurance}
                  onCheckedChange={(checked) => onUpdate(passenger.id, "travelInsurance", checked as boolean)}
                />
                <Label htmlFor={`travelInsurance-${passenger.id}`} className="text-sm font-normal">
                  Add Travel Insurance (+₹999)
                </Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`dietaryRestrictions-${passenger.id}`}>Dietary Restrictions</Label>
                <Input
                  id={`dietaryRestrictions-${passenger.id}`}
                  value={passenger.dietaryRestrictions || ""}
                  onChange={(e) => onUpdate(passenger.id, "dietaryRestrictions", e.target.value)}
                  placeholder="Enter any dietary restrictions"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`specialRequirements-${passenger.id}`}>Special Requirements</Label>
                <Textarea
                  id={`specialRequirements-${passenger.id}`}
                  value={passenger.specialRequirements || ""}
                  onChange={(e) => onUpdate(passenger.id, "specialRequirements", e.target.value)}
                  placeholder="Enter any special requirements or accessibility needs"
                  rows={3}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PassengerForm;