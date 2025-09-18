import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import TrackingDemo from "@/components/TrackingDemo";
import TransporterDashboard from "@/components/TransporterDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <BookingForm />
      <TrackingDemo />
      <TransporterDashboard />
      <Footer />
    </div>
  );
};

export default Index;
