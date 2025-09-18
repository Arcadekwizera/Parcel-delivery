import { Button } from "@/components/ui/button";
import { Package, Truck, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
            <Package className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
            SwiftDeliver
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
            Services
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
            How it Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
            Pricing
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-2">
            <Truck className="h-4 w-4" />
            <span>Become a Driver</span>
          </Button>
          <Button variant="outline" size="sm" className="items-center space-x-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Login</span>
          </Button>
          <Button variant="hero" size="sm">
            Send Package
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;