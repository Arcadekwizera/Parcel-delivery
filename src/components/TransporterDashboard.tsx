import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Bike, MapPin, Clock, DollarSign, Star, 
  Phone, CheckCircle, XCircle, Navigation,
  TrendingUp, Package
} from "lucide-react";

const TransporterDashboard = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const pendingOrders = [
    {
      id: "SD-001234",
      pickup: "Westlands Mall",
      delivery: "Karen Shopping Centre", 
      distance: "12.5 km",
      earnings: "KSh 450",
      packageType: "Medium",
      timeAgo: "2 min ago",
      client: "Sarah K.",
      fragile: false
    },
    {
      id: "SD-001235", 
      pickup: "CBD - Kimathi Street",
      delivery: "Eastleigh - 1st Avenue",
      distance: "8.2 km", 
      earnings: "KSh 320",
      packageType: "Small",
      timeAgo: "5 min ago",
      client: "John M.",
      fragile: true
    },
    {
      id: "SD-001236",
      pickup: "Gigiri - UN Offices",
      delivery: "Runda - Ridgeways Mall",
      distance: "6.8 km",
      earnings: "KSh 380", 
      packageType: "Medium",
      timeAgo: "8 min ago",
      client: "Mary W.", 
      fragile: false
    }
  ];

  const stats = [
    { label: "Today's Earnings", value: "KSh 2,450", icon: DollarSign, color: "text-success" },
    { label: "Deliveries Completed", value: "12", icon: CheckCircle, color: "text-primary" },
    { label: "Average Rating", value: "4.9", icon: Star, color: "text-yellow-500" },
    { label: "Distance Covered", value: "87.5 km", icon: Navigation, color: "text-purple-500" }
  ];

  return (
    <section id="transporter-dashboard" className="py-20 bg-muted/30">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transporter Dashboard</h2>
          <p className="text-lg text-muted-foreground">
            Manage your deliveries, track earnings, and grow your courier business
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Status & Stats */}
          <div className="space-y-6">
            {/* Online Status */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Driver Status</span>
                  <Badge variant={isOnline ? "default" : "secondary"} className={isOnline ? "bg-success" : ""}>
                    {isOnline ? "Online" : "Offline"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Switch 
                    id="online-status" 
                    checked={isOnline}
                    onCheckedChange={setIsOnline}
                  />
                  <Label htmlFor="online-status">
                    {isOnline ? "Available for deliveries" : "Not accepting orders"}
                  </Label>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Bike className="h-4 w-4" />
                    <span>Honda CB 125F • KDB 123X</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>Last seen: Westlands</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Today's Stats */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Today's Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className={`h-5 w-5 ${stat.color}`} />
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                      </div>
                      <span className="font-semibold">{stat.value}</span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Available Orders */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-primary" />
                    <span>Available Delivery Requests</span>
                  </div>
                  <Badge variant="secondary">{pendingOrders.length} nearby</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isOnline ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Bike className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Go online to start receiving delivery requests</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pendingOrders.map((order) => (
                      <Card 
                        key={order.id}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          selectedOrder === order.id ? 'ring-2 ring-primary' : ''
                        }`}
                        onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">#{order.id}</span>
                                <Badge variant="outline" className="text-xs">
                                  {order.packageType}
                                </Badge>
                                {order.fragile && (
                                  <Badge variant="secondary" className="text-xs bg-warning/10 text-warning">
                                    Fragile
                                  </Badge>
                                )}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Client: {order.client} • {order.timeAgo}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-success">{order.earnings}</div>
                              <div className="text-xs text-muted-foreground">{order.distance}</div>
                            </div>
                          </div>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center space-x-2 text-sm">
                              <div className="h-2 w-2 rounded-full bg-success"></div>
                              <span className="text-muted-foreground">Pickup:</span>
                              <span>{order.pickup}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <div className="h-2 w-2 rounded-full bg-destructive"></div>
                              <span className="text-muted-foreground">Delivery:</span>
                              <span>{order.delivery}</span>
                            </div>
                          </div>

                          {selectedOrder === order.id && (
                            <div className="border-t pt-4 flex space-x-3">
                              <Button variant="success" size="sm" className="flex-1">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Accept Order
                              </Button>
                              <Button variant="outline" size="sm">
                                <Phone className="h-4 w-4 mr-2" />
                                Call Client
                              </Button>
                              <Button variant="outline" size="sm">
                                <XCircle className="h-4 w-4 mr-2" />
                                Decline
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-4 gap-4">
              <Button variant="outline" className="w-full">
                <Clock className="h-4 w-4 mr-2" />
                Order History
              </Button>
              <Button variant="outline" className="w-full">
                <DollarSign className="h-4 w-4 mr-2" />
                Earnings Report
              </Button>
              <Button variant="outline" className="w-full">
                <Star className="h-4 w-4 mr-2" />
                My Ratings
              </Button>
              <Button variant="outline" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransporterDashboard;