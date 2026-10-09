"use client";

import { AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { ServiceContent } from "@/components/services/ServiceContent";
import { ServiceNavigation } from "@/components/services/ServiceNavigation";
import type { Service } from "@/data/servicesData";

interface ServiceExplorerProps {
  services: Service[];
  activeIndex: number;
  onSelectService: (index: number) => void;
  onStartProject?: () => void;
}

export function ServiceExplorer({
  services,
  activeIndex,
  onSelectService,
  onStartProject,
}: ServiceExplorerProps) {
  const activeService = services[activeIndex];

  if (!activeService) {
    return null;
  }

  const handleStartProject = onStartProject ?? (() => {});

  return (
    <div id="services" className="relative scroll-mt-24">
      <div className="relative grid min-h-[650px] overflow-hidden rounded-[36px] border border-white/70 bg-white/25 shadow-[0_35px_110px_rgba(70,40,140,0.10),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-3xl backdrop-saturate-150 lg:grid-cols-[350px_minmax(0,1fr)]">
        {/* Glass reflection */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_35%,rgba(255,255,255,0.08)_70%,transparent)]" />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-violet-300/10 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[350px] w-[350px] rounded-full bg-purple-300/10 blur-[120px]" />

        {/* Navigation */}
        <ServiceNavigation
          services={services}
          activeIndex={activeIndex}
          onSelect={onSelectService}
        />

        {/* Right Content */}
        <div className="relative min-h-[650px] overflow-hidden">
          <AnimatePresence mode="wait">
            <ServiceContent
              key={activeService.id}
              activeService={activeService}
              onStartProject={handleStartProject}
            />
          </AnimatePresence>
        </div>

        {/* Top glass highlight */}
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />
      </div>
    </div>
  );
}
