import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "./ui/dialog";
import { MapPin, Clock, Users, Star, Play, Calendar, Info, Navigation, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookingModal } from "./BookingModal";

interface Temple {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  status: "low" | "medium" | "high";
  waitTime: string;
  dailyVisitors: string;
  rating: number;
  specialties: string[];
}

const temples: Temple[] = [
  {
    id: "somnath",
    name: "Somnath Temple",
    location: "Veraval, Gujarat",
    description: "First among the twelve Jyotirlinga shrines of Shiva, located on the shores of the Arabian Sea.",
    image: "https://images.unsplash.com/photo-1696239108459-5f1356d00e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb21uYXRoJTIwdGVtcGxlJTIwZ3VqYXJhdCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTkzOTQwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    status: "medium",
    waitTime: "25 min",
    dailyVisitors: "15K",
    rating: 4.8,
    specialties: ["Jyotirlinga", "Sea Shore", "Ancient Architecture"]
  },
  {
    id: "dwarka",
    name: "Dwarkadhish Temple",
    location: "Dwarka, Gujarat",
    description: "Sacred temple dedicated to Lord Krishna, one of the Char Dham pilgrimage sites.",
    image: "https://images.unsplash.com/photo-1711547979445-a72c87dfd004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkd2Fya2ElMjB0ZW1wbGUlMjBrcmlzaG5hJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1OTM5NDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    status: "high",
    waitTime: "45 min",
    dailyVisitors: "22K",
    rating: 4.9,
    specialties: ["Char Dham", "Krishna Temple", "Coastal Location"]
  },
  {
    id: "ambaji",
    name: "Ambaji Temple",
    location: "Banaskantha, Gujarat",
    description: "One of the 51 Shakti Peethas, dedicated to Goddess Amba, mother goddess of power.",
    image: "https://images.unsplash.com/photo-1696239108459-5f1356d00e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWJhamklMjB0ZW1wbGUlMjBndWphcmF0fGVufDF8fHx8MTc1OTM5NDA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    status: "low",
    waitTime: "10 min",
    dailyVisitors: "8K",
    rating: 4.7,
    specialties: ["Shakti Peetha", "Goddess Temple", "Mountain Location"]
  },
  {
    id: "pavagadh",
    name: "Kalika Mata Temple",
    location: "Pavagadh, Gujarat",
    description: "Historic temple atop Pavagadh hill, UNESCO World Heritage site with ropeway access.",
    image: "https://images.unsplash.com/photo-1730021155304-9ff1f0f33b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXZhZ2FkaCUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTkzOTQwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    status: "medium",
    waitTime: "30 min",
    dailyVisitors: "12K",
    rating: 4.6,
    specialties: ["UNESCO Heritage", "Hill Temple", "Ropeway Access"]
  }
];

function getStatusColor(status: Temple["status"]) {
  switch (status) {
    case "low": return "bg-green-100 text-green-700 border-green-200";
    case "medium": return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "high": return "bg-red-100 text-red-700 border-red-200";
  }
}

function getStatusText(status: Temple["status"]) {
  switch (status) {
    case "low": return "Low Crowd";
    case "medium": return "Moderate Crowd";
    case "high": return "High Crowd";
  }
}

interface TempleCardsProps {
  onNavigate: (section: string) => void;
}

