import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import TrustedCompanies from "@/components/TrustedCompanies"
import ProductDemo from "@/components/ProductDemo"
import IntegrationsSection from "@/components/IntegrationsSection"
import FeaturesSection from "@/components/FeaturesSection"
import PricingSection from "@/components/PricingSection"
import CustomerStories from "@/components/CustomerStories"
import SecuritySection from "@/components/SecuritySection"
import CtaSection from "@/components/CtaSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustedCompanies />
        <ProductDemo />
        <IntegrationsSection />
        <FeaturesSection />
        <PricingSection />
        <CustomerStories />
        <SecuritySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
