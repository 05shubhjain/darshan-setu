import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "./ui/dialog";
import { 
  ArrowLeft, 
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
  Youtube,
  Camera,
  Waves,
  Thermometer,
  Edit,
  Plus,
  Save,
  Calendar,
  Bell,
  Settings,
  Ship
} from "lucide-react";

interface DwarkaPageProps {
  onNavigate: (page: string) => void;
}

export function DwarkaPage({ onNavigate }: DwarkaPageProps) {
  const [isManagementMode, setIsManagementMode] = useState(false);
  const [templeData, setTempleData] = useState({
    name: "श्री द्वारकाधीश मंदिर | Shri Dwarkadhish Temple",
    visitors: 1850,
    capacity: 2200,
    waitTime: "25 min | 25 मिनट",
    status: "busy",
    youtubeId: "w_Ma8oQLmSM",
    totalVisitors: 3200,
    avgWaitTime: 22,
    parkingUtilization: 85,
    safetyScore: 98,
    seaCondition: "good",
    tideLevel: "medium"
  });

  const [emergencyAlerts, setEmergencyAlerts] = useState([
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
  ]);

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

  const handleUpdateData = (field: string, value: any) => {
    setTempleData(prev => ({ ...prev, [field]: value }));
  };

  const addEmergencyAlert = () => {
    const newAlert = {
      id: Date.now(),
      type: "Manual | मैन्युअल",
      location: "द्वारका - नया अलर्ट | Dwarka - New Alert",
      time: "Just now | अभी",
      status: "active"
    };
    setEmergencyAlerts(prev => [newAlert, ...prev]);
  };

  return (
    <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => onNavigate('home')}
              variant="outline"
              size="sm"
              className="border-blue-200 hover:bg-blue-100"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              होम वापस | Back to Home
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-blue-800">{templeData.name}</h1>
              <p className="text-blue-600">समुद्री मंदिर प्रबंधन सिस्टम | Coastal Temple Management System</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">
              <Activity className="h-3 w-3 mr-1" />
              लाइव | Live
            </Badge>
            <Button
              onClick={() => setIsManagementMode(!isManagementMode)}
              variant={isManagementMode ? "default" : "outline"}
              className={isManagementMode ? "bg-blue-600 hover:bg-blue-700" : "border-blue-200 hover:bg-blue-100"}
            >
              <Edit className="h-4 w-4 mr-2" />
              {isManagementMode ? "व्यू मोड | View Mode" : "प्रबंधन मोड | Management Mode"}
            </Button>
          </div>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard">डैशबोर्ड | Dashboard</TabsTrigger>
            <TabsTrigger value="live-stream">लाइव स्ट्रीम | Live Stream</TabsTrigger>
            <TabsTrigger value="crowd-management">भीड़ प्रबंधन | Crowd Management</TabsTrigger>
            <TabsTrigger value="sea-conditions">समुद्री स्थिति | Sea Conditions</TabsTrigger>
            <TabsTrigger value="emergency">आपातकाल | Emergency</TabsTrigger>
            <TabsTrigger value="settings">सेटिंग्स | Settings</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Dashboard */}
              <div className="lg:col-span-2 space-y-6">
                {/* Temple Status */}
                <Card className="shadow-lg border-0">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <h3 className="text-lg font-bold">मंदिर स्थिति | Temple Status</h3>
                    {isManagementMode && (
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3 mr-1" />
                        संपादित करें | Edit
                      </Button>
                    )}
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
                            <div>• कुल दर्शनार्थी | Total Visitors: {templeData.totalVisitors}</div>
                            <div>• औसत प्रतीक्षा | Avg Wait: {templeData.avgWaitTime} min</div>
                            <div>• पार्किंग | Parking: {templeData.parkingUtilization}% full</div>
                            <div>• सुरक्षा स्कोर | Safety: {templeData.safetyScore}%</div>
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
                    <div className="text-2xl font-bold text-blue-600">{templeData.totalVisitors}</div>
                    <div className="text-sm text-gray-600">कुल दर्शनार्थी | Total Visitors</div>
                  </Card>

                  <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-yellow-50 to-orange-50">
                    <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-xl mx-auto mb-3">
                      <TrendingUp className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">{templeData.avgWaitTime} min</div>
                    <div className="text-sm text-gray-600">औसत प्रतीक्षा | Avg Wait</div>
                  </Card>

                  <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-red-50 to-pink-50">
                    <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mx-auto mb-3">
                      <Car className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="text-2xl font-bold text-red-600">{templeData.parkingUtilization}%</div>
                    <div className="text-sm text-gray-600">पार्किंग | Parking</div>
                  </Card>

                  <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mx-auto mb-3">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-600">{templeData.safetyScore}%</div>
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
                  <CardHeader className="flex flex-row items-center justify-between">
                    <h3 className="text-lg font-bold flex items-center">
                      <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
                      आपातकालीन अलर्ट | Emergency Alerts
                    </h3>
                    {isManagementMode && (
                      <Button size="sm" onClick={addEmergencyAlert}>
                        <Plus className="h-3 w-3 mr-1" />
                        नया | Add
                      </Button>
                    )}
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

                {/* Sea Weather Conditions */}
                <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardHeader>
                    <h3 className="text-lg font-bold text-blue-800 flex items-center">
                      <Waves className="h-5 w-5 mr-2" />
                      समुद्री मौसम | Sea Weather
                    </h3>
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
                    <div className="flex items-center justify-between">
                      <span className="text-sm">तापमान | Temperature</span>
                      <div className="flex items-center">
                        <Thermometer className="h-3 w-3 text-orange-600 mr-1" />
                        <span className="text-xs text-orange-600">28°C</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Live Stream Tab */}
          <TabsContent value="live-stream" className="space-y-6">
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
                  {isManagementMode && (
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline">
                        <Camera className="h-3 w-3 mr-1" />
                        कैमरा स्विच | Switch Camera
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="h-3 w-3 mr-1" />
                        स्ट्रीम सेटिंग्स | Stream Settings
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Crowd Management Tab */}
          <TabsContent value="crowd-management" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <h3 className="text-lg font-bold">भीड़ नियंत्रण | Crowd Control</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isManagementMode ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">वर्तमान कैपेसिटी | Current Capacity</label>
                        <input 
                          type="number" 
                          value={templeData.visitors}
                          onChange={(e) => handleUpdateData('visitors', parseInt(e.target.value))}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">अधिकतम कैपेसिटी | Max Capacity</label>
                        <input 
                          type="number" 
                          value={templeData.capacity}
                          onChange={(e) => handleUpdateData('capacity', parseInt(e.target.value))}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">प्रतीक्षा समय | Wait Time (minutes)</label>
                        <input 
                          type="number" 
                          value={templeData.avgWaitTime}
                          onChange={(e) => handleUpdateData('avgWaitTime', parseInt(e.target.value))}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Save className="h-3 w-3 mr-1" />
                        सेव करें | Save Changes
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-center p-6 bg-yellow-50 rounded-lg">
                        <Users className="h-12 w-12 text-yellow-600 mx-auto mb-2" />
                        <h4 className="font-semibold">अधिक भीड़ | High Crowd</h4>
                        <p className="text-sm text-gray-600">वर्तमान में अधिक भीड़ है, वैकल्पिक समय का सुझाव दें</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <h3 className="text-lg font-bold">कतार प्रबंधन | Queue Management</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <span className="text-sm">मुख्य प्रवेश | Main Entry</span>
                      <Badge className="bg-red-100 text-red-700">25 min प्रतीक्षा</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="text-sm">साइड एंट्री | Side Entry</span>
                      <Badge className="bg-yellow-100 text-yellow-700">15 min प्रतीक्षा</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm">VIP एंट्री | VIP Entry</span>
                      <Badge className="bg-green-100 text-green-700">5 min प्रतीक्षा</Badge>
                    </div>
                    {isManagementMode && (
                      <Button className="w-full mt-4" variant="outline">
                        कतार अपडेट करें | Update Queue
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Sea Conditions Tab */}
          <TabsContent value="sea-conditions" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <h3 className="text-lg font-bold flex items-center">
                    <Waves className="h-5 w-5 mr-2 text-blue-600" />
                    समुद्री निगरानी | Sea Monitoring
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isManagementMode ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">समुद्री स्थिति | Sea Condition</label>
                        <select 
                          value={templeData.seaCondition}
                          onChange={(e) => handleUpdateData('seaCondition', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        >
                          <option value="good">अच्छी | Good</option>
                          <option value="moderate">मध्यम | Moderate</option>
                          <option value="rough">खराब | Rough</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">ज्वार स्तर | Tide Level</label>
                        <select 
                          value={templeData.tideLevel}
                          onChange={(e) => handleUpdateData('tideLevel', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        >
                          <option value="low">कम | Low</option>
                          <option value="medium">मध्यम | Medium</option>
                          <option value="high">उच्च | High</option>
                        </select>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Save className="h-3 w-3 mr-1" />
                        समुद्री डेटा सेव करें | Save Sea Data
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <Waves className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-semibold">समुद्री स्थिति अच्छी | Sea Condition Good</h4>
                        <p className="text-sm text-gray-600">दर्शन के लिए उपयुक्त समय | Good time for darshan</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <h3 className="text-lg font-bold">तटीय सुरक्षा | Coastal Safety</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm">तटरक्षक सेवा | Coast Guard</span>
                      <Badge className="bg-green-100 text-green-700">सक्रिय | Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm">लाइफगार्ड | Lifeguards</span>
                      <Badge className="bg-blue-100 text-blue-700">ड्यूटी पर | On Duty</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm">नाव सेवा | Boat Service</span>
                      <Badge className="bg-orange-100 text-orange-700">उपलब्ध | Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm">मौसम चेतावनी | Weather Alert</span>
                      <Badge className="bg-purple-100 text-purple-700">सामान्य | Normal</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Emergency Tab */}
          <TabsContent value="emergency" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <h3 className="text-lg font-bold text-red-600">आपातकालीन कार्य | Emergency Actions</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Phone className="h-4 w-4 mr-2" />
                    आपातकालीन प्रसारण | Emergency Broadcast
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Ship className="h-4 w-4 mr-2" />
                    तटरक्षक सहायता | Coast Guard Assistance
                  </Button>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Waves className="h-4 w-4 mr-2" />
                    समुद्री चेतावनी | Sea Warning
                  </Button>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Users className="h-4 w-4 mr-2" />
                    भीड़ नियंत्रण | Crowd Control
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <h3 className="text-lg font-bold">हेल्पलाइन नंबर | Helpline Numbers</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>मंदिर हेल्पलाइन | Temple:</span>
                      <span>+91-2892-234567</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>तटरक्षक | Coast Guard:</span>
                      <span>1554</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>आपातकाल | Emergency:</span>
                      <span>108</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>चिकित्सा | Medical:</span>
                      <span>102</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>पुलिस | Police:</span>
                      <span>100</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <h3 className="text-lg font-bold">सिस्टम सेटिंग्स | System Settings</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">YouTube स्ट्रीम ID</label>
                    <input 
                      type="text" 
                      value={templeData.youtubeId}
                      onChange={(e) => handleUpdateData('youtubeId', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      readOnly={!isManagementMode}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">मंदिर स्थिति | Temple Status</label>
                    <select 
                      value={templeData.status}
                      onChange={(e) => handleUpdateData('status', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      disabled={!isManagementMode}
                    >
                      <option value="low">कम भीड़ | Low</option>
                      <option value="normal">सामान्य | Normal</option>
                      <option value="busy">व्यस्त | Busy</option>
                      <option value="high">अधिक भीड़ | High</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">समुद्री निगरानी | Sea Monitoring</label>
                    <select 
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      disabled={!isManagementMode}
                    >
                      <option value="enabled">सक्षम | Enabled</option>
                      <option value="disabled">निष्क्रिय | Disabled</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">तटीय अलर्ट | Coastal Alerts</label>
                    <select 
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      disabled={!isManagementMode}
                    >
                      <option value="active">सक्रिय | Active</option>
                      <option value="inactive">निष्क्रिय | Inactive</option>
                    </select>
                  </div>
                </div>
                {isManagementMode && (
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
                    <Save className="h-3 w-3 mr-1" />
                    सभी सेटिंग्स सेव करें | Save All Settings
                  </Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}