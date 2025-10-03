import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "./ui/dialog";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Users, 
  Eye, 
  Heart,
  Share2,
  Camera,
  Wifi,
  Clock
} from "lucide-react";

interface LiveStream {
  id: string;
  temple: string;
  title: string;
  location: string;
  isLive: boolean;
  viewers: number;
  quality: "HD" | "4K" | "SD";
  thumbnailUrl: string;
  streamUrl: string;
  description: string;
  nextDarshan: string;
  languages: string[];
}

const liveStreams: LiveStream[] = [
  {
    id: "somnath",
    temple: "Somnath Temple",
    title: "Somnath Jyotirlinga Live Darshan",
    location: "Veraval, Gujarat",
    isLive: true,
    viewers: 12450,
    quality: "4K",
    thumbnailUrl: "https://images.unsplash.com/photo-1696239108459-5f1356d00e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb21uYXRoJTIwdGVtcGxlJTIwZ3VqYXJhdCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTkzOTQwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    streamUrl: "https://example.com/somnath-live",
    description: "Experience the divine aura of the first Jyotirlinga with continuous live darshan",
    nextDarshan: "Evening Aarti at 7:00 PM",
    languages: ["Hindi", "Gujarati", "English"]
  },
  {
    id: "dwarka",
    temple: "Dwarkadhish Temple",
    title: "Dwarkadhish Krishna Live Darshan",
    location: "Dwarka, Gujarat",
    isLive: true,
    viewers: 18230,
    quality: "HD",
    thumbnailUrl: "https://images.unsplash.com/photo-1711547979445-a72c87dfd004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkd2Fya2ElMjB0ZW1wbGUlMjBrcmlzaG5hJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1OTM5NDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    streamUrl: "https://example.com/dwarka-live",
    description: "Live from the sacred Char Dham, witness the divine beauty of Lord Krishna",
    nextDarshan: "Mangala Aarti at 6:30 AM",
    languages: ["Hindi", "Gujarati", "Sanskrit"]
  },
  {
    id: "ambaji",
    temple: "Ambaji Temple",
    title: "Ambaji Mata Live Darshan",
    location: "Banaskantha, Gujarat",
    isLive: false,
    viewers: 0,
    quality: "HD",
    thumbnailUrl: "https://images.unsplash.com/photo-1696239108459-5f1356d00e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWJhamklMjB0ZW1wbGUlMjBndWphcmF0fGVufDF8fHx8MTc1OTM5NDA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    streamUrl: "https://example.com/ambaji-live",
    description: "Sacred Shakti Peetha dedicated to Goddess Amba",
    nextDarshan: "Starts at 5:00 AM",
    languages: ["Hindi", "Gujarati"]
  },
  {
    id: "pavagadh",
    temple: "Kalika Mata Temple",
    title: "Pavagadh Kalika Mata Live Darshan",
    location: "Pavagadh, Gujarat",
    isLive: true,
    viewers: 8670,
    quality: "HD",
    thumbnailUrl: "https://images.unsplash.com/photo-1730021155304-9ff1f0f33b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXZhZ2FkaCUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTkzOTQwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    streamUrl: "https://example.com/pavagadh-live",
    description: "UNESCO World Heritage site atop Pavagadh hill",
    nextDarshan: "Noon Aarti at 12:00 PM",
    languages: ["Hindi", "Gujarati"]
  }
];

