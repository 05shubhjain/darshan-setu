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

interface DwarkaDashboardProps {
  onBack: () => void;
}

export function DwarkaDashboard({ onBack }: DwarkaDashboardProps) {
  const templeData = {
    name: "श्री द्वारकाधीश मंदिर | Shri Dwarkadhish Temple",
    visitors: 1850,
    capacity: 2200,
    waitTime: "25 min | 25 मिनट",
    status: "busy",
    youtubeId: "w_Ma8oQLmSM", // Live Dwarka Temple stream
    color: "blue"
  };

  const emergencyAlerts = [
    { 
      id: 1, 
      type: "Crowd | भीड़", 
      location: "द्वारका - प्रवेश द्वार | Dwarka - Entry Gate", 
      time: "5 min ago | 5 मिनट पहले", 
      status: "monitoring" 
    },
    { 
      id: 2, 
      type: "Traffic | यातायात", 
      location: "द्वारका - मुख्य रोड | Dwarka - Main Road", 
      time: "12 min ago | 12 मिनट पहले", 
      status: "resolved" 
    }
  ];

  const todayStats = {
    totalVisitors: "3,200 | कुल दर्शनार्थी",
    avgWaitTime: "22 min | औसत प्रतीक्षा",
    parkingUtilization: "85% | पार्किंग उपयोग", 
    safetyScore: "98% | सुरक्षा स्कोर"
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
    <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              onClick={onBack}
              variant="outline"
              size="sm"
              className="border-blue-200 hover:bg-blue-100"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              वापस | Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-blue-800">{templeData.name}</h1>
              <p className="text-blue-600">लाइव डैशबोर्ड | Live Dashboard</p>
            </div>
          </div>
          <Badge className="bg-blue-100 text-blue-700 border-blue-200">
            <Activity className="h-3 w-3 mr-1" />
            लाइव | Live
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Live Video Stream */}
            <Card className="shadow-lg border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
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
                    title="Dwarka Temple Live Stream"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4 bg-blue-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">लाइव स्ट्रीमिंग | Live Streaming</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      दर्शक | Viewers: 4,235
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
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-lg">{templeData.name}</h4>
                    <Badge className={getStatusColor(templeData.status)}>
                      {templeData.status === "busy" ? "व्यस्त | Busy" : templeData.status}
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
                        <div>• कुल दर्शनार्थी | Total Visitors: 3,200</div>
                        <div>• औसत प्रतीक्षा | Avg Wait: 22 min</div>
                        <div>• पार्किंग | Parking: 85% full</div>
                        <div>• सुरक्षा स्कोर | Safety: 98%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">3,200</div>
                <div className="text-sm text-gray-600">कुल दर्शनार्थी | Total Visitors</div>
              </Card>

              <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-yellow-50 to-orange-50">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-xl mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-yellow-600">22 min</div>
                <div className="text-sm text-gray-600">औसत प्रतीक्षा | Avg Wait</div>
              </Card>

              <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-red-50 to-pink-50">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mx-auto mb-3">
                  <Car className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-red-600">85%</div>
                <div className="text-sm text-gray-600">पार्किंग | Parking</div>
              </Card>

              <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600">98%</div>
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
                      <Car className="h-4 w-4 mr-2 text-blue-600" />
                      पार्किंग उपलब्धता | Parking Availability
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">मुख्य पार्किंग | Main Parking</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div className="bg-red-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                          <span className="text-xs text-gray-600">15 spots</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">अतिरिक्त पार्किंग | Extra Parking</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                          </div>
                          <span className="text-xs text-gray-600">30 spots</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">समुद्री पार्किंग | Beach Parking</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: "40%" }}></div>
                          </div>
                          <span className="text-xs text-gray-600">60 spots</span>
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
                        <span>द्वारका हाईवे | Dwarka Highway</span>
                        <Badge className="bg-yellow-100 text-yellow-700">मध्यम | Moderate</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>मंदिर रोड | Temple Road</span>
                        <Badge className="bg-red-100 text-red-700">व्यस्त | Congested</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>समुद्री रास्ता | Beach Route</span>
                        <Badge className="bg-green-100 text-green-700">साफ | Clear</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>वैकल्पिक मार्ग | Alternative Route</span>
                        <Badge className="bg-green-100 text-green-700">सुझाया गया | Recommended</Badge>
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
                      ) : alert.status === "monitoring" ? (
                        <Activity className="h-3 w-3 text-yellow-600 mr-1" />
                      ) : (
                        <AlertCircle className="h-3 w-3 text-red-600 mr-1" />
                      )}
                      <span className="text-xs capitalize">
                        {alert.status === "monitoring" ? "निगरानी | Monitoring" : 
                         alert.status === "resolved" ? "हल | Resolved" : "सक्रिय | Active"}
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

                <button className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-blue-700">भीड़ नियंत्रण | Crowd Control</div>
                      <div className="text-xs text-blue-600">कतार प्रबंधन सक्रिय करें | Activate queue management</div>
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

            {/* Special Features for Dwarka */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <h3 className="text-lg font-bold text-blue-800">समुद्री मौसम | Sea Weather</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">समुद्री हवा | Sea Breeze</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600">अच्छी | Good</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">ज्वार | Tide Level</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-xs text-blue-600">मध्यम | Medium</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">दृश्यता | Visibility</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600">स्पष्ट | Clear</span>
                  </div>
                </div>
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
                  <span className="text-sm">समुद्री निगरानी | Sea Monitoring</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600">सक्रिय | Active</span>
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