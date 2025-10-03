import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock, Users, CreditCard, MapPin, Phone, CheckCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  templeName: string;
  templeLocation: string;
}

export function BookingModal({ isOpen, onClose, templeName, templeLocation }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    people: 1,
    type: "regular",
    name: "",
    phone: "",
    email: "",
    specialRequests: ""
  });

  const timeSlots = [
    { id: "morning-aarti", label: "Morning Aarti", time: "6:00 AM", price: 51, available: true },
    { id: "regular-morning", label: "Regular Darshan", time: "8:00 AM - 12:00 PM", price: 21, available: true },
    { id: "afternoon", label: "Afternoon Darshan", time: "2:00 PM - 6:00 PM", price: 21, available: true },
    { id: "evening-aarti", label: "Evening Aarti", time: "7:00 PM", price: 51, available: false },
    { id: "special-vip", label: "VIP Darshan", time: "Flexible", price: 201, available: true }
  ];

  const specialServices = [
    { id: "wheelchair", label: "Wheelchair Assistance", price: 0 },
    { id: "guide", label: "Audio Guide", price: 50 },
    { id: "prasad", label: "Special Prasad", price: 101 },
    { id: "photography", label: "Photography Permit", price: 25 }
  ];

  const handleBooking = () => {
    // Simulate booking process
    setStep(4);
    
    // Auto close after showing success
    setTimeout(() => {
      onClose();
      setStep(1);
    }, 3000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="date">Select Date</Label>
              <Input
                id="date"
                type="date"
                value={bookingData.date}
                onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div>
              <Label>Select Time Slot</Label>
              <div className="grid gap-3 mt-2">
                {timeSlots.map((slot) => (
                  <Card 
                    key={slot.id} 
                    className={`cursor-pointer transition-all ${
                      !slot.available ? 'opacity-50 cursor-not-allowed' : 
                      bookingData.time === slot.id ? 'ring-2 ring-orange-500 bg-orange-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => slot.available && setBookingData({...bookingData, time: slot.id})}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{slot.label}</h4>
                          <p className="text-sm text-gray-600 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {slot.time}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-orange-600">₹{slot.price}</div>
                          {!slot.available && (
                            <Badge variant="destructive" className="text-xs">Full</Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="people">Number of People</Label>
              <Input
                id="people"
                type="number"
                min="1"
                max="10"
                value={bookingData.people}
                onChange={(e) => setBookingData({...bookingData, people: parseInt(e.target.value)})}
              />
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-orange-600 to-red-600"
              onClick={() => setStep(2)}
              disabled={!bookingData.date || !bookingData.time}
            >
              Continue to Personal Details
            </Button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={bookingData.email}
                onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <Label>Special Services (Optional)</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {specialServices.map((service) => (
                  <Card key={service.id} className="cursor-pointer hover:bg-gray-50">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="text-sm font-medium">{service.label}</h5>
                          <p className="text-xs text-gray-600">
                            {service.price === 0 ? 'Free' : `₹${service.price}`}
                          </p>
                        </div>
                        <input type="checkbox" className="rounded" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="special-requests">Special Requests</Label>
              <textarea 
                id="special-requests"
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows={3}
                value={bookingData.specialRequests}
                onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
                placeholder="Any special requirements or accessibility needs..."
              />
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-orange-600 to-red-600"
                onClick={() => setStep(3)}
                disabled={!bookingData.name || !bookingData.phone}
              >
                Review Booking
              </Button>
            </div>
          </div>
        );

      case 3:
        const selectedSlot = timeSlots.find(slot => slot.id === bookingData.time);
        const totalAmount = (selectedSlot?.price || 0) * bookingData.people;

        return (
          <div className="space-y-6">
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Temple:</span>
                  <span className="font-semibold">{templeName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span>{templeLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-semibold">{new Date(bookingData.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-semibold">{selectedSlot?.label} ({selectedSlot?.time})</span>
                </div>
                <div className="flex justify-between">
                  <span>People:</span>
                  <span className="font-semibold">{bookingData.people}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">Total Amount:</span>
                  <span className="font-bold text-orange-600">₹{totalAmount}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Card Number</Label>
                  <Input placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Expiry Date</Label>
                    <Input placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label>CVV</Label>
                    <Input placeholder="123" />
                  </div>
                </div>
                <div>
                  <Label>Cardholder Name</Label>
                  <Input placeholder="Name on card" />
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                Back
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-orange-600 to-red-600"
                onClick={handleBooking}
              >
                Confirm & Pay ₹{totalAmount}
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600">
                Your darshan booking has been confirmed. A confirmation SMS and email 
                will be sent to you shortly.
              </p>
            </div>
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="font-bold text-lg text-green-600 mb-1">
                    Booking ID: #DS{Math.random().toString(36).substr(2, 8).toUpperCase()}
                  </div>
                  <p className="text-sm text-gray-600">Please save this booking ID for future reference</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Book Darshan - {templeName}
          </DialogTitle>
          <DialogDescription>
            Complete your darshan booking in simple steps. Select your preferred date, time, and provide personal details.
          </DialogDescription>
        </DialogHeader>

        {/* Progress Steps */}
        {step < 4 && (
          <div className="flex items-center justify-center space-x-4 mb-6">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNum ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`w-12 h-1 mx-2 ${
                    step > stepNum ? 'bg-orange-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        )}

        {renderStep()}
      </DialogContent>
    </Dialog>
  );
}