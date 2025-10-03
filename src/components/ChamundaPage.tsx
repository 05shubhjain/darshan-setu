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
  TreePine,
  Cable,
  Edit,
  Plus,
  Save,
  Calendar,
  Bell,
  Settings
} from "lucide-react";

interface ChamundaPageProps {
  onNavigate: (page: string) => void;
}

export function ChamundaPage({ onNavigate }: ChamundaPageProps) {
  const [isManagementMode, setIsManagementMode] = useState(false);
  const [templeData, setTempleData] = useState({
    name: "श्री चामुंडा माता मंदिर पावागढ़ | Shri Chamunda Mata Temple Pavagadh",
    visitors: 1120,
    capacity: 1800,
    waitTime: "12 min | 12 मिनट",
    status: "normal",
    youtubeId: "mQApSx7Zcxs",
    totalVisitors: 2890,
    avgWaitTime: 15,
    parkingUtilization: 62,
    safetyScore: 96,
    ropewayUsers: 1850,
    trekkers: 1040,
    ropewayStatus: "operational"
  });

  const [emergencyAlerts, setEmergencyAlerts] = useState([
    { 
      id: 1, 
      type: "Ropeway | रोपवे", 
      location: "पावागढ़ - रोपवे स्टेशन | Pavagadh - Ropeway Station", 
      time: "8 min ago | 8 मिनट पहले", 
      status: "monitoring" 
    },
    { 
      id: 2, 
      type: "Trekking | ट्रेकिंग", 
      location: "पावागढ़ - ट्रेकिंग पथ | Pavagadh - Trekking Path", 
      time: "20 min ago | 20 मिनट पहले", 
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
      location: "चामुंडा माता - नया अलर्ट | Chamunda Mata - New Alert",
      time: "Just now | अभी",
      status: "active"
    };
    setEmergencyAlerts(prev => [newAlert, ...prev]);
  };

  return (
    <section className="py-8 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => onNavigate('home')}
              variant="outline"
              size="sm"
              className="border-green-200 hover:bg-green-100"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              होम वापस | Back to Home
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-green-800">{templeData.name}</h1>
              <p className="text-green-600">रोपवे और ट्रेकिंग प्रबंधन सिस्टम | Ropeway & Trekking Management System</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-green-100 text-green-700 border-green-200">
              <Activity className="h-3 w-3 mr-1" />
              लाइव | Live
            </Badge>
            <Button
              onClick={() => setIsManagementMode(!isManagementMode)}
              variant={isManagementMode ? "default" : "outline"}
              className={isManagementMode ? "bg-green-600 hover:bg-green-700" : "border-green-200 hover:bg-green-100"}
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
            <TabsTrigger value="ropeway">रोपवे | Ropeway</TabsTrigger>
            <TabsTrigger value="trekking">ट्रेकिंग | Trekking</TabsTrigger>
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
                    <div className="bg-green-50 p-6 rounded-lg">
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
                            <div>• कुल दर्शनार्थी | Total Visitors: {templeData.totalVisitors}</div>
                            <div>• रोपवे उपयोगकर्ता | Ropeway Users: {templeData.ropewayUsers}</div>
                            <div>• पैदल यात्री | Trekkers: {templeData.trekkers}</div>
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
                  <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mx-auto mb-3">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-600">{templeData.totalVisitors}</div>
                    <div className="text-sm text-gray-600">कुल दर्शनार्थी | Total Visitors</div>
                  </Card>

                  <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-3">
                      <Cable className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{templeData.ropewayUsers}</div>
                    <div className="text-sm text-gray-600">रोपवे | Ropeway</div>
                  </Card>

                  <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-orange-50 to-red-50">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mx-auto mb-3">
                      <TreePine className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="text-2xl font-bold text-orange-600">{templeData.trekkers}</div>
                    <div className="text-sm text-gray-600">ट्रेकर्स | Trekkers</div>
                  </Card>

                  <Card className="p-4 text-center border-0 shadow-md bg-gradient-to-br from-purple-50 to-violet-50">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-3">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-purple-600">{templeData.safetyScore}%</div>
                    <div className="text-sm text-gray-600">सुरक्षा | Safety</div>
                  </Card>
                </div>

                {/* Ropeway & Trekking Status */}
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <h3 className="text-lg font-bold">रोपवे और ट्रेकिंग स्थिति | Ropeway & Trekking Status</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Cable className="h-4 w-4 mr-2 text-blue-600" />
                          रोपवे सेवा | Ropeway Service
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">ऑपरेशनल स्थिति | Operational Status</span>
                            <Badge className="bg-green-100 text-green-700">चालू | Running</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">प्रतीक्षा समय | Wait Time</span>
                            <span className="text-sm font-medium">8 मिनट | 8 min</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">आज के उपयोगकर्ता | Today's Users</span>
                            <span className="text-sm font-medium">{templeData.ropewayUsers}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <TreePine className="h-4 w-4 mr-2 text-green-600" />
                          ट्रेकिंग पथ | Trekking Path
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span>मुख्य ट्रेकिंग पथ | Main Path</span>
                            <Badge className="bg-green-100 text-green-700">खुला | Open</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>वैकल्पिक पथ | Alternative Path</span>
                            <Badge className="bg-green-100 text-green-700">खुला | Open</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>आज के ट्रेकर्स | Today's Trekkers</span>
                            <span className="text-sm font-medium">{templeData.trekkers}</span>
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

                {/* Adventure Activities Status */}
                <Card className="shadow-lg border-0 bg-gradient-to-br from-emerald-50 to-green-50">
                  <CardHeader>
                    <h3 className="text-lg font-bold text-green-800 flex items-center">
                      <Mountain className="h-5 w-5 mr-2" />
                      एडवेंचर गतिविधियां | Adventure Activities
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">रोपवे सेवा | Ropeway Service</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs text-green-600">चालू | Running</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">ट्रेकिंग गाइड | Trekking Guide</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs text-green-600">उपलब्ध | Available</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">पहाड़ी सुरक्षा | Hill Safety</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs text-green-600">सक्रिय | Active</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">मौसम निगरानी | Weather Monitor</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs text-green-600">चालू | Running</span>
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
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
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
                    title="Chamunda Mata Temple Live Stream"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4 bg-green-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">लाइव स्ट्रीमिंग | Live Streaming</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      दर्शक | Viewers: 3,156
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

          {/* Ropeway Tab */}
          <TabsContent value="ropeway" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <h3 className="text-lg font-bold flex items-center">
                    <Cable className="h-5 w-5 mr-2 text-blue-600" />
                    रोपवे नियंत्रण | Ropeway Control
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isManagementMode ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">रोपवे स्थिति | Ropeway Status</label>
                        <select 
                          value={templeData.ropewayStatus}
                          onChange={(e) => handleUpdateData('ropewayStatus', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        >
                          <option value="operational">चालू | Operational</option>
                          <option value="maintenance">रखरखाव | Maintenance</option>
                          <option value="closed">बंद | Closed</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">दैनिक उपयोगकर्ता | Daily Users</label>
                        <input 
                          type="number" 
                          value={templeData.ropewayUsers}
                          onChange={(e) => handleUpdateData('ropewayUsers', parseInt(e.target.value))}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Save className="h-3 w-3 mr-1" />
                        रोपवे सेटिंग्स सेव करें | Save Ropeway Settings
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <Cable className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-semibold">रोपवे सेवा चालू | Ropeway Service Active</h4>
                        <p className="text-sm text-gray-600">आज {templeData.ropewayUsers} लोगों ने उपयोग किया</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <h3 className="text-lg font-bold">रोपवे आंकड़े | Ropeway Statistics</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm">क्षमता उपयोग | Capacity Usage</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                        <span className="text-xs text-gray-600">70%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm">औसत प्रतीक्षा | Average Wait</span>
                      <span className="text-sm font-medium">8 मिनट | 8 minutes</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm">कुल राउंड ट्रिप | Total Round Trips</span>
                      <span className="text-sm font-medium">247</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Trekking Tab */}
          <TabsContent value="trekking" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <h3 className="text-lg font-bold flex items-center">
                    <TreePine className="h-5 w-5 mr-2 text-green-600" />
                    ट्रेकिंग प्रबंधन | Trekking Management
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isManagementMode ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">दैनिक ट्रेकर्स | Daily Trekkers</label>
                        <input 
                          type="number" 
                          value={templeData.trekkers}
                          onChange={(e) => handleUpdateData('trekkers', parseInt(e.target.value))}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">मुख्य पथ स्थिति | Main Path Status</label>
                        <select className="w-full p-2 border border-gray-300 rounded-lg">
                          <option value="open">खुला | Open</option>
                          <option value="restricted">प्रतिबंधित | Restricted</option>
                          <option value="closed">बंद | Closed</option>
                        </select>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Save className="h-3 w-3 mr-1" />
                        ट्रेकिंग सेटिंग्स सेव करें | Save Trekking Settings
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-center p-6 bg-green-50 rounded-lg">
                        <TreePine className="h-12 w-12 text-green-600 mx-auto mb-2" />
                        <h4 className="font-semibold">ट्रेकिंग पथ खुले | Trekking Paths Open</h4>
                        <p className="text-sm text-gray-600">आज {templeData.trekkers} ट्रेकर्स ने यात्रा की</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <h3 className="text-lg font-bold">ट्रेकिंग सुरक्षा | Trekking Safety</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm">गाइड उपलब्धता | Guide Availability</span>
                      <Badge className="bg-green-100 text-green-700">8 गाइड उपलब्ध | 8 Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm">मौसम स्थिति | Weather Condition</span>
                      <Badge className="bg-blue-100 text-blue-700">अच्छी | Good</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm">पथ कठिनाई | Path Difficulty</span>
                      <Badge className="bg-orange-100 text-orange-700">मध्यम | Moderate</Badge>
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
                    <Cable className="h-4 w-4 mr-2" />
                    रोपवे आपातकालीन स्टॉप | Ropeway Emergency Stop
                  </Button>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <TreePine className="h-4 w-4 mr-2" />
                    ट्रेकिंग सहायता | Trekking Assistance
                  </Button>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Mountain className="h-4 w-4 mr-2" />
                    पहाड़ी बचाव | Hill Rescue
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
                      <span>+91-2678-256789</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>रोपवे हेल्पलाइन | Ropeway:</span>
                      <span>+91-2678-256790</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>ट्रेकिंग गाइड | Trekking:</span>
                      <span>+91-2678-256791</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>आपातकाल | Emergency:</span>
                      <span>108</span>
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
                    <label className="block text-sm font-medium mb-2">रोपवे कैपेसिटी | Ropeway Capacity</label>
                    <input 
                      type="number" 
                      value={100}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      readOnly={!isManagementMode}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">ट्रेकिंग कठिनाई | Trekking Difficulty</label>
                    <select 
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      disabled={!isManagementMode}
                    >
                      <option value="easy">आसान | Easy</option>
                      <option value="moderate">मध्यम | Moderate</option>
                      <option value="difficult">कठिन | Difficult</option>
                    </select>
                  </div>
                </div>
                {isManagementMode && (
                  <Button className="w-full bg-green-600 hover:bg-green-700 mt-4">
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