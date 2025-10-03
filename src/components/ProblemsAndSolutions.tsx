import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Users, 
  Shield, 
  Car, 
  MessageSquare, 
  Brain, 
  Heart,
  Clock,
  AlertTriangle,
  Navigation,
  Smartphone,
  BarChart3,
  Accessibility
} from "lucide-react";

interface Problem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  color: string;
  bgColor: string;
  benefits: string[];
}

const problems: Problem[] = [
  {
    id: "queue-management",
    title: "Overcrowding & Queue Management",
    icon: <Users className="h-8 w-8" />,
    description: "Eliminate long waiting times and bottlenecks with intelligent crowd management systems.",
    challenges: [
      "Long waiting times during peak hours",
      "Lack of real-time queue visibility",
      "Bottlenecks during entry/exit",
      "Uneven distribution of crowds"
    ],
    solutions: [
      "AI-powered crowd prediction algorithms",
      "Real-time queue monitoring and alerts",
      "Dynamic entry/exit management",
      "Smart slot booking system"
    ],
    features: [
      "Live wait time updates",
      "Crowd density heatmaps",
      "Automated queue routing",
      "Peak hour predictions"
    ],
    color: "text-blue-600",
    bgColor: "from-blue-50 to-indigo-50",
    benefits: [
      "Reduced wait times by 60%",
      "Improved visitor satisfaction",
      "Better crowd distribution"
    ]
  },
  {
    id: "safety-emergency",
    title: "Safety & Emergency Response",
    icon: <Shield className="h-8 w-8" />,
    description: "Advanced safety monitoring and rapid emergency response systems to protect pilgrims.",
    challenges: [
      "Risk of stampedes during festivals",
      "Medical emergencies in crowds",
      "Insufficient early warning mechanisms",
      "Slow emergency response times"
    ],
    solutions: [
      "Real-time crowd density monitoring",
      "Automated emergency alert systems",
      "Medical assistance deployment",
      "Evacuation route optimization"
    ],
    features: [
      "Emergency broadcast system",
      "Medical support tracking",
      "Stampede prevention alerts",
      "Emergency evacuation plans"
    ],
    color: "text-red-600",
    bgColor: "from-red-50 to-pink-50",
    benefits: [
      "Zero safety incidents",
      "Faster emergency response",
      "Enhanced pilgrim safety"
    ]
  },
  {
    id: "traffic-mobility",
    title: "Traffic & Mobility Challenges",
    icon: <Car className="h-8 w-8" />,
    description: "Smart traffic management and optimized vehicle flow for seamless temple access.",
    challenges: [
      "Congested approach roads",
      "Parking space shortages",
      "Inefficient vehicle flow",
      "Poor traffic coordination"
    ],
    solutions: [
      "Dynamic traffic routing systems",
      "Smart parking management",
      "Real-time traffic monitoring",
      "Coordinated vehicle flow control"
    ],
    features: [
      "GPS-based parking guidance",
      "Traffic flow optimization",
      "Alternative route suggestions",
      "Public transport integration"
    ],
    color: "text-green-600",
    bgColor: "from-green-50 to-emerald-50",
    benefits: [
      "40% reduction in traffic congestion",
      "Efficient parking utilization",
      "Smoother vehicle flow"
    ]
  },
  {
    id: "pilgrim-communication",
    title: "Pilgrim Guidance & Communication",
    icon: <MessageSquare className="h-8 w-8" />,
    description: "Digital communication tools providing real-time updates and guidance to pilgrims.",
    challenges: [
      "Limited digital information access",
      "No real-time updates on temple status",
      "Poor communication during emergencies",
      "Language barriers for diverse pilgrims"
    ],
    solutions: [
      "Multi-language mobile application",
      "Real-time notification system",
      "Digital information kiosks",
      "Voice-based guidance systems"
    ],
    features: [
      "Live temple status updates",
      "Multi-language support",
      "Audio tour guides",
      "Emergency communication"
    ],
    color: "text-purple-600",
    bgColor: "from-purple-50 to-violet-50",
    benefits: [
      "Enhanced pilgrim experience",
      "Better information accessibility",
      "Reduced confusion and queries"
    ]
  },
  {
    id: "resource-optimization",
    title: "Resource Optimization",
    icon: <Brain className="h-8 w-8" />,
    description: "AI-driven predictive analytics for optimal resource allocation and staff deployment.",
    challenges: [
      "Unpredictable crowd patterns",
      "Inefficient staff deployment",
      "Resource wastage during low traffic",
      "Manual crowd estimation methods"
    ],
    solutions: [
      "Predictive crowd analytics",
      "Automated staff scheduling",
      "Resource demand forecasting",
      "Performance optimization algorithms"
    ],
    features: [
      "AI crowd prediction models",
      "Dynamic staff allocation",
      "Resource utilization tracking",
      "Performance analytics dashboard"
    ],
    color: "text-orange-600",
    bgColor: "from-orange-50 to-yellow-50",
    benefits: [
      "30% improvement in resource efficiency",
      "Optimal staff deployment",
      "Cost-effective operations"
    ]
  },
  {
    id: "inclusivity-accessibility",
    title: "Inclusivity & Accessibility",
    icon: <Heart className="h-8 w-8" />,
    description: "Comprehensive accessibility solutions for elderly, differently-abled, and special needs pilgrims.",
    challenges: [
      "Limited accessibility for elderly",
      "Inadequate facilities for differently-abled",
      "No special provisions for children",
      "Gender-specific safety concerns"
    ],
    solutions: [
      "Accessibility-focused infrastructure",
      "Special assistance programs",
      "Priority queue systems",
      "Dedicated support services"
    ],
    features: [
      "Wheelchair accessibility paths",
      "Priority darshan slots",
      "Special assistance booking",
      "Family-friendly facilities"
    ],
    color: "text-pink-600",
    bgColor: "from-pink-50 to-rose-50",
    benefits: [
      "100% accessible facilities",
      "Enhanced inclusivity",
      "Better support for special needs"
    ]
  }
];

