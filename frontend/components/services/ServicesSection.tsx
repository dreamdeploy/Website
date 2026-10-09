"use client";

import { useState } from "react";

import { services } from "@/data/servicesData";
import { ServiceNavigation } from "@/components/services/ServiceNavigation";
import { ServiceContent } from "@/components/services/ServiceContent";
import { ServiceHeader } from "@/components/services/ServiceHeader";

interface ServicesSectionProps {
  onSelectServiceForContact?: (serviceTitle: string) => void;
}

export function ServicesSection({
  onSelectServiceForContact,
}: ServicesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  const handleStartProject = () => {
    onSelectServiceForContact?.(activeService.title);
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_25%,rgba(196,181,253,0.18),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(221,214,254,0.2),transparent_30%),#FAF8F5] px-5 py-20 sm:px-8 sm:py-24 lg:min-h-[920px] lg:px-12 lg:py-20 xl:min-h-[960px]">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-48 top-24 h-[600px] w-[600px] rounded-full bg-violet-200/30 blur-[150px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[600px] w-[600px] rounded-full bg-purple-200/25 blur-[150px]" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* SERVICE HEADER */}
        <ServiceHeader />

        {/* SERVICES CARD */}
        <div className="relative grid min-h-[650px] overflow-hidden rounded-[36px] border border-white/70 bg-white/25 shadow-[0_35px_110px_rgba(70,40,140,0.10),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-3xl backdrop-saturate-150 lg:grid-cols-[350px_minmax(0,1fr)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_35%,rgba(255,255,255,0.08)_70%,transparent)]" />

          <ServiceNavigation
            services={services}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />

          <ServiceContent
            activeService={activeService}
            onStartProject={handleStartProject}
          />

          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />
        </div>

        <div className="h-8 lg:h-10" />
      </div>
    </section>
  );
}
