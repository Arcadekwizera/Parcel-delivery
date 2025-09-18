import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bike, Car, Package, Clock, Shield, 
  Smartphone, CreditCard, HeadphonesIcon 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bike,
      title: "Motorbike Delivery",
      description: "Perfect for documents, small packages, and urgent deliveries across the city",
      features: ["Under 5kg", "30min pickup", "Traffic-free routes"],
      price: "From KSh 150",
      color: "text-primary"
    },
    {
      icon: Car,
      title: "Light Vehicle Delivery", 
      description: "Ideal for larger packages, bulk items, and fragile goods requiring extra care",
      features: ["Up to 50kg", "Secure handling", "Door-to-door service"],
      price: "From KSh 300",
      color: "text-success"
    },
    {
      icon: Package,
      title: "Same-Day Delivery",
      description: "Get your packages delivered within hours, not days, anywhere in the city",
      features: ["3-8 hour delivery", "Live tracking", "Proof of delivery"],
      price: "From KSh 200",
      color: "text-warning"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Track your package from pickup to delivery with live GPS updates"
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "All packages are insured up to KSh 50,000 for your peace of mind"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Book, track, and manage all your deliveries from our mobile app"
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      description: "Pay with cash, M-Pesa, Airtel Money, or card - whatever works for you"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Our customer support team is available round the clock to help you"
    },
    {
      icon: Package,
      title: "Proof of Delivery",
      description: "Get photo confirmation and digital receipts for every delivery"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4 max-w-7xl mx-auto">
        {/* Service Types */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Delivery Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect delivery option for your needs - from quick document drops to large package transfers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-float transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full bg-background mx-auto mb-4 group-hover:scale-110 transition-transform ${service.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {service.price}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center justify-center space-x-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose SwiftDeliver?</h3>
          <p className="text-muted-foreground">
            We're committed to providing the best delivery experience in the city
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;