import Navbar from "@/components/landing/Navbar"
import HeroSection from "@/components/landing/HeroSection"
import AboutSection from "@/components/landing/AboutSection"
import PlansSection from "@/components/landing/PlansSection"
import QuoteSection from "@/components/landing/QuoteSection"
import CTASection from "@/components/landing/CTASection"
import Footer from "@/components/landing/Footer"

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
  )
}

export default Index