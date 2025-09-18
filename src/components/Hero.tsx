import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Package } from "lucide-react";
import heroImage from "@/assets/delivery-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fast delivery service with motorbike courier" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>
      
      <div className="container relative z-10 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Fast & Reliable
                <span className="block gradient-hero bg-clip-text text-transparent">
                  Package Delivery
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Send packages across the city with our network of trusted motorbike couriers and light vehicle drivers. Track in real-time, pay securely.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Book Delivery Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Track Package
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
                  <Clock className="h-6 w-6 text-success" />
                </div>
                <div>
                  <div className="font-semibold">30min Pickup</div>
                  <div className="text-sm text-muted-foreground">Average time</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Real-time GPS</div>
                  <div className="text-sm text-muted-foreground">Live tracking</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warning/10">
                  <Package className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <div className="font-semibold">Secure Handling</div>
                  <div className="text-sm text-muted-foreground">Fragile care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;