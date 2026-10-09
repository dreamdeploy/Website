"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Layers3,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

import { MagneticButton } from "@/components/common/magnetic-button";

const reasons = [
  {
    title: "Business First",
    text: "We design around your actual goals, not just visuals.",
    icon: Rocket,
  },
  {
    title: "Built to Scale",
    text: "Our digital products are made to grow with your business.",
    icon: Layers3,
  },
  {
    title: "Fast & Focused",
    text: "Clear process, focused execution and no unnecessary complexity.",
    icon: Zap,
  },
];

const stats = [
  { value: "30+", label: "Projects Built" },
  { value: "20+", label: "Businesses Served" },
  { value: "5+", label: "Digital Categories" },
];

export function WhyUsHero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#F8F7FF]">
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <motion.div
        aria-hidden
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          size-[560px]
          rounded-full
          bg-violet-300/25
          blur-[120px]
        "
      />

      <motion.div
        aria-hidden
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          size-[430px]
          rounded-full
          bg-fuchsia-200/25
          blur-[110px]
        "
      />

      {/* Fine grid */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.22]
          [background-image:linear-gradient(rgba(109,40,217,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(109,40,217,0.045)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative mx-auto max-w-[1280px] px-5 pb-16 pt-28 sm:px-8 lg:pb-20 lg:pt-32">
        {/* ===================================================
            TOP INTRO
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 text-center"
        >
          {/* Label */}
          <div
            className="
              mx-auto
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/80
              bg-white/60
              px-4
              py-2
              shadow-[0_8px_25px_rgba(109,40,217,0.08)]
              backdrop-blur-xl
            "
          >
            <span
              className="
                size-2
                rounded-full
                bg-violet-600
                shadow-[0_0_12px_rgba(124,58,237,0.65)]
              "
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#625B79]">
              Why DreamDeploy
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              mx-auto
              mt-7
              max-w-[900px]
              text-[48px]
              font-extrabold
              leading-[0.92]
              tracking-[-0.065em]
              text-[#10101C]
              sm:text-[64px]
              lg:text-[78px]
            "
          >
            Not just another
            <br />
            <span className="font-editorial font-normal italic text-[#6635E8]">
              digital agency.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-[610px]
              text-[14px]
              leading-6
              text-[#716B92]
              sm:text-[16px]
            "
          >
            We combine strategy, design and technology to build digital
            experiences that solve real business problems and create measurable
            value.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN GLASS PANEL
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            mt-12
            max-w-[1080px]
          "
        >
          {/* Main glass */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-white/80
              bg-white/30
              px-5
              py-6
              shadow-[0_35px_90px_-35px_rgba(91,63,160,0.28)]
              backdrop-blur-3xl
              backdrop-saturate-[180%]
              sm:px-8
              sm:py-8
              lg:px-10
              lg:py-9
            "
          >
            {/* Gloss */}
            <div
              aria-hidden
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-white/60
                via-white/10
                to-violet-100/20
              "
            />

            <div
              aria-hidden
              className="
                pointer-events-none
                absolute
                -top-32
                left-[15%]
                h-64
                w-[70%]
                rounded-full
                bg-white/35
                blur-[80px]
              "
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Value cards */}
              <div className="grid gap-3 md:grid-cols-3">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon;

                  return (
                    <motion.div
                      key={reason.title}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: 0.45 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[22px]
                        border
                        border-white/80
                        bg-white/40
                        p-5
                        shadow-[0_14px_35px_-20px_rgba(91,63,160,0.2)]
                        backdrop-blur-2xl
                        transition-all
                        duration-300
                        hover:bg-white/55
                        hover:shadow-[0_20px_45px_-20px_rgba(91,63,160,0.3)]
                      "
                    >
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

                      <div className="relative z-10">
                        <div
                          className="
                            grid
                            size-11
                            place-items-center
                            rounded-[14px]
                            border
                            border-white/80
                            bg-white/60
                            text-violet-600
                            shadow-[0_8px_20px_rgba(109,40,217,0.08)]
                            backdrop-blur-xl
                          "
                        >
                          <Icon className="size-5" strokeWidth={1.8} />
                        </div>

                        <h3 className="mt-4 text-[14px] font-bold text-[#171522]">
                          {reason.title}
                        </h3>

                        <p className="mt-1.5 text-[11px] leading-5 text-[#716B92]">
                          {reason.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom divider */}
              <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

              {/* Stats + CTA */}
              <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-7">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-[25px] font-extrabold tracking-[-0.04em] text-[#171522]">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.08em] text-[#817B98]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3">
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
                      Work With Us
                      <ArrowUpRight className="size-4" />
                    </span>
                  </MagneticButton>

                  <a
                    href="/work"
                    className="
                      grid
                      size-11
                      place-items-center
                      rounded-full
                      border
                      border-white/80
                      bg-white/60
                      text-violet-600
                      shadow-sm
                      backdrop-blur-xl
                      transition-all
                      hover:-translate-y-0.5
                      hover:bg-white/80
                    "
                    aria-label="View our work"
                  >
                    <ArrowDownRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -right-2
              -top-5
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-white/80
              bg-white/65
              px-3
              py-2
              shadow-[0_12px_30px_rgba(91,63,160,0.12)]
              backdrop-blur-xl
              sm:flex
            "
          >
            <Sparkles className="size-3.5 text-violet-600" />

            <span className="text-[9px] font-bold text-[#4C4561]">
              Built with intention
            </span>
          </motion.div>

          {/* Floating check */}
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -bottom-4
              -left-2
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-white/80
              bg-white/65
              px-3
              py-2
              shadow-[0_12px_30px_rgba(91,63,160,0.12)]
              backdrop-blur-xl
              sm:flex
            "
          >
            <span className="grid size-5 place-items-center rounded-full bg-violet-100">
              <Check className="size-3 text-violet-600" />
            </span>

            <span className="text-[9px] font-bold text-[#4C4561]">
              No unnecessary complexity
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