function LiveVideoPlayer({ stream }: { stream: LiveStream }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
      {/* Video/Image */}
      <img 
        src={stream.thumbnailUrl} 
        alt={stream.title}
        className="w-full h-full object-cover"
      />
      
      {/* Live Badge */}
      {stream.isLive && (
        <div className="absolute top-4 left-4">
          <Badge className="bg-red-600 text-white animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            LIVE
          </Badge>
        </div>
      )}

      {/* Quality Badge */}
      <div className="absolute top-4 right-4">
        <Badge className="bg-black/50 text-white">
          {stream.quality}
        </Badge>
      </div>

      {/* Viewer Count */}
      <div className="absolute bottom-20 left-4 flex items-center space-x-2 text-white text-sm">
        <Eye className="h-4 w-4" />
        <span>{stream.viewers.toLocaleString()} watching</span>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              <Heart className="h-4 w-4" />
            </Button>
            
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              <Share2 className="h-4 w-4" />
            </Button>
            
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              <Maximize className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Offline Overlay */}
      {!stream.isLive && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white">
            <Camera className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <h3 className="font-semibold mb-2">Stream Offline</h3>
            <p className="text-sm opacity-75">{stream.nextDarshan}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export function LiveVideoStreaming() {
  const [selectedStream, setSelectedStream] = useState<LiveStream | null>(null);

  return (
    <section id="live-streams" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-red-100 text-red-700 border-red-200 mb-4">
            <Wifi className="h-3 w-3 mr-1" />
            Live Streaming
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Temple Darshan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience divine darshan from anywhere in the world with our high-quality live streaming 
            directly from the sanctum sanctorum of Gujarat's most sacred temples.
          </p>
        </div>

        {/* Live Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 bg-white/50 backdrop-blur-sm border-0 shadow-lg">
            <div className="text-2xl font-bold text-red-600 mb-2">
              {liveStreams.filter(s => s.isLive).length}
            </div>
            <div className="text-sm text-gray-600">Live Now</div>
          </Card>
          
          <Card className="text-center p-6 bg-white/50 backdrop-blur-sm border-0 shadow-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">
              {liveStreams.reduce((sum, s) => sum + s.viewers, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Total Viewers</div>
          </Card>
          
          <Card className="text-center p-6 bg-white/50 backdrop-blur-sm border-0 shadow-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">4K</div>
            <div className="text-sm text-gray-600">Ultra HD Quality</div>
          </Card>
          
          <Card className="text-center p-6 bg-white/50 backdrop-blur-sm border-0 shadow-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Available</div>
          </Card>
        </div>

        {/* Live Streams Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {liveStreams.map((stream) => (
            <Card key={stream.id} className="overflow-hidden shadow-xl border-0 bg-white">
              <div className="relative">
                <LiveVideoPlayer stream={stream} />
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{stream.title}</CardTitle>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <Users className="h-4 w-4 mr-1" />
                      {stream.location}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {stream.isLive ? (
                      <Badge className="bg-green-100 text-green-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                        Live
                      </Badge>
                    ) : (
                      <Badge variant="secondary">Offline</Badge>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{stream.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Next Darshan */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{stream.nextDarshan}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>{stream.viewers.toLocaleString()}</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap gap-2">
                  {stream.languages.map((lang, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                        onClick={() => setSelectedStream(stream)}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Watch Full Screen
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl h-[80vh]">
                      <DialogHeader>
                        <DialogTitle>{stream.title}</DialogTitle>
                        <DialogDescription>
                          Watch high-quality live darshan streaming from {stream.temple}.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex-1">
                        <LiveVideoPlayer stream={stream} />
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" className="border-orange-300 text-orange-600">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center bg-white/50 backdrop-blur-sm border-0 shadow-lg">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Camera className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="font-bold mb-2">4K Ultra HD</h3>
            <p className="text-sm text-gray-600">
              Crystal clear video quality with multiple camera angles for the best darshan experience
            </p>
          </Card>

          <Card className="p-6 text-center bg-white/50 backdrop-blur-sm border-0 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Wifi className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-bold mb-2">24/7 Streaming</h3>
            <p className="text-sm text-gray-600">
              Continuous live streaming with minimal downtime and buffer-free experience
            </p>
          </Card>

          <Card className="p-6 text-center bg-white/50 backdrop-blur-sm border-0 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">Multi-Language</h3>
            <p className="text-sm text-gray-600">
              Audio commentary and captions available in Hindi, Gujarati, English, and Sanskrit
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}