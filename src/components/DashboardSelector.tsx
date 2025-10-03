import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Users, 
  Clock, 
  Activity,
  MapPin,
  Mountain,
  Waves,
  TreePine,
  Cable
} from "lucide-react";

interface DashboardSelectorProps {
  onSelectTemple: (temple: string) => void;
}

export function DashboardSelector({ onSelectTemple }: DashboardSelectorProps) {
  const temples = [
    {
      id: "somnath",
      name: "श्री सोमनाथ मंदिर",
      englishName: "Shri Somnath Temple",
      location: "सोमनाथ, गुजरात | Somnath, Gujarat",
      visitors: 1240,
      capacity: 2000,
      waitTime: "15 min | 15 मिनट",
      status: "normal",
      statusText: "सामान्य | Normal",
      icon: Waves,
      color: "orange",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-800",
      badgeColor: "bg-orange-100 text-orange-700",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      specialFeatures: ["समुद्री तट | Beach Location", "ज्योतिर्लिंग | Jyotirlinga"]
    },
    {
      id: "dwarka",
      name: "श्री द्वारकाधीश मंदिर",
      englishName: "Shri Dwarkadhish Temple",
      location: "द्वारका, गुजरात | Dwarka, Gujarat",
      visitors: 1850,
      capacity: 2200,
      waitTime: "25 min | 25 मिनट",
      status: "busy",
      statusText: "व्यस्त | Busy",
      icon: Waves,
      color: "blue",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
      badgeColor: "bg-blue-100 text-blue-700",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      specialFeatures: ["समुद्री शहर | Coastal City", "कृष्ण धाम | Krishna Dham"]
    },
    {
      id: "ambaji",
      name: "श्री अम्बाजी माता मंदिर",
      englishName: "Shri Ambaji Mata Temple",
      location: "अम्बाजी, गुजरात | Ambaji, Gujarat",
      visitors: 680,
      capacity: 1500,
      waitTime: "5 min | 5 मिनट",
      status: "low",
      statusText: "कम भीड़ | Low Crowd",
      icon: Mountain,
      color: "red",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      badgeColor: "bg-red-100 text-red-700",
      buttonColor: "bg-red-600 hover:bg-red-700",
      specialFeatures: ["पहाड़ी क्षेत्र | Hill Area", "शक्तिपीठ | Shakti Peeth"]
    },
    {
      id: "pavagadh",
      name: "श्री चामुंडा माता मंदिर",
      englishName: "Shri Chamunda Mata Temple",
      location: "पावागढ़, गुजरात | Pavagadh, Gujarat",
      visitors: 1120,
      capacity: 1800,
      waitTime: "12 min | 12 मिनट",
      status: "normal",
      statusText: "सामान्य | Normal",
      icon: Cable,
      color: "green",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      badgeColor: "bg-green-100 text-green-700",
      buttonColor: "bg-green-600 hover:bg-green-700",
      specialFeatures: ["रोपवे सेवा | Ropeway Service", "ट्रेकिंग | Trekking"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "low": return "text-green-600 bg-green-100";
      case "normal": return "text-blue-600 bg-blue-100";
      case "busy": return "text-yellow-600 bg-yellow-100";
      case "high": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
            मंदिर डैशबोर्ड | Temple Dashboards
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            लाइव <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">मंदिर नियंत्रण</span>
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Temple Control</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            प्रत्येक मंदिर के लिए अलग डैशबोर्ड के साथ वास्तविक समय में सभी मंदिर गतिविधियों की निगरानी करें।
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mt-2">
            Monitor all temple activities in real-time with separate dashboards for each temple.
          </p>
        </div>

        {/* Temple Dashboard Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {temples.map((temple) => {
            const IconComponent = temple.icon;
            return (
              <Card key={temple.id} className={`shadow-lg border-0 bg-gradient-to-br ${temple.bgColor} overflow-hidden hover:shadow-xl transition-all duration-300`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl bg-white shadow-sm`}>
                        <IconComponent className={`h-6 w-6 ${temple.textColor}`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${temple.textColor}`}>{temple.name}</h3>
                        <p className={`text-lg font-semibold ${temple.textColor} opacity-80`}>{temple.englishName}</p>
                        <p className="text-sm text-gray-600 flex items-center mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {temple.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge className="bg-white text-gray-700 border border-gray-200">
                        <Activity className="h-3 w-3 mr-1" />
                        लाइव | Live
                      </Badge>
                      <Badge className={getStatusColor(temple.status)}>
                        {temple.statusText}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Live Stats */}
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <Users className="h-4 w-4 text-gray-600 mr-1" />
                        </div>
                        <div className="text-lg font-bold text-gray-800">{temple.visitors}</div>
                        <div className="text-xs text-gray-600">दर्शनार्थी | Visitors</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <Clock className="h-4 w-4 text-gray-600 mr-1" />
                        </div>
                        <div className="text-lg font-bold text-gray-800">{temple.waitTime.split(' | ')[0]}</div>
                        <div className="text-xs text-gray-600">प्रतीक्षा | Wait Time</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-800">
                          {Math.round((temple.visitors / temple.capacity) * 100)}%
                        </div>
                        <div className="text-xs text-gray-600">कैपेसिटी | Capacity</div>
                      </div>
                    </div>
                  </div>

                  {/* Special Features */}
                  <div className="bg-white/40 backdrop-blur-sm p-3 rounded-lg">
                    <div className="text-sm font-medium text-gray-700 mb-2">विशेषताएं | Special Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {temple.specialFeatures.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-white/80 text-gray-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    onClick={() => onSelectTemple(temple.id)}
                    className={`w-full ${temple.buttonColor} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    size="lg"
                  >
                    डैशबोर्ड खोलें | Open Dashboard
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              व्यापक मंदिर प्रबंधन | Comprehensive Temple Management
            </h3>
            <p className="text-gray-600 mb-6">
              प्रत्येक मंदिर के लिए अनुकूलित डैशबोर्ड के साथ, आप वास्तविक समय में भीड़ की निगरानी, 
              सुरक्षा प्रबंधन, यातायात नियंत्रण, और आपातकालीन प्रतिक्रिया को संभाल सकते हैं।
            </p>
            <p className="text-gray-500 text-sm">
              With customized dashboards for each temple, you can manage real-time crowd monitoring, 
              safety management, traffic control, and emergency response.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">4</div>
                <div className="text-sm text-gray-600">मंदिर | Temples</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">निगरानी | Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">सुरक्षा | Safety</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">लाइव | Live</div>
                <div className="text-sm text-gray-600">स्ट्रीमिंग | Streaming</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}