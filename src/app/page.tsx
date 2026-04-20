import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { IntegrationEcosystem } from "@/components/sections/IntegrationEcosystem";
import { LiveActivity } from "@/components/sections/LiveActivity";
import { PricingSection } from "@/components/sections/PricingSection";
import { Footer } from "@/components/sections/Footer";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian selection:bg-neon-pink/30 selection:text-white">
      <HeroSection />
      <FeaturesSection />
      <IntegrationEcosystem />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <LiveActivity />
    </main>
  );
}
