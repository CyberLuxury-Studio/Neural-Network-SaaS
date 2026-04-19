import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian selection:bg-neon-pink/30 selection:text-white">
      <HeroSection />
      <FeaturesSection />
      <ModelArchitectureSection />
      <PricingSection />
      <Footer />
    </main>
  );
}