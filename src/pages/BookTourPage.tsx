import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Plus,
  Minus,
  Calendar,
  Users,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  FileText,
  Check,
  ArrowLeft,
  Download,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Passenger {
  id: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  roomSharing: string; // single, twin, triple, childWithBed, childWithoutBed
}

interface Category {
  ctgMasterId: number;
  ctgId: string;
  ctgName: string;
  subCtgName: string;
  ctgImgPath: string;
  flag: boolean;
}

interface TourPackage {
  packageId: number;
  packageName: string;
  packageInfo: string;
  packageImagePath: string;
  durationDays: number;
  startDate: string;
  endDate: string;
  category: Category;
}

const BookTourPage = () => {
  const { tourId } = useParams<{ tourId: string }>();

  const { toast } = useToast();

  const [tourData, setTourData] = useState<TourPackage | null>(null);
  const [loading, setLoading] = useState(true);

  const [step, setStep] = useState(1); // 1: Details, 2: Passengers, 3: Payment, 4: Confirmation
  const [primaryPassenger, setPrimaryPassenger] = useState({
    name: "",
    age: 25, // Default adult age
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    roomSharing: "twin", // Default room sharing
  });

  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [roomSharing, setRoomSharing] = useState("twin"); // twin, single, triple
  const [orderNumber, setOrderNumber] = useState("");

  // Mock tour data - Replace with API call: getTourById(tourId)
  const tour = {
    id: "golden-triangle-deluxe",
    name: "Golden Triangle Deluxe",
    code: "GT001",
    duration: "6 Days / 5 Nights",
    image: "/api/placeholder/400/300",
  };

  // Dynamic cost details from backend - Replace with API call: getCostDetails(tourId)
  const costDetails = {
    singlePersonCost: 22999,
    extraPersonCost: 15999, // Twin sharing price
    childWithBed: 9999,
    childWithoutBed: 4999,
  };

  // Available dates - Replace with API call: getAvailableDates(tourId)
  const availableDates = [
    { date: "15 Jan 2024", multiplier: 1.0 }, // Regular pricing
    { date: "22 Jan 2024", multiplier: 1.1 }, // 10% markup
    { date: "29 Jan 2024", multiplier: 1.0 }, // Regular pricing
    { date: "05 Feb 2024", multiplier: 1.2 }, // 20% markup for peak season
  ];

  const formatRoomType = (type: string) => {
    switch (type) {
      case "single":
        return "Single Occupancy";
      case "twin":
        return "Twin Sharing";
      case "triple":
        return "Triple Sharing";
      case "childWithBed":
        return "Child with Bed";
      case "childWithoutBed":
        return "Child without Bed";
      default:
        return "N/A";
    }
  };
  const addPassenger = () => {
    const newPassenger: Passenger = {
      id: Date.now().toString(),
      name: "",
      age: 0,
      gender: "",
      email: "",
      phone: "",
      roomSharing: "twin", // Default room sharing
    };
    setPassengers([...passengers, newPassenger]);
  };

  const removePassenger = (id: string) => {
    setPassengers(passengers.filter((p) => p.id !== id));
  };

  const updatePassenger = (
    id: string,
    field: keyof Passenger,
    value: string | number
  ) => {
    setPassengers(
      passengers.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  // Dynamic pricing calculation based on age and room type
  const calculatePrice = (age: number, roomType: string = "twin") => {
    const dateMultiplier =
      availableDates.find((d) => d.date === selectedDate)?.multiplier || 1.0;

    if (age <= 5) return 0; // Free for children under 5

    let basePrice = 0;
    if (age <= 12) {
      // Child pricing
      basePrice =
        roomType === "childWithoutBed"
          ? costDetails.childWithoutBed
          : costDetails.childWithBed;
    } else {
      // Adult pricing
      switch (roomType) {
        case "single":
          basePrice = costDetails.singlePersonCost;
          break;
        case "triple":
          basePrice = costDetails.extraPersonCost * 0.9; // 10% discount for triple
          break;
        default:
          basePrice = costDetails.extraPersonCost; // Twin sharing
      }
    }

    return basePrice * dateMultiplier;
  };

  const getTotalPrice = () => {
    // Primary passenger price
    const primaryPrice = calculatePrice(
      primaryPassenger.age,
      primaryPassenger.roomSharing
    );

    // Additional passengers total
    const passengersTotal = passengers.reduce((total, passenger) => {
      return total + calculatePrice(passenger.age, passenger.roomSharing);
    }, 0);

    return primaryPrice + passengersTotal;
  };

  // Payment handler - Replace with actual payment gateway integration
  const handlePayment = () => {
    // TODO: Integrate with payment gateway (Razorpay, Stripe, etc.)
    // const paymentData = {
    //   tourId,
    //   passengers: [primaryPassenger, ...passengers],
    //   totalAmount: getTotalPrice(),
    //   roomSharing,
    //   selectedDate
    // };
    // await processPayment(paymentData);

    const orderNum = `ET${Date.now().toString().slice(-8)}`;
    setOrderNumber(orderNum);
    setStep(4);

    toast({
      title: "Payment Successful!",
      description: `Your booking has been confirmed. Order #${orderNum}`,
    });
  };

  const generatePDF = () => {
    toast({
      title: "PDF Generated",
      description: "Your receipt has been downloaded as PDF.",
    });
  };

  useEffect(() => {
    if (!tourId) return;

    setLoading(true);

    // Step 1: Try fetching subcategories
    fetch(`http://localhost:8088/api/packages/${tourId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setTourData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching packages:", error);
        setLoading(false);
      });
  }, [tourId]);

  if (step === 4) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-green-600 mb-2">
              Booking Confirmed!
            </h1>
            <p className="text-muted-foreground mb-4">
              Thank you for choosing Etour. Your booking has been successfully
              confirmed.
            </p>

            <div className="bg-muted p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Booking Details</h3>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Order Number:</strong> {orderNumber}
                </p>
                <p>
                  <strong>Tour:</strong> {tourData.packageName}
                </p>
                <p>
                  <strong>Date:</strong> {selectedDate}
                </p>
                <div>
                  <p className="font-semibold">Room Types:</p>
                  <ul className="text-sm list-disc pl-5">
                    <li>
                      {primaryPassenger.name || "Primary Passenger"} –{" "}
                      {formatRoomType(primaryPassenger.roomSharing)}
                    </li>
                    {passengers.map((p, i) => (
                      <li key={p.id}>
                        {p.name || `Passenger ${i + 2}`} –{" "}
                        {formatRoomType(p.roomSharing)}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  <strong>Passengers:</strong> {passengers.length + 1}
                </p>
                <p>
                  <strong>Total Amount:</strong> ₹
                  {getTotalPrice().toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={generatePDF} variant="outline">
                <Download className="w-4 h-4" />
                Download Receipt
              </Button>
              <Button onClick={() => (window.location.href = "/home")}>
                Back to Home
              </Button>
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Progress Steps */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {[
                { num: 1, title: "Tour Details", active: step >= 1 },
                { num: 2, title: "Passengers", active: step >= 2 },
                { num: 3, title: "Payment", active: step >= 3 },
                { num: 4, title: "Confirmation", active: step >= 4 },
              ].map((stepItem, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      stepItem.active
                        ? "bg-primary text-primary-foreground"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {stepItem.num}
                  </div>
                  <span
                    className={`ml-2 text-sm ${
                      stepItem.active ? "text-primary" : "text-gray-600"
                    }`}
                  >
                    {stepItem.title}
                  </span>
                  {index < 3 && (
                    <div className="w-16 h-0.5 mx-4 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Tour Details & Primary Passenger */}
            {step === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Tour Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label>Tour Code</Label>
                      <Input value={tourData?.packageId} disabled />
                    </div>
                    <div>
                      <Label>Tour Name</Label>
                      <Input value={tourData?.packageName} disabled />
                    </div>
                    <div>
                      <Label>Duration</Label>
                      <Input
                        value={`${tourData?.durationDays} Days / ${
                          tourData?.durationDays - 1
                        } Nights`}
                        disabled
                      />
                    </div>
                    <div>
                      <Label htmlFor="departureDate">
                        Select Departure Date
                      </Label>
                      <Select
                        value={selectedDate}
                        onValueChange={setSelectedDate}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose date" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableDates.map((date) => (
                            <SelectItem key={date.date} value={date.date}>
                              {date.date}{" "}
                              {date.multiplier > 1 &&
                                `(+${Math.round(
                                  (date.multiplier - 1) * 100
                                )}%)`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Global Room Sharing Options - For info only */}
                    {/* <div>
                      <Label htmlFor="roomSharing">
                        Default Room Sharing Info
                      </Label>
                      <Select
                        value={roomSharing}
                        onValueChange={setRoomSharing}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">
                            Single Occupancy - ₹
                            {costDetails.singlePersonCost.toLocaleString()}
                            /person
                          </SelectItem>
                          <SelectItem value="twin">
                            Twin Sharing - ₹
                            {costDetails.extraPersonCost.toLocaleString()}
                            /person
                          </SelectItem>
                          <SelectItem value="triple">
                            Triple Sharing - ₹
                            {(
                              costDetails.extraPersonCost * 0.9
                            ).toLocaleString()}
                            /person
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground mt-1">
                        Individual room selection available for each passenger
                      </p>
                    </div> */}
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Primary Passenger Details
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        className="cursor-pointer"
                        value={primaryPassenger.name}
                        onChange={(e) =>
                          setPrimaryPassenger({
                            ...primaryPassenger,
                            name: e.target.value,
                          })
                        }
                        placeholder="Enter full name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="age">Age *</Label>
                        <Input
                          id="age"
                          type="number"
                          value={primaryPassenger.age || ""}
                          onChange={(e) =>
                            setPrimaryPassenger({
                              ...primaryPassenger,
                              age: parseInt(e.target.value) || 0,
                            })
                          }
                          placeholder="Enter age"
                          min="0"
                          max="120"
                        />
                      </div>
                      <div>
                        <Label htmlFor="primaryRoomSharing">Room Type *</Label>
                        <Select
                          value={primaryPassenger.roomSharing}
                          onValueChange={(value) =>
                            setPrimaryPassenger({
                              ...primaryPassenger,
                              roomSharing: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select room type" />
                          </SelectTrigger>
                          <SelectContent>
                            {primaryPassenger.age <= 12 ? (
                              <>
                                <SelectItem value="childWithBed">
                                  Child with Bed - ₹
                                  {costDetails.childWithBed.toLocaleString()}
                                </SelectItem>
                                <SelectItem value="childWithoutBed">
                                  Child without Bed - ₹
                                  {costDetails.childWithoutBed.toLocaleString()}
                                </SelectItem>
                              </>
                            ) : (
                              <>
                                <SelectItem value="single">
                                  Single Occupancy - ₹
                                  {costDetails.singlePersonCost.toLocaleString()}
                                </SelectItem>
                                <SelectItem value="twin">
                                  Twin Sharing - ₹
                                  {costDetails.extraPersonCost.toLocaleString()}
                                </SelectItem>
                                <SelectItem value="triple">
                                  Triple Sharing - ₹
                                  {(
                                    costDetails.extraPersonCost * 0.9
                                  ).toLocaleString()}
                                </SelectItem>
                              </>
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={primaryPassenger.email}
                        onChange={(e) =>
                          setPrimaryPassenger({
                            ...primaryPassenger,
                            email: e.target.value,
                          })
                        }
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={primaryPassenger.phone}
                        onChange={(e) =>
                          setPrimaryPassenger({
                            ...primaryPassenger,
                            phone: e.target.value,
                          })
                        }
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        value={primaryPassenger.address}
                        onChange={(e) =>
                          setPrimaryPassenger({
                            ...primaryPassenger,
                            address: e.target.value,
                          })
                        }
                        placeholder="Enter address"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={primaryPassenger.city}
                          onChange={(e) =>
                            setPrimaryPassenger({
                              ...primaryPassenger,
                              city: e.target.value,
                            })
                          }
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode">Pincode *</Label>
                        <Input
                          id="pincode"
                          value={primaryPassenger.pincode}
                          onChange={(e) =>
                            setPrimaryPassenger({
                              ...primaryPassenger,
                              pincode: e.target.value,
                            })
                          }
                          placeholder="Pincode"
                        />
                      </div>
                    </div>

                    {/* Primary Passenger Price Display */}
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Your Price:</strong> ₹
                        {calculatePrice(
                          primaryPassenger.age,
                          primaryPassenger.roomSharing
                        ).toLocaleString()}
                        {primaryPassenger.age <= 5 &&
                          " (Free for children under 5)"}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Step 2: Additional Passengers */}
            {step === 2 && (
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">
                    Additional Passengers
                  </h2>
                  <Button onClick={addPassenger} variant="outline">
                    <Plus className="w-4 h-4" />
                    Add Passenger
                  </Button>
                </div>

                {passengers.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No additional passengers added yet.</p>
                    <p className="text-sm">
                      Click "Add Passenger" to add more travelers.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {passengers.map((passenger, index) => (
                      <div key={passenger.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">
                            Passenger {index + 2}
                          </h3>
                          <Button
                            onClick={() => removePassenger(passenger.id)}
                            variant="outline"
                            size="sm"
                          >
                            <Minus className="w-4 h-4" />
                            Remove
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label>Full Name *</Label>
                            <Input
                              value={passenger.name}
                              onChange={(e) =>
                                updatePassenger(
                                  passenger.id,
                                  "name",
                                  e.target.value
                                )
                              }
                              placeholder="Enter full name"
                            />
                          </div>
                          <div>
                            <Label>Age *</Label>
                            <Input
                              type="number"
                              value={passenger.age || ""}
                              onChange={(e) =>
                                updatePassenger(
                                  passenger.id,
                                  "age",
                                  parseInt(e.target.value) || 0
                                )
                              }
                              placeholder="Enter age"
                            />
                          </div>
                          <div>
                            <Label>Gender *</Label>
                            <Select
                              value={passenger.gender}
                              onValueChange={(value) =>
                                updatePassenger(passenger.id, "gender", value)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Room Sharing for Additional Passengers */}
                        <div className="mt-4">
                          <Label>Room Type *</Label>
                          <Select
                            value={passenger.roomSharing || ""}
                            onValueChange={(value) =>
                              updatePassenger(
                                passenger.id,
                                "roomSharing",
                                value
                              )
                            }
                          >
                            <SelectTrigger>
                              <SelectValue
                                placeholder={
                                  passenger.age <= 12
                                    ? "Select child accommodation"
                                    : "Select room sharing type"
                                }
                              />
                            </SelectTrigger>
                            <SelectContent>
                              {passenger.age <= 12 ? (
                                <>
                                  <SelectItem value="childWithBed">
                                    Child with Bed - ₹
                                    {costDetails.childWithBed.toLocaleString()}
                                  </SelectItem>
                                  <SelectItem value="childWithoutBed">
                                    Child without Bed - ₹
                                    {costDetails.childWithoutBed.toLocaleString()}
                                  </SelectItem>
                                </>
                              ) : (
                                <>
                                  <SelectItem value="single">
                                    Single Occupancy - ₹
                                    {costDetails.singlePersonCost.toLocaleString()}
                                  </SelectItem>
                                  <SelectItem value="twin">
                                    Twin Sharing - ₹
                                    {costDetails.extraPersonCost.toLocaleString()}
                                  </SelectItem>
                                  <SelectItem value="triple">
                                    Triple Sharing - ₹
                                    {(
                                      costDetails.extraPersonCost * 0.9
                                    ).toLocaleString()}
                                  </SelectItem>
                                </>
                              )}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="mt-4 text-sm text-muted-foreground">
                          Price: ₹
                          {calculatePrice(
                            passenger.age,
                            passenger.roomSharing
                          ).toLocaleString()}
                          {passenger.age <= 5 && " (Free for children under 5)"}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            )}

            {/* Step 3: Payment Summary */}
            {step === 3 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Booking Summary
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Tour:</span>
                      <span className="font-semibold">
                        {tourData.packageName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Primary Passenger:</span>
                      <span>{primaryPassenger.name}</span>
                    </div>
                    <Separator />

                    <div>
                      <h3 className="font-semibold mb-2">Price Breakdown:</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Room Type:</span>
                          <span>
                            {primaryPassenger.roomSharing === "single"
                              ? "Single Occupancy"
                              : primaryPassenger.roomSharing === "twin"
                              ? "Twin Sharing"
                              : primaryPassenger.roomSharing === "triple"
                              ? "Triple Sharing"
                              : primaryPassenger.roomSharing === "childWithBed"
                              ? "Child with Bed"
                              : primaryPassenger.roomSharing ===
                                "childWithoutBed"
                              ? "Child without Bed"
                              : "N/A"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Primary Passenger:</span>
                          <span>
                            ₹
                            {calculatePrice(
                              primaryPassenger.age,
                              primaryPassenger.roomSharing
                            ).toLocaleString()}
                          </span>
                        </div>
                        {passengers.map((passenger, index) => (
                          <div
                            key={passenger.id}
                            className="flex justify-between"
                          >
                            <span>
                              {passenger.name || `Passenger ${index + 2}`}:
                            </span>
                            <span>
                              ₹
                              {calculatePrice(
                                passenger.age,
                                passenger.roomSharing
                              ).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount:</span>
                      <span className="text-primary">
                        ₹{getTotalPrice().toLocaleString()}
                      </span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Payment Gateway
                  </h2>
                  <div className="text-center py-8">
                    <CreditCard className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <p className="text-muted-foreground mb-6">
                      You will be redirected to our secure payment gateway to
                      complete your booking.
                    </p>
                    <Button
                      onClick={handlePayment}
                      variant="booking"
                      size="lg"
                      className="w-full"
                    >
                      <CreditCard className="w-4 h-4" />
                      Pay ₹{getTotalPrice().toLocaleString()}
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button onClick={() => setStep(step - 1)} variant="outline">
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
              )}

              {step < 3 && (
                <Button
                  onClick={() => setStep(step + 1)}
                  className="ml-auto"
                  disabled={
                    step === 1 &&
                    (!selectedDate ||
                      !roomSharing ||
                      !primaryPassenger.name ||
                      !primaryPassenger.email)
                  }
                >
                  Next Step
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookTourPage;
