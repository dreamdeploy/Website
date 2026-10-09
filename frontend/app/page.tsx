"use client";

import { useState } from "react";

import Navbar from "@/components/navbar/Navbar";

import { Hero } from "@/components/hero/Hero";
import { BrandIntro } from "@/components/BrandIntro";
import { ServicesSection } from "@/components/services/ServicesSection";
import { SelectedWork } from "@/components/SelectedWork";
import { WhyDreamDeploy } from "@/components/WhyDreamDeploy";
import { ProcessSection } from "@/components/ProcessSection";
import { ScopeCalculator } from "@/components/ScopeCalculator";
import { StudioJammu } from "@/components/StudioJammu";
import { FAQSection } from "@/components/FAQSection";
import { ContactClosing } from "@/components/ContactClosing";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

import { PageReveal } from "@/components/animations/PageReveal";

export default function Home() {
  const [contactPreFill, setContactPreFill] = useState<{
    service?: string;
    estimatedRange?: string;
    features?: string[];
  }>({});

  /* ================= SCROLL TO SECTION ================= */

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const element = document.getElementById(sectionId);

    if (!element) return;

    const navOffset = 80;

    const offsetPosition =
      element.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  /* ================= HERO ================= */

  const handleStartProject = () => {
    scrollToSection("contact");
  };

  const handleExploreWork = () => {
    scrollToSection("work");
  };

  /* ================= SERVICES ================= */

  const handleServiceSelectForContact = (serviceTitle: string) => {
    setContactPreFill({
      service: serviceTitle,
    });

    scrollToSection("contact");
  };

  /* ================= WORK ================= */

  const handleInquireProject = (projectTitle: string) => {
    setContactPreFill({
      service: "Business Website",
      features: [`Reference Build: ${projectTitle}`],
    });

    scrollToSection("contact");
  };

  /* ================= CALCULATOR ================= */

  const handleScopeCalculated = (scopeData: {
    service: string;
    estimatedRange: string;
    features: string[];
  }) => {
    setContactPreFill(scopeData);

    scrollToSection("contact");
  };

  return (
    <div
      className="
        relative
        min-h-screen
        bg-[#FAF8F5]
        font-sans
        text-[#13131A]
        antialiased
        selection:bg-[#7E57C2]/20
        selection:text-[#4C1D95]
      "
    >
      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= PAGE 01 — HERO ================= */}

      <Hero
        onStartProject={handleStartProject}
        onExploreWork={handleExploreWork}
      />

      {/* ================= PAGE 02 — BRAND INTRO ================= */}

      {/* <BrandIntro /> */}

      {/* ================= PAGE 03 — SERVICES ================= */}

      <PageReveal>
        <ServicesSection
          onSelectServiceForContact={handleServiceSelectForContact}
        />
      </PageReveal>

      {/* ================= PAGE 04 — SELECTED WORK ================= */}

      <PageReveal>
        <SelectedWork onInquireProject={handleInquireProject} />
      </PageReveal>

      {/* ================= PAGE 05 — WHY DREAMDEPLOY ================= */}

      <PageReveal>
        <WhyDreamDeploy />
      </PageReveal>

      {/* ================= PAGE 06 — PROCESS ================= */}

      <PageReveal>
        <ProcessSection />
      </PageReveal>

      {/* ================= PAGE 07 — SCOPE CALCULATOR ================= */}

      <PageReveal>
        <ScopeCalculator onPreFillContact={handleScopeCalculated} />
      </PageReveal>

      {/* ================= PAGE 08 — STUDIO ================= */}

      <PageReveal>
        <StudioJammu />
      </PageReveal>

      {/* ================= PAGE 09 — FAQ ================= */}

      <PageReveal>
        <FAQSection />
      </PageReveal>

      {/* ================= PAGE 10 — CONTACT ================= */}

      <PageReveal>
        <ContactClosing
          preFillData={contactPreFill}
          onScrollToForm={() => scrollToSection("contact")}
        />
      </PageReveal>

      {/* ================= FOOTER ================= */}

      <PageReveal>
        <Footer />
      </PageReveal>

      {/* ================= WHATSAPP ================= */}

      <WhatsAppFloatingButton />
    </div>
  );
}
