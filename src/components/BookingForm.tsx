import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { MapPin, Package, Clock, CreditCard, Bike, Car } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [isFragile, setIsFragile] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Submitted!",
      description: "We're finding the best courier for your delivery. You'll be notified shortly.",
    });
  };

  const calculatePrice = (packageSize: string, distance: number = 5) => {
    const basePrices = {
      small: 150,
      medium: 250,
      large: 400,
      extra: 600
    };
    const price = basePrices[packageSize as keyof typeof basePrices] || 150;
    setEstimatedPrice(price + (distance * 20));
  };

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Delivery</h2>
          <p className="text-lg text-muted-foreground">
            Simple, fast, and transparent pricing for all your delivery needs
          </p>
        </div>

        <Card className="shadow-float">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-primary" />
              <span>Package Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Package Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="description">Package Description (Optional)</Label>
                  <Textarea 
                    id="description" 
                    placeholder="What are you sending? (e.g., Documents, Electronics, Food)"
                    className="min-h-[80px]" 
                  />
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" type="number" placeholder="2.5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">Package Size</Label>
                    <Select onValueChange={(value) => calculatePrice(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (Up to 2kg) - Documents, Phone</SelectItem>
                        <SelectItem value="medium">Medium (2-10kg) - Electronics, Clothes</SelectItem>
                        <SelectItem value="large">Large (10-25kg) - Appliances, Boxes</SelectItem>
                        <SelectItem value="extra">Extra Large (25kg+) - Furniture</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Fragile Toggle */}
              <div className="flex items-center space-x-3 p-4 rounded-lg border">
                <Switch 
                  id="fragile" 
                  checked={isFragile}
                  onCheckedChange={setIsFragile}
                />
                <Label htmlFor="fragile" className="flex items-center space-x-2">
                  <span>Fragile Item - Handle with Extra Care</span>
                  {isFragile && <Badge variant="secondary">+$50</Badge>}
                </Label>
              </div>

              {/* Addresses */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="pickup" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-success" />
                    <span>Pickup Address</span>
                  </Label>
                  <Input id="pickup" placeholder="Enter pickup location" />
                  <Button variant="outline" size="sm" type="button">
                    Use Current Location
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="delivery" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-destructive" />
                    <span>Delivery Address</span>
                  </Label>
                  <Input id="delivery" placeholder="Enter delivery location" />
                </div>
              </div>

              {/* Pickup Time */}
              <div className="space-y-2">
                <Label className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Pickup Time</span>
                </Label>
                <Select>
                  <SelectTrigger className="md:w-1/2">
                    <SelectValue placeholder="When do you need pickup?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="now">Now (ASAP)</SelectItem>
                    <SelectItem value="30min">30 minutes</SelectItem>
                    <SelectItem value="1hour">1 hour</SelectItem>
                    <SelectItem value="2hours">2 hours</SelectItem>
                    <SelectItem value="schedule">Schedule for later</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Vehicle Selection */}
              <div className="space-y-4">
                <Label>Recommended Vehicle Type</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className={`cursor-pointer transition-all hover:shadow-md ${selectedVehicle === 'bike' ? 'ring-2 ring-primary' : ''}`}>
                    <CardContent className="p-4" onClick={() => setSelectedVehicle('bike')}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Bike className="h-8 w-8 text-primary" />
                          <div>
                            <div className="font-semibold">Motorbike</div>
                            <div className="text-sm text-muted-foreground">Small to medium packages</div>
                          </div>
                        </div>
                        <Badge variant="secondary">Fastest</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className={`cursor-pointer transition-all hover:shadow-md ${selectedVehicle === 'car' ? 'ring-2 ring-primary' : ''}`}>
                    <CardContent className="p-4" onClick={() => setSelectedVehicle('car')}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Car className="h-8 w-8 text-primary" />
                          <div>
                            <div className="font-semibold">Light Vehicle</div>
                            <div className="text-sm text-muted-foreground">Large packages & bulk items</div>
                          </div>
                        </div>
                        <Badge variant="secondary">More Space</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Price Estimate */}
              {estimatedPrice > 0 && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Estimated Price</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          KSh {estimatedPrice.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Including all fees
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Book Delivery - Find Available Couriers
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;