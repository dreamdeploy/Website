import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";

import { WhyUsHero } from "@/components/whyus/WhyUsHero";
import { WhyUsReasons } from "@/components/whyus/WhyUsReasons";
import { WhyUsProcess } from "@/components/whyus/WhyUsProcess";
import { WhyUsTechnology } from "@/components/whyus/WhyUsTechnology";
import { WhyUsCTA } from "@/components/whyus/WhyUsCTA";

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-[#F8F7FF] text-[#11111C]">
      <Navbar />

      <WhyUsHero />

      <WhyUsReasons />

      <WhyUsProcess />

      <WhyUsTechnology />

      <WhyUsCTA />

      <Footer />
    </main>
  );
}
