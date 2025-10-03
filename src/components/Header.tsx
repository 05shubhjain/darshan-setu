import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "./ui/dialog";
import { Bell, Menu, User, Search, Phone, MapPin, Clock } from "lucide-react";
import { Navigation } from "./Navigation";
import darshanSetuLogo from "figma:asset/c140b933032ba8c509421998e4d17fabdec1b569.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const notifications = [
    { id: 1, title: "भीड़ अधिक - द्वारका | High crowd at Dwarka", message: "प्रतीक्षा समय: 45 मिनट | Wait time: 45 minutes", time: "2 min ago", type: "warning" },
    { id: 2, title: "चिकित्सा सहायता | Medical assistance", message: "अम्बाजी मंदिर मुख्य हॉल | Ambaji temple main hall", time: "5 min ago", type: "emergency" },
    { id: 3, title: "रोपवे सेवा बंद | Ropeway service closed", message: "चामुंडा माता - मौसम | Chamunda Mata - Weather", time: "8 min ago", type: "info" }
  ];

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "emergency": return "bg-red-100 border-red-200 text-red-800";
      case "warning": return "bg-yellow-100 border-yellow-200 text-yellow-800";
      case "info": return "bg-blue-100 border-blue-200 text-blue-800";
      default: return "bg-gray-100 border-gray-200 text-gray-800";
    }
  };

  return (
    <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-full">
              <img 
                src={darshanSetuLogo} 
                alt="Darshan Setu Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">Darshan Setu</h1>
              <p className="text-orange-100 text-sm">Digital Bridge to Divine Experience</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              className={`text-white hover:bg-orange-500 ${currentPage === 'home' ? 'bg-orange-500' : ''}`}
              onClick={() => onNavigate('home')}
            >
              होम | Home
            </Button>
            <Button 
              variant="ghost" 
              className={`text-white hover:bg-orange-500 ${currentPage === 'ambaji' ? 'bg-orange-500' : ''}`}
              onClick={() => onNavigate('ambaji')}
            >
              अम्बाजी | Ambaji
            </Button>
            <Button 
              variant="ghost" 
              className={`text-white hover:bg-orange-500 ${currentPage === 'chamunda' ? 'bg-orange-500' : ''}`}
              onClick={() => onNavigate('chamunda')}
            >
              चामुंडा माता | Chamunda
            </Button>
            <Button 
              variant="ghost" 
              className={`text-white hover:bg-orange-500 ${currentPage === 'dwarka' ? 'bg-orange-500' : ''}`}
              onClick={() => onNavigate('dwarka')}
            >
              द्वारका | Dwarka
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Search Dialog */}
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-orange-500">
                  <Search className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Search Temples & Services</DialogTitle>
                  <DialogDescription>
                    Find temples, darshan timings, services, and live streams quickly.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for temples, darshan times, services..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-700">Quick Search</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="cursor-pointer hover:bg-orange-100">अम्बाजी लाइव | Ambaji Live</Badge>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-orange-100">द्वारका कतार | Dwarka Queue</Badge>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-orange-100">दर्शन बुक करें | Book Darshan</Badge>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-orange-100">आपातकाल | Emergency</Badge>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Notifications Dialog */}
            <Dialog open={isNotificationsOpen} onOpenChange={setIsNotificationsOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-orange-500 relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-orange-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications.length}
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Live Notifications</DialogTitle>
                  <DialogDescription>
                    Real-time updates on temple crowd levels, emergencies, and important announcements.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div key={notif.id} className={`p-3 rounded-lg border ${getNotificationColor(notif.type)}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-semibold text-sm">{notif.title}</h5>
                          <p className="text-xs mt-1">{notif.message}</p>
                        </div>
                        <span className="text-xs opacity-70">{notif.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t">
                  <Button className="w-full" size="sm">View All Notifications</Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Emergency Contact */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-orange-500">
                  <User className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Emergency & Support</DialogTitle>
                  <DialogDescription>
                    Access emergency services, temple helplines, and immediate assistance.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    <Button className="bg-red-600 hover:bg-red-700 flex items-center justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      Emergency Helpline: 108
                    </Button>
                    <Button variant="outline" className="flex items-center justify-start">
                      <MapPin className="h-4 w-4 mr-2" />
                      Find Nearest Medical Center
                    </Button>
                    <Button variant="outline" className="flex items-center justify-start">
                      <Clock className="h-4 w-4 mr-2" />
                      Report Lost & Found
                    </Button>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">मंदिर हेल्पलाइन | Temple Helplines</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>अम्बाजी | Ambaji:</span>
                        <span>+91-2749-245678</span>
                      </div>
                      <div className="flex justify-between">
                        <span>चामुंडा माता | Chamunda:</span>
                        <span>+91-2678-256789</span>
                      </div>
                      <div className="flex justify-between">
                        <span>द्वारका | Dwarka:</span>
                        <span>+91-2892-234567</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Mobile Menu */}
            <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-orange-500">
                  <Menu className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Menu</DialogTitle>
                  <DialogDescription>
                    Navigate to different sections of Darshan Setu.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => {
                      onNavigate('home');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    होम | Home
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => {
                      onNavigate('ambaji');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    अम्बाजी | Ambaji
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => {
                      onNavigate('chamunda');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    चामुंडा माता | Chamunda
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => {
                      onNavigate('dwarka');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    द्वारका | Dwarka
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
}