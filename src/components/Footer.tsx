import { Package, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container px-4 max-w-7xl mx-auto py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">SwiftDeliver</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Fast, reliable, and secure package delivery across the city. 
              Your trusted partner for all delivery needs.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Motorbike Delivery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Light Vehicle Delivery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Same-Day Delivery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Scheduled Delivery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bulk Delivery</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Track Package</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Report Issue</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Become a Driver</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partner with Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@swiftdeliver.co.ke</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  Westlands Office Park<br />
                  Nairobi, Kenya
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>
            © 2024 SwiftDeliver. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;