export function ProblemsAndSolutions() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
            Smart Solutions
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Addressing <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Temple Challenges</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive temple management system tackles every aspect of modern pilgrimage challenges 
            while preserving the sanctity and traditions of sacred spaces.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="space-y-16">
          {problems.map((problem, index) => (
            <div key={problem.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="space-y-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.bgColor} ${problem.color}`}>
                    {problem.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{problem.title}</h3>
                  <p className="text-lg text-gray-600">{problem.description}</p>
                </div>

                {/* Challenges */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-600 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Current Challenges
                  </h4>
                  <ul className="space-y-2">
                    {problem.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-600">
                        <span className="text-red-500 mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-600 flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Our Solutions
                  </h4>
                  <ul className="space-y-2">
                    {problem.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-600">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h5 className="font-semibold text-orange-600 mb-2">Key Benefits</h5>
                  <div className="grid grid-cols-1 gap-2">
                    {problem.benefits.map((benefit, idx) => (
                      <div key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <Button className={`${problem.color} border-current`} variant="outline">
                  Learn More About This Solution
                </Button>
              </div>

              {/* Features Card */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <Card className={`bg-gradient-to-br ${problem.bgColor} border-0 shadow-lg`}>
                  <CardHeader>
                    <h4 className="font-bold text-lg">Key Features</h4>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-3">
                      {problem.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 bg-white/50 p-3 rounded-lg">
                          <div className={`w-2 h-2 rounded-full ${problem.color.replace('text-', 'bg-')}`}></div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className={`text-lg font-bold ${problem.color}`}>24/7</div>
                          <div className="text-xs text-gray-600">Monitoring</div>
                        </div>
                        <div>
                          <div className={`text-lg font-bold ${problem.color}`}>Real-time</div>
                          <div className="text-xs text-gray-600">Updates</div>
                        </div>
                        <div>
                          <div className={`text-lg font-bold ${problem.color}`}>Smart</div>
                          <div className="text-xs text-gray-600">Analytics</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Temple Experience?</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Join thousands of pilgrims already benefiting from our smart temple management solutions. 
            Experience the perfect blend of tradition and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}