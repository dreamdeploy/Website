"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Service } from "@/data/servicesData";
import { ServiceActiveTransition } from "@/components/animations/ServiceActiveTransition";

interface ServiceNavigationProps {
  services: Service[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function ServiceNavigation({
  services,
  activeIndex,
  onSelect,
}: ServiceNavigationProps) {
  return (
    <div
      id="services"
      className="relative z-20 overflow-hidden border-b border-zinc-200/70 bg-white/30 px-4 py-6 shadow-[inset_-1px_0_0_rgba(255,255,255,0.8)] backdrop-blur-3xl backdrop-saturate-150 sm:px-5 lg:border-b-0 lg:border-r lg:px-6 lg:py-6"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-violet-300/20 blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-24 right-[-50px] h-72 w-72 rounded-full bg-purple-200/20 blur-[110px]" />

      {/* Main glass overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.38),rgba(255,255,255,0.08)_50%,rgba(221,214,254,0.16))]" />

      {/* Top reflection */}
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

      <div className="relative flex h-full flex-col justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-6 px-2 sm:px-3"
        >
          <div className="mb-2 flex items-center gap-2">
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.65, 1, 0.65],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(124,58,237,0.7)]"
            />

            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-violet-600">
              Explore Services
            </p>
          </div>

          <p className="text-[10px] leading-5 text-zinc-400">
            Choose what you want to build
          </p>
        </motion.div>

        {/* Service list */}
        <div className="space-y-2.5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const active = activeIndex === index;

            return (
              <motion.button
                key={service.id}
                type="button"
                onClick={() => onSelect(index)}
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.065,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  x: active ? 0 : 4,
                }}
                whileTap={{
                  scale: 0.985,
                }}
                animate={{
                  scale: active ? 1.008 : 1,
                }}
                className={`group relative flex min-h-[70px] w-full items-center gap-2.5 overflow-hidden rounded-[22px] px-3 py-3 text-left transition-all duration-500 sm:gap-3 sm:px-3.5 ${
                  active
                    ? "border border-violet-300/80 bg-violet-50/30 shadow-[0_18px_45px_rgba(124,58,237,0.14),0_4px_12px_rgba(80,50,140,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-3xl"
                    : "border border-zinc-200/45 bg-white/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-2xl hover:border-violet-200/60 hover:bg-white/35 hover:shadow-[0_12px_30px_rgba(91,60,150,0.07)]"
                }`}
              >
                {/* Smooth active glass */}
                {active && <ServiceActiveTransition />}

                {/* Active left indicator */}
                {active && (
                  <motion.span
                    layoutId="service-active-bar"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 28,
                    }}
                    className="absolute left-0 top-1/2 z-40 h-10 w-[4px] -translate-y-1/2 rounded-r-full bg-violet-600 shadow-[0_0_18px_rgba(124,58,237,0.65)]"
                  />
                )}

                {/* Number */}
                <span
                  className={`relative z-30 flex w-5 shrink-0 items-center justify-center text-[9px] font-bold ${
                    active
                      ? "text-violet-700"
                      : "text-zinc-400 group-hover:text-violet-500"
                  }`}
                >
                  {service.id}
                </span>

                {/* Icon */}
                <motion.span
                  animate={
                    active
                      ? {
                          scale: [1, 1.04, 1],
                          y: [0, -2, 0],
                        }
                      : {
                          scale: 1,
                          y: 0,
                        }
                  }
                  transition={{
                    duration: 2.4,
                    repeat: active ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                  className={`relative z-30 flex h-10 w-10 shrink-0 items-center justify-center rounded-[15px] border sm:h-11 sm:w-11 ${
                    active
                      ? "border-violet-200/90 bg-violet-100/85 text-violet-700 shadow-[0_8px_25px_rgba(124,58,237,0.18),inset_0_1px_0_rgba(255,255,255,0.95)]"
                      : "border-white/75 bg-white/40 text-zinc-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] group-hover:border-white group-hover:bg-white/70 group-hover:text-violet-600"
                  }`}
                >
                  <Icon
                    className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]"
                    strokeWidth={active ? 2 : 1.8}
                  />
                </motion.span>

                {/* Text */}
                <span className="relative z-30 min-w-0 flex-1 pr-1">
                  <span
                    className={`block text-[12px] leading-[1.25] tracking-[-0.01em] sm:text-[13px] ${
                      active
                        ? "font-extrabold text-zinc-950"
                        : "font-bold text-zinc-700 group-hover:text-zinc-950"
                    }`}
                  >
                    {service.title}
                  </span>

                  <span
                    className={`mt-1 block text-[8.5px] leading-[1.3] sm:text-[9px] ${
                      active
                        ? "font-medium text-violet-700/70"
                        : "text-zinc-400 group-hover:text-zinc-500"
                    }`}
                  >
                    {service.short}
                  </span>
                </span>

                {/* Arrow */}
                <motion.span
                  animate={
                    active
                      ? {
                          x: [0, 3, 0],
                          y: [0, -2, 0],
                        }
                      : {
                          x: 0,
                          y: 0,
                        }
                  }
                  transition={{
                    duration: 1.8,
                    repeat: active ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                  className={`relative z-30 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                    active
                      ? "border-violet-200/80 bg-violet-100/70 text-violet-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
                      : "border-white/70 bg-white/30 text-zinc-300 group-hover:border-violet-200/70 group-hover:bg-white/65 group-hover:text-violet-500"
                  }`}
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </motion.span>

                {/* Hover light sweep */}
                <span className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </motion.button>
            );
          })}
        </div>

        {/* Selected service glass */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.55,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-5 overflow-hidden rounded-[18px] border border-zinc-200/60 bg-white/30 px-4 py-3 shadow-[0_10px_30px_rgba(80,50,140,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl"
        >
          <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

          <div className="relative flex items-center justify-between">
            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Selected Service
            </span>

            <span className="flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-violet-600">
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-1.5 w-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(124,58,237,0.6)]"
              />
              Active
            </span>
          </div>

          <motion.div
            key={services[activeIndex]?.id}
            initial={{
              opacity: 0,
              x: -8,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-2 text-[11px] font-bold text-zinc-800"
          >
            {services[activeIndex]?.title}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
