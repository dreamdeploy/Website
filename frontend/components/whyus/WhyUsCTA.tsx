"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { MagneticButton } from "@/components/common/magnetic-button";

export function WhyUsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7FF] pb-20 pt-8 sm:pb-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border border-white
            bg-white/55
            px-7 py-8
            shadow-[0_15px_45px_rgba(109,40,217,0.08)]
            backdrop-blur-xl
            sm:px-10 sm:py-9
          "
        >
          {/* Animated glow */}

          <motion.div
            aria-hidden
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-20
              -top-32
              size-[330px]
              rounded-full
              bg-violet-200/50
              blur-[65px]
            "
          />

          {/* Glass shine */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-br
              from-white/35
              via-transparent
              to-violet-100/10
            "
          />

          <div className="relative z-10 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            {/* Content */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/80 px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-violet-600" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#625B79]">
                  Ready to Build?
                </span>
              </div>

              <h2 className="text-[25px] font-extrabold tracking-[-0.035em] text-[#11111C] sm:text-[29px]">
                Have an idea in mind?
              </h2>

              <p className="mt-1.5 text-[13px] text-[#716B92]">
                Let's create a digital experience that helps your business grow.
              </p>
            </motion.div>

            {/* Magnetic CTA */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <MagneticButton
                href="/contact"
                className="
                  shrink-0
                  rounded-full
                  bg-[#11101B]
                  px-6 py-3.5
                  text-[11px]
                  font-semibold
                  text-white
                  shadow-[0_12px_28px_rgba(17,16,27,0.18)]
                  hover:bg-violet-700
                  hover:shadow-[0_16px_35px_rgba(109,40,217,0.25)]
                "
              >
                <span className="flex items-center gap-2">
                  Start a Project
                  <ArrowUpRight
                    className="
                      size-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
