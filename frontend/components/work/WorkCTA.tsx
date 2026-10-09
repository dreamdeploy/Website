"use client";

import { ArrowRight } from "lucide-react";

import { MagneticButton } from "@/components/common/magnetic-button";

export function WorkCTA() {
  return (
    <section className="mx-auto mt-24 max-w-[1180px] px-5 pb-20 sm:px-8">
      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#eee5ff] via-[#e9ddff] to-[#f3edff] px-7 py-12 sm:px-12 lg:px-16 lg:py-14">
        {/* Glow */}
        <div className="pointer-events-none absolute -bottom-32 left-[38%] size-72 rounded-full bg-violet-400/30 blur-3xl" />

        <div className="relative z-10 max-w-[650px]">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-700">
            <span className="size-2 rounded-full bg-violet-600" />
            Have an idea?
          </div>

          <h2 className="mt-4 text-[clamp(2.7rem,5vw,4.8rem)] font-extrabold leading-[0.95] tracking-[-0.055em] text-[#11101a]">
            Add Your{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
              Project
            </span>
          </h2>

          <p className="mt-5 max-w-[480px] text-sm leading-6 text-[#686178]">
            Have something you want us to build?
            <br />
            Let's turn your idea into a digital experience.
          </p>

          {/* Magnetic CTA */}
          <MagneticButton
            href="/contact"
            strength={0.28}
            className="
              mt-7
              rounded-full
              bg-violet-600
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(124,58,237,0.25)]
              hover:bg-violet-700
            "
          >
            <span className="flex items-center gap-2">
              Start Your Project
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </MagneticButton>
        </div>

        {/* Floating service cards */}
        <div className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 lg:flex">
          <div className="relative h-48 w-80">
            {["Website", "Mobile App", "Branding", "Custom Software"].map(
              (item, index) => (
                <div
                  key={item}
                  className="absolute rounded-2xl border border-white/70 bg-white/50 px-5 py-4 text-xs font-medium text-violet-800 shadow-[0_12px_35px_rgba(91,63,160,0.08)] backdrop-blur-md"
                  style={{
                    left: `${(index % 2) * 115 + 20}px`,
                    top: `${Math.floor(index / 2) * 70 + (index % 2 ? 20 : 0)}px`,
                    transform: `rotate(${index % 2 ? 4 : -3}deg)`,
                  }}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
