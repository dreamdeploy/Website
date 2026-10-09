import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";

import { AboutHero } from "@/components/about/AboutHero";
import { FounderSection } from "@/components/about/FounderSection";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutWork } from "@/components/about/AboutWork";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F7FF] text-[#10101C]">
      <Navbar />

      <AboutHero />

      <FounderSection />

      <AboutStats />

      <AboutWork />

      <AboutCTA />

      <Footer />
    </main>
  );
}
