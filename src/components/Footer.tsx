import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { toast } from "sonner@2.0.3";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Smartphone,
  Shield,
  Users,
  Award,
  Send,
  CheckCircle
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
      setIsSubscribing(false);
    }, 1500);
  };
  const temples = [
    { name: "Somnath Temple", location: "Veraval, Gujarat" },
    { name: "Dwarkadhish Temple", location: "Dwarka, Gujarat" },
    { name: "Ambaji Temple", location: "Banaskantha, Gujarat" },
    { name: "Kalika Mata Temple", location: "Pavagadh, Gujarat" }
  ];

  const services = [
    "Queue Management",
    "Safety Monitoring",
    "Traffic Control",
    "Emergency Response",
    "Crowd Analytics",
    "Mobile Notifications"
  ];

  const quickLinks = [
    "Live Dashboard",
    "Temple Status",
    "Book Darshan",
    "Emergency Help",
    "Mobile App",
    "Contact Support"
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">🕉</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Temple Management System</h3>
                  <p className="text-gray-400 text-sm">Smart Solutions for Sacred Spaces</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Revolutionizing temple experiences through cutting-edge technology while 
                preserving the sanctity and traditions of our sacred heritage.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Users className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">10M+ Users</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Smartphone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">Mobile First</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Award className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300">Award Winning</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-gray-400 hover:text-blue-400 hover:bg-gray-700"
                onClick={() => toast.info("Opening Facebook page...")}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-gray-400 hover:text-blue-400 hover:bg-gray-700"
                onClick={() => toast.info("Opening Twitter page...")}
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-gray-400 hover:text-pink-400 hover:bg-gray-700"
                onClick={() => toast.info("Opening Instagram page...")}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-gray-400 hover:text-red-400 hover:bg-gray-700"
                onClick={() => toast.info("Opening YouTube channel...")}
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Temples */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400">Sacred Temples</h4>
            <ul className="space-y-4">
              {temples.map((temple, index) => (
                <li key={index} className="group">
                  <a href="#" className="block hover:text-orange-400 transition-colors">
                    <div className="font-medium">{temple.name}</div>
                    <div className="text-sm text-gray-400 flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {temple.location}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2 text-orange-300">Emergency Helpline</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex items-center">
                  <Phone className="h-3 w-3 mr-2 text-red-400" />
                  <span>1800-TEMPLE-HELP</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-2 text-blue-400" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-orange-300">Quick Links</h5>
              <ul className="space-y-2">
                {quickLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400">Stay Connected</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-orange-400 mt-1" />
                <div className="text-sm text-gray-300">
                  <div>Technology Center</div>
                  <div>Gandhinagar, Gujarat</div>
                  <div>India - 382010</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-gray-300">+91 79 2325 6789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-gray-300">support@templemanagement.gov.in</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 text-orange-300">Get Updates</h5>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to receive temple status updates and important announcements.
              </p>
              <div className="space-y-3">
                <Input 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                />
                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:opacity-50"
                  onClick={handleSubscribe}
                  disabled={isSubscribing}
                >
                  {isSubscribing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </Button>
              </div>
              
              {/* Newsletter Benefits */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <p className="text-xs text-gray-400 mb-2">You'll receive:</p>
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-gray-300">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Live darshan notifications
                  </div>
                  <div className="flex items-center text-xs text-gray-300">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Festival announcements
                  </div>
                  <div className="flex items-center text-xs text-gray-300">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Crowd status alerts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 Temple Management System. All rights reserved. 
            <span className="mx-2">|</span>
            Developed with ❤️ for pilgrims across India.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
              Accessibility
            </a>
          </div>
        </div>

        {/* Government Disclaimer */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              <strong className="text-orange-400">Government Initiative:</strong> This system is developed in collaboration with 
              the Government of Gujarat and Archaeological Survey of India to enhance pilgrim safety and experience. 
              All data is securely managed in compliance with Indian data protection regulations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}