import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { 
  Users, 
  Clock, 
  Shield, 
  MapPin, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Activity,
  Car,
  Phone,
  ArrowLeft,
  Youtube,
  Camera
} from "lucide-react";

interface SomnathDashboardProps {
  onBack: () => void;
}

export function SomnathDashboard({ onBack }: SomnathDashboardProps) {
  const templeData = {
    name: "श्री सोमनाथ मंदिर | Shri Somnath Temple",
    visitors: 1240,
    capacity: 2000,
    waitTime: "15 min | 15 मिनट",
    status: "normal",
    youtubeId: "zGDzdps75ns", // Live Somnath Temple stream
    color: "orange"
  };

  const emergencyAlerts = [
    { 
      id: 1, 
      type: "Medical | चिकित्सा", 
      location: "सोमनाथ - मुख्य हॉल | Somnath - Main Hall", 
      time: "2 min ago | 2 मिनट पहले", 
      status: "active" 
    },
    { 
      id: 2, 
      type: "Crowd | भीड़", 
      location: "सोमनाथ - प्रवेश द्वार | Somnath - Entry Gate", 
      time: "15 min ago | 15 मिनट पहले", 
      status: "resolved" 
    }
  ];

  const todayStats = {
    totalVisitors: "2,450 | कुल दर्शनार्थी",
    avgWaitTime: "12 min | औसत प्रतीक्षा",
    parkingUtilization: "68% | पार्किंग उपयोग", 
    safetyScore: "100% | सुरक्षा स्कोर"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "low": return "text-green-600 bg-green-100";
      case "normal": return "text-blue-600 bg-blue-100";
      case "busy": return "text-yellow-600 bg-yellow-100";
      case "high": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getAlertColor = (status: string) => {
    switch (status) {
      case "active": return "text-red-600 bg-red-100";
      case "resolved": return "text-green-600 bg-green-100";
      case "monitoring": return "text-yellow-600 bg-yellow-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <section className="py-8 bg-gradient-to-br from-orange-50 to-red-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              onClick={onBack}
              variant="outline"
              size="sm"
              className="border-orange-200 hover:bg-orange-100"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              वापस | Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-orange-800">{templeData.name}</h1>
              <p className="text-orange-600">लाइव डैशबोर्ड | Live Dashboard</p>
            </div>
          </div>
          <Badge className="bg-orange-100 text-orange-700 border-orange-200">
            <Activity className="h-3 w-3 mr-1" />
            लाइव | Live
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Live Video Stream */}
            <Card className="shadow-lg border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <h3 className="text-lg font-bold flex items-center">
                  <Youtube className="h-5 w-5 mr-2" />
                  लाइव दर्शन | Live Darshan
                </h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${templeData.youtubeId}?autoplay=1&mute=1`}
                    title="Somnath Temple Live Stream"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4 bg-orange-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">लाइव स्ट्रीमिंग | Live Streaming</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      दर्शक | Viewers: 2,847
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Temple Status */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <h3 className="text-lg font-bold">मंदिर स्थिति | Temple Status</h3>
              </CardHeader>
              <CardContent>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-lg">{templeData.name}</h4>
                    <Badge className={getStatusColor(templeData.status)}>
                      {templeData.status === "normal" ? "सामान्य | Normal" : templeData.status}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>कैपेसिटी | Occupancy</span>
                        <span>{templeData.visitors}/{templeData.capacity}</span>
                      </div>
                      <Progress 
                        value={(templeData.visitors / templeData.capacity) * 100} 
                        className="h-3 mb-4"
                      />
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          प्रतीक्षा | Wait: {templeData.waitTime}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {templeData.visitors} दर्शनार्थी | visitors
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-sm">
                        <span className="font-medium">आज का आँकड़ा | Today's Stats:</span>
                      </div>
                      <div className="text-xs space-y-1 text-gray-600">
                        <div>• कुल दर्शनार्थी | Total Visitors: 2,450</div>
                        <div>• औसत प्रतीक्षा | Avg Wait: 12 min</div>
                        <div>• पार्किंग | Parking: 68% full</div>
                        <div>• सुरक्षा स्कोर | Safety: 100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-orange-50 to-red-50">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mx-auto mb-3">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-orange-600">2,450</div>
                <div className="text-sm text-gray-600">कुल दर्शनार्थी | Total Visitors</div>
              </Card>

              <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">12 min</div>
                <div className="text-sm text-gray-600">औसत प्रतीक्षा | Avg Wait</div>
              </Card>

              <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mx-auto mb-3">
                  <Car className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600">68%</div>
                <div className="text-sm text-gray-600">पार्किंग | Parking</div>
              </Card>

              <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-purple-50 to-violet-50">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">सुरक्षा | Safety</div>
              </Card>
            </div>

            {/* Traffic & Parking */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <h3 className="text-lg font-bold">यातायात और पार्किंग | Traffic & Parking</h3>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Car className="h-4 w-4 mr-2 text-orange-600" />
                      पार्किंग उपलब्धता | Parking Availability
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">मुख्य पार्किंग | Main Parking</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-600 h-2 rounded-full" style={{ width: "68%" }}></div>
                          </div>
                          <span className="text-xs text-gray-600">32 spots</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">अतिरिक्त पार्किंग | Extra Parking</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                          </div>
                          <span className="text-xs text-gray-600">55 spots</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-green-600" />
                      मार्ग स्थिति | Route Status
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>मुख्य राजमार्ग | Main Highway</span>
                        <Badge className="bg-green-100 text-green-700">साफ | Clear</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>मंदिर रोड | Temple Road</span>
                        <Badge className="bg-yellow-100 text-yellow-700">मध्यम | Moderate</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>पार्किंग एक्सेस | Parking Access</span>
                        <Badge className="bg-orange-100 text-orange-700">व्यस्त | Busy</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Alerts */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <h3 className="text-lg font-bold flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
                  आपातकालीन अलर्ट | Emergency Alerts
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {emergencyAlerts.map((alert) => (
                  <div key={alert.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getAlertColor(alert.status)}>
                        {alert.type}
                      </Badge>
                      <span className="text-xs text-gray-500">{alert.time}</span>
                    </div>
                    <p className="text-sm font-medium">{alert.location}</p>
                    <div className="flex items-center mt-2">
                      {alert.status === "resolved" ? (
                        <CheckCircle className="h-3 w-3 text-green-600 mr-1" />
                      ) : (
                        <AlertCircle className="h-3 w-3 text-red-600 mr-1" />
                      )}
                      <span className="text-xs capitalize">
                        {alert.status === "active" ? "सक्रिय | Active" : "हल | Resolved"}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <h3 className="text-lg font-bold">त्वरित कार्य | Quick Actions</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <button className="w-full p-3 text-left bg-red-50 hover:bg-red-100 rounded-lg border border-red-200 transition-colors">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-red-600 mr-3" />
                    <div>
                      <div className="font-medium text-red-700">आपातकालीन प्रसारण | Emergency Broadcast</div>
                      <div className="text-xs text-red-600">सभी श्रद्धालुओं को अलर्ट भेजें | Send alert to all</div>
                    </div>
                  </div>
                </button>

                <button className="w-full p-3 text-left bg-orange-50 hover:bg-orange-100 rounded-lg border border-orange-200 transition-colors">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-orange-600 mr-3" />
                    <div>
                      <div className="font-medium text-orange-700">भीड़ नियंत्रण | Crowd Control</div>
                      <div className="text-xs text-orange-600">कतार प्रबंधन सक्रिय करें | Activate queue management</div>
                    </div>
                  </div>
                </button>

                <button className="w-full p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors">
                  <div className="flex items-center">
                    <Camera className="h-4 w-4 text-green-600 mr-3" />
                    <div>
                      <div className="font-medium text-green-700">लाइव कैमरा | Live Camera</div>
                      <div className="text-xs text-green-600">अन्य कैमरा व्यू देखें | Switch camera views</div>
                    </div>
                  </div>
                </button>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <h3 className="text-lg font-bold">सिस्टम स्थिति | System Status</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">भीड़ निगरानी | Crowd Monitoring</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600">ऑनलाइन | Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">आपातकालीन सिस्टम | Emergency</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600">सक्रिय | Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">लाइव स्ट्रीम | Live Stream</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600">चालू | Running</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">मोबाइल ऐप | Mobile App</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600">चालू | Running</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}