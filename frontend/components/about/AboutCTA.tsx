"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { MagneticButton } from "@/components/common/magnetic-button";

export function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7FF] px-5 pb-20 pt-8 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white
            bg-white/45
            px-7
            py-9
            shadow-[0_20px_60px_-25px_rgba(91,63,160,0.2)]
            backdrop-blur-2xl
            sm:px-10
            sm:py-10
          "
        >
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              -right-24
              -top-32
              size-[400px]
              rounded-full
              bg-violet-300/30
              blur-[80px]
            "
          />

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-white/50
              via-transparent
              to-violet-100/20
            "
          />

          <div className="relative z-10 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div
                className="
                  mb-3
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-violet-100
                  bg-white/75
                  px-3
                  py-1.5
                "
              >
                <span className="size-1.5 rounded-full bg-violet-600" />

                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#625B79]">
                  Let's Build Together
                </span>
              </div>

              <h2 className="text-[27px] font-extrabold tracking-[-0.04em] text-[#11111C] sm:text-[32px]">
                Have an idea worth building?
              </h2>

              <p className="mt-1.5 text-[13px] text-[#716B92]">
                Let's turn it into a digital experience that helps your business
                grow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <MagneticButton
                href="/contact"
                className="
                  rounded-full
                  bg-[#11101B]
                  px-6
                  py-3.5
                  text-[11px]
                  font-semibold
                  text-white
                  shadow-[0_12px_28px_rgba(17,16,27,0.18)]
                  hover:bg-violet-700
                "
              >
                <span className="flex items-center gap-2">
                  Start a Project
                  <ArrowUpRight className="size-4" />
                </span>
              </MagneticButton>

              <MagneticButton
                href="/contact"
                className="
                  rounded-full
                  border
                  border-violet-100
                  bg-white/75
                  px-6
                  py-3.5
                  text-[11px]
                  font-semibold
                  text-[#171522]
                  hover:bg-white
                "
              >
                <span className="flex items-center gap-2">
                  Get in Touch
                  <ArrowUpRight className="size-4 text-violet-600" />
                </span>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
