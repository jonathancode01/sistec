import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PlansSection from "@/components/PlansSection";
import QuoteSection from "@/components/QuoteSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PlansSection />
      <QuoteSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
