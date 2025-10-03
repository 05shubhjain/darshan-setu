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
  Mountain,
  Thermometer,
  Edit,
  Plus,
  Save,
  Calendar,
  Bell
} from "lucide-react";

interface AmbajiPageProps {
  onNavigate: (page: string) => void;
}

export function AmbajiPage({ onNavigate }: AmbajiPageProps) {
  const [isManagementMode, setIsManagementMode] = useState(false);
  const [templeData, setTempleData] = useState({
    name: "श्री अम्बाजी माता मंदिर | Shri Ambaji Mata Temple",
    visitors: 680,
    capacity: 1500,
    waitTime: "5 min | 5 मिनट",
    status: "low",
    youtubeId: "jNQXAC9IVRw",
    totalVisitors: 1680,
    avgWaitTime: 8,
    parkingUtilization: 45,
    safetyScore: 100
  });

  const [emergencyAlerts, setEmergencyAlerts] = useState([
    { 
      id: 1, 
      type: "Weather | मौसम", 
      location: "अम्बाजी - पहाड़ी क्षेत्र | Ambaji - Hill Area", 
      time: "10 min ago | 10 मिनट पहले", 
      status: "monitoring" 
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
      location: "अम्बाजी - नया अलर्ट | Ambaji - New Alert",
      time: "Just now | अभी",
      status: "active"
    };
    setEmergencyAlerts(prev => [newAlert, ...prev]);
  };

  return (
    <section className="py-8 bg-gradient-to-br from-red-50 to-pink-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => onNavigate('home')}
              variant="outline"
              size="sm"
              className="border-red-200 hover:bg-red-100"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              होम वापस | Back to Home
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-red-800">{templeData.name}</h1>
              <p className="text-red-600">पूर्ण प्रबंधन सिस्टम | Complete Management System</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-red-100 text-red-700 border-red-200">
              <Activity className="h-3 w-3 mr-1" />
              लाइव | Live
            </Badge>
            <Button
              onClick={() => setIsManagementMode(!isManagementMode)}
              variant={isManagementMode ? "default" : "outline"}
              className={isManagementMode ? "bg-red-600 hover:bg-red-700" : "border-red-200 hover:bg-red-100"}
            >
              <Edit className="h-4 w-4 mr-2" />
              {isManagementMode ? "व्यू मोड | View Mode" : "प्रबंधन मोड | Management Mode"}
            </Button>
          </div>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">डैशबोर्ड | Dashboard</TabsTrigger>
            <TabsTrigger value="live-stream">लाइव स्ट्रीम | Live Stream</TabsTrigger>
            <TabsTrigger value="crowd-management">भीड़ प्रबंधन | Crowd Management</TabsTrigger>
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
                    <div className="bg-red-50 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-lg">{templeData.name}</h4>
                        <Badge className={getStatusColor(templeData.status)}>
                          {templeData.status === "low" ? "कम भीड़ | Low Crowd" : templeData.status}
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
                  <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-red-50 to-pink-50">
                    <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mx-auto mb-3">
                      <Users className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="text-2xl font-bold text-red-600">{templeData.totalVisitors}</div>
                    <div className="text-sm text-gray-600">कुल दर्शनार्थी | Total Visitors</div>
                  </Card>

                  <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mx-auto mb-3">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-600">{templeData.avgWaitTime} min</div>
                    <div className="text-sm text-gray-600">औसत प्रतीक्षा | Avg Wait</div>
                  </Card>

                  <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-3">
                      <Car className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{templeData.parkingUtilization}%</div>
                    <div className="text-sm text-gray-600">पार्किंग | Parking</div>
                  </Card>

                  <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-purple-50 to-violet-50">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-3">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-purple-600">{templeData.safetyScore}%</div>
                    <div className="text-sm text-gray-600">सुरक्षा | Safety</div>
                  </Card>
                </div>
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
                    {emergencyAlerts.length > 0 ? emergencyAlerts.map((alert) => (
                      <div key={alert.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={getAlertColor(alert.status)}>
                            {alert.type}
                          </Badge>
                          <span className="text-xs text-gray-500">{alert.time}</span>
                        </div>
                        <p className="text-sm font-medium">{alert.location}</p>
                        <div className="flex items-center mt-2">
                          <Activity className="h-3 w-3 text-yellow-600 mr-1" />
                          <span className="text-xs capitalize">निगरानी | Monitoring</span>
                        </div>
                      </div>
                    )) : (
                      <div className="p-3 bg-green-50 rounded-lg text-center">
                        <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                        <p className="text-sm text-green-700">कोई आपातकालीन अलर्ट नहीं | No Emergency Alerts</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Hill Weather Conditions */}
                <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-indigo-50">
                  <CardHeader>
                    <h3 className="text-lg font-bold text-purple-800 flex items-center">
                      <Mountain className="h-5 w-5 mr-2" />
                      पहाड़ी मौसम | Hill Weather
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">तापमान | Temperature</span>
                      <div className="flex items-center">
                        <Thermometer className="h-3 w-3 text-blue-600 mr-1" />
                        <span className="text-xs text-blue-600">24°C</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">हवा की गति | Wind Speed</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs text-green-600">हल्की | Light</span>
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
                      <span className="text-sm">वर्षा | Rainfall</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs text-green-600">नहीं | None</span>
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
              <CardHeader className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
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
                    title="Ambaji Temple Live Stream"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4 bg-red-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">लाइव स्ट्रीमिंग | Live Streaming</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      दर्शक | Viewers: 1,892
                    </div>
                  </div>
                  {isManagementMode && (
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline">
                        <Camera className="h-3 w-3 mr-1" />
                        कैमरा स्विच | Switch Camera
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3 mr-1" />
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
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        <Save className="h-3 w-3 mr-1" />
                        सेव करें | Save Changes
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-center p-6 bg-green-50 rounded-lg">
                        <Users className="h-12 w-12 text-green-600 mx-auto mb-2" />
                        <h4 className="font-semibold">भीड़ स्थिति अच्छी | Crowd Situation Good</h4>
                        <p className="text-sm text-gray-600">वर्तमान में कम भीड़ है | Currently low crowd</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <h3 className="text-lg font-bold">पार्किंग प्रबंधन | Parking Management</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">मुख्य पार्किंग | Main Parking</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                        <span className="text-xs text-gray-600">110 spots</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">पहाड़ी पार्किंग | Hill Parking</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                        <span className="text-xs text-gray-600">70 spots</span>
                      </div>
                    </div>
                    {isManagementMode && (
                      <Button className="w-full mt-4" variant="outline">
                        पार्किंग अपडेट करें | Update Parking
                      </Button>
                    )}
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
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Bell className="h-4 w-4 mr-2" />
                    चिकित्सा सहायता | Medical Assistance
                  </Button>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    <Mountain className="h-4 w-4 mr-2" />
                    पहाड़ी सुरक्षा | Hill Safety Alert
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
                      <span>+91-2749-245678</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>आपातकाल | Emergency:</span>
                      <span>108</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>पुलिस | Police:</span>
                      <span>100</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>चिकित्सा | Medical:</span>
                      <span>102</span>
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
                </div>
                {isManagementMode && (
                  <Button className="w-full bg-red-600 hover:bg-red-700 mt-4">
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