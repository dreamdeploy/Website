"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import type { Service } from "@/data/servicesData";

import { ServiceVisual } from "@/components/services/ServiceVisual";
import { ServiceScrollMotion } from "@/components/animations/ServiceScrollMotion";

interface ServiceContentProps {
  activeService: Service;
  onStartProject: () => void;
}

export function ServiceContent({
  activeService,
  onStartProject,
}: ServiceContentProps) {
  const ActiveIcon = activeService.icon;

  return (
    <div className="relative min-h-[650px] overflow-hidden border-l border-white/30 bg-white/10 backdrop-blur-xl">
      {/* Background glass */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(139,92,246,0.14),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04))]" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-violet-300/10 blur-[100px]" />

      {/* Secondary glow */}
      <div className="pointer-events-none absolute bottom-[-150px] left-[35%] h-[300px] w-[300px] rounded-full bg-purple-300/10 blur-[100px]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.id}
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 grid h-full min-h-[650px] lg:grid-cols-[0.82fr_1.18fr]"
        >
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-14">
            {/* Icon + number */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.08,
                duration: 0.4,
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-violet-100/65 text-violet-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">
                <ActiveIcon className="h-6 w-6" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-600">
                {activeService.id} / 06
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.12,
                duration: 0.45,
              }}
              className="max-w-[470px] text-[clamp(2.5rem,4vw,4.5rem)] font-black leading-[0.92] tracking-[-0.06em] text-zinc-950"
            >
              {activeService.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.18,
                duration: 0.45,
              }}
              className="mt-7 max-w-[430px] text-[14px] leading-7 text-zinc-500"
            >
              {activeService.description}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.24,
                duration: 0.45,
              }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {activeService.features.map((feature) => (
                <span
                  key={feature}
                  className="flex items-center gap-1.5 rounded-full border border-white/80 bg-white/40 px-3.5 py-2.5 text-[9px] font-semibold text-zinc-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl"
                >
                  <Check className="h-3 w-3 text-violet-500" />
                  {feature}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.45,
              }}
              className="mt-9"
            >
              <button
                type="button"
                onClick={onStartProject}
                className="group inline-flex items-center gap-4 rounded-full border border-white/20 bg-zinc-950 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800"
              >
                Start A Project
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative min-h-[480px] lg:min-h-[650px]">
            <ServiceScrollMotion>
              <ServiceVisual type={activeService.type} />
            </ServiceScrollMotion>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
