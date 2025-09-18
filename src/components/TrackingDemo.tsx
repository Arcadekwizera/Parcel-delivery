import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Package, Clock, Phone, Star, Navigation } from "lucide-react";

const TrackingDemo = () => {
  const trackingSteps = [
    { id: 1, title: "Order Placed", time: "2:15 PM", completed: true },
    { id: 2, title: "Courier Assigned", time: "2:18 PM", completed: true },
    { id: 3, title: "Pickup in Progress", time: "2:45 PM", completed: true },
    { id: 4, title: "Package Collected", time: "3:02 PM", completed: true },
    { id: 5, title: "Out for Delivery", time: "3:05 PM", completed: false, current: true },
    { id: 6, title: "Delivered", time: "Est. 3:25 PM", completed: false },
  ];

  return (
    <section id="tracking-demo" className="py-20">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-Time Package Tracking</h2>
          <p className="text-lg text-muted-foreground">
            Stay informed every step of the way with live GPS tracking and instant updates
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tracking Timeline */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-primary" />
                  <span>Package #SD-2024-001234</span>
                </div>
                <Badge variant="secondary" className="bg-success/10 text-success">
                  In Transit
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">75% Complete</span>
              </div>
              <Progress value={75} className="h-2" />
              
              <div className="space-y-4">
                {trackingSteps.map((step, index) => (
                  <div key={step.id} className="flex items-start space-x-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                      step.completed 
                        ? 'bg-success border-success text-white' 
                        : step.current 
                        ? 'bg-primary border-primary text-white animate-pulse' 
                        : 'bg-background border-muted-foreground/30 text-muted-foreground'
                    }`}>
                      {step.completed ? (
                        <Package className="h-4 w-4" />
                      ) : step.current ? (
                        <Navigation className="h-4 w-4" />
                      ) : (
                        <Clock className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-medium ${step.current ? 'text-primary' : ''}`}>
                          {step.title}
                        </h4>
                        <span className="text-sm text-muted-foreground">{step.time}</span>
                      </div>
                      {step.current && (
                        <p className="text-sm text-muted-foreground">
                          Your courier James is 5 minutes away from delivery location
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Courier Info & Map */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Your Courier</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-primary-hover flex items-center justify-center text-white font-bold text-xl">
                    JM
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">James Mwangi</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.9 Rating • 1,247 Deliveries</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      License: KDB 123X • Motorbike
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Live Map Placeholder */}
            <Card className="shadow-card">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-success/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="text-center space-y-2 relative z-10">
                    <MapPin className="h-12 w-12 text-primary mx-auto animate-bounce" />
                    <div className="font-semibold">Live GPS Tracking</div>
                    <div className="text-sm text-muted-foreground">
                      ETA: 8 minutes • 2.3 km away
                    </div>
                  </div>
                  
                  {/* Mock route line */}
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-0.5 bg-primary/30 transform rotate-45"></div>
                  <div className="absolute top-1/3 right-1/4 w-1/3 h-0.5 bg-primary/30 transform -rotate-12"></div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                Call Support
              </Button>
              <Button variant="secondary" className="w-full">
                Share ETA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingDemo;