import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "./ui/dialog";
import { ArrowRight, Play, Shield, Users, BarChart3, Video, Calendar, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b00' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                🙏 दर्शन सेतु में स्वागत | Welcome to Darshan Setu
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">दिव्य दर्शन</span> का
                <br />
                Digital Revolution
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                गुजरात के तीन पवित्र मंदिरों में भीड़ प्रबंधन, सुरक्षा और बेहतर तीर्थयात्री अनुभव के लिए व्यापक डिजिटल समाधान।
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Comprehensive digital solutions for crowd management, safety, and enhanced pilgrim experiences at Gujarat's three sacred temples.
              </p>
            </div>

            {/* Features Highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">बेहतर सुरक्षा | Enhanced Safety</span>
              </div>
              <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">भीड़ नियंत्रण | Crowd Control</span>
              </div>
              <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">लाइव एनालिटिक्स | Real-time Analytics</span>
              </div>
            </div>

            {/* Temple Selection Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
                onClick={() => onNavigate('ambaji')}
              >
                अम्बाजी माता
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                onClick={() => onNavigate('chamunda')}
              >
                चामुंडा माता
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                onClick={() => onNavigate('dwarka')}
              >
                द्वारकाधीश
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 border border-orange-200">
                    <Calendar className="mr-2 h-4 w-4" />
                    दर्शन बुक करें | Book Darshan
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>दर्शन स्लॉट बुक करें | Book Your Darshan Slot</DialogTitle>
                    <DialogDescription>
                      हमारी सुविधाजनक बुकिंग सिस्टम के साथ मंदिर दर्शन के लिए अपना पसंदीदा समय आरक्षित करें।
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">मंदिर चुनें | Select Temple</label>
                      <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option>अम्बाजी माता मंदिर | Ambaji Mata Temple</option>
                        <option>चामुंडा माता मंदिर | Chamunda Mata Temple</option>
                        <option>द्वारकाधीश मंदिर | Dwarkadhish Temple</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">दिनांक चुनें | Select Date</label>
                      <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">समय | Preferred Time</label>
                      <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option>प्रात: आरती | Morning Aarti (6:00 AM)</option>
                        <option>सामान्य दर्शन | Regular Darshan (8:00 AM - 12:00 PM)</option>
                        <option>दोपहर दर्शन | Afternoon Darshan (2:00 PM - 6:00 PM)</option>
                        <option>संध्या आरती | Evening Aarti (7:00 PM)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">लोगों की संख्या | Number of People</label>
                      <input type="number" min="1" max="10" placeholder="1" className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600">
                      बुकिंग पुष्टि करें | Confirm Booking
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="text-green-600 hover:bg-green-50 border border-green-200">
                    <MapPin className="mr-2 h-4 w-4" />
                    कतार स्थिति | Queue Status
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>लाइव कतार स्थिति | Live Queue Status</DialogTitle>
                    <DialogDescription>
                      सभी मंदिरों में वास्तविक समय की भीड़ का स्तर और प्रतीक्षा समय देखें।
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold">अम्बाजी माता मंदिर | Ambaji Temple</h4>
                          <p className="text-sm text-gray-600">वर्तमान प्रतीक्षा | Current wait: 5 minutes</p>
                        </div>
                        <Badge className="bg-green-100 text-green-700">कम | Low</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold">चामुंडा माता मंदिर | Chamunda Temple</h4>
                          <p className="text-sm text-gray-600">वर्तमान प्रतीक्षा | Current wait: 12 minutes</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700">सामान्य | Normal</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold">द्वारकाधीश मंदिर | Dwarkadhish Temple</h4>
                          <p className="text-sm text-gray-600">वर्तमान प्रतीक्षा | Current wait: 25 minutes</p>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-700">व्यस्त | Busy</Badge>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-orange-100">
              <div>
                <div className="text-2xl font-bold text-orange-600">3</div>
                <div className="text-sm text-gray-600">पवित्र मंदिर | Sacred Temples</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">8M+</div>
                <div className="text-sm text-gray-600">वार्षिक तीर्थयात्री | Annual Pilgrims</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">99.9%</div>
                <div className="text-sm text-gray-600">सिस्टम अपटाइम | System Uptime</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1648402197949-fdefa634aa87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjBjcm93ZCUyMHBpbGdyaW1zfGVufDF8fHx8MTc1OTM5NDA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Temple pilgrims and crowd management"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Queue Status: Active</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-600">15 min</div>
                <div className="text-xs text-gray-600">Est. Wait Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}