export function TempleCards({ onNavigate }: TempleCardsProps) {
  const [selectedTemple, setSelectedTemple] = useState<Temple | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTemple, setBookingTemple] = useState<{ name: string; location: string } | null>(null);
  return (
    <section id="temples" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
            Sacred Destinations
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Sacred Temples</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the divine beauty and spiritual significance of Gujarat's most revered temples, 
            now enhanced with smart management systems for a seamless pilgrimage experience.
          </p>
        </div>

        {/* Temple Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {temples.map((temple) => (
            <Card key={temple.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getStatusColor(temple.status)}>
                    {getStatusText(temple.status)}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{temple.rating}</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <h3 className="font-bold text-lg group-hover:text-orange-600 transition-colors">
                  {temple.name}
                </h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {temple.location}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {temple.description}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1">
                  {temple.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="flex items-center justify-center text-orange-600 mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="font-semibold">{temple.waitTime}</span>
                    </div>
                    <div className="text-xs text-gray-500">Wait Time</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-blue-600 mb-1">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="font-semibold">{temple.dailyVisitors}</span>
                    </div>
                    <div className="text-xs text-gray-500">Daily Visitors</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedTemple(temple)}
                      >
                        <Info className="h-3 w-3 mr-1" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2" />
                          {temple.name}
                        </DialogTitle>
                        <DialogDescription>
                          Complete information about {temple.name} including timings, live status, and booking options.
                        </DialogDescription>
                      </DialogHeader>
                      {selectedTemple && (
                        <div className="space-y-4">
                          <img 
                            src={selectedTemple.image} 
                            alt={selectedTemple.name}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2">Temple Information</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span>Location:</span>
                                  <span>{selectedTemple.location}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Current Status:</span>
                                  <Badge className={getStatusColor(selectedTemple.status)}>
                                    {getStatusText(selectedTemple.status)}
                                  </Badge>
                                </div>
                                <div className="flex justify-between">
                                  <span>Wait Time:</span>
                                  <span>{selectedTemple.waitTime}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Daily Visitors:</span>
                                  <span>{selectedTemple.dailyVisitors}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Rating:</span>
                                  <div className="flex items-center">
                                    <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                                    <span>{selectedTemple.rating}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Darshan Timings</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span>Morning Aarti:</span>
                                  <span>6:00 AM</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Darshan Hours:</span>
                                  <span>6:00 AM - 9:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Evening Aarti:</span>
                                  <span>7:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Night Closure:</span>
                                  <span>9:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600">{selectedTemple.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedTemple.specialties.map((specialty, index) => (
                              <Badge key={index} variant="secondary">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <Button 
                              className="bg-gradient-to-r from-orange-600 to-red-600"
                              onClick={() => {
                                setBookingTemple({ name: selectedTemple.name, location: selectedTemple.location });
                                setIsBookingOpen(true);
                              }}
                            >
                              <Calendar className="h-4 w-4 mr-2" />
                              Book Darshan
                            </Button>
                            <Button variant="outline" onClick={() => onNavigate('live-streams')}>
                              <Play className="h-4 w-4 mr-2" />
                              Live Stream
                            </Button>
                            <Button variant="outline">
                              <Navigation className="h-4 w-4 mr-2" />
                              Get Directions
                            </Button>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>

                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                    onClick={() => {
                      setBookingTemple({ name: temple.name, location: temple.location });
                      setIsBookingOpen(true);
                    }}
                  >
                    <Calendar className="h-3 w-3 mr-1" />
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <h3 className="font-bold mb-2">Book Darshan Slot</h3>
            <p className="text-sm text-gray-600 mb-4">Reserve your preferred time for temple visit</p>
            <Button 
              variant="outline" 
              className="border-orange-300 text-orange-600"
              onClick={() => {
                setBookingTemple({ name: "Select Temple", location: "Choose from available temples" });
                setIsBookingOpen(true);
              }}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Now
            </Button>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <h3 className="font-bold mb-2">Live Queue Status</h3>
            <p className="text-sm text-gray-600 mb-4">Check real-time crowd levels and wait times</p>
            <Button 
              variant="outline" 
              className="border-blue-300 text-blue-600"
              onClick={() => onNavigate('dashboard')}
            >
              <Clock className="h-4 w-4 mr-2" />
              View Status
            </Button>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <h3 className="font-bold mb-2">Emergency Assistance</h3>
            <p className="text-sm text-gray-600 mb-4">Get immediate help and support services</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-green-300 text-green-600">
                  <Phone className="h-4 w-4 mr-2" />
                  Get Help
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Emergency Assistance</DialogTitle>
                  <DialogDescription>
                    Get immediate help and emergency services for any urgent situations.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Emergency: 108
                  </Button>
                  <Button className="w-full" variant="outline">
                    <MapPin className="h-4 w-4 mr-2" />
                    Locate Nearest Medical Center
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Report Lost Person
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Info className="h-4 w-4 mr-2" />
                    Security Assistance
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </Card>
        </div>

        {/* Booking Modal */}
        {bookingTemple && (
          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => {
              setIsBookingOpen(false);
              setBookingTemple(null);
            }}
            templeName={bookingTemple.name}
            templeLocation={bookingTemple.location}
          />
        )}
      </div>
    </section>
  );
}