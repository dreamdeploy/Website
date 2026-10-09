"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe,
  Palette,
  Smartphone,
  UsersRound,
} from "lucide-react";

import { MagneticButton } from "@/components/common/magnetic-button";

const services = [
  {
    label: "Websites",
    icon: Globe,
  },
  {
    label: "Applications",
    icon: Smartphone,
  },
  {
    label: "Branding",
    icon: Palette,
  },
  {
    label: "Custom Software",
    icon: Code2,
  },
];

export function AboutHero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#F8F7FF]">
      {/* =========================
          AMBIENT BACKGROUND
      ========================== */}

      <motion.div
        aria-hidden
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
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
          blur-[110px]
        "
      />

      <motion.div
        aria-hidden
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          size-[420px]
          rounded-full
          bg-fuchsia-200/25
          blur-[100px]
        "
      />

      {/* Decorative orbital rings */}

      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[18%]
          hidden
          size-[420px]
          rounded-full
          border
          border-violet-200/50
          lg:block
        "
      >
        <span className="absolute -left-1 top-1/2 size-2 rounded-full bg-violet-500 shadow-[0_0_15px_rgba(124,58,237,0.7)]" />
      </motion.div>

      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[22%]
          hidden
          size-[330px]
          rounded-full
          border
          border-dashed
          border-violet-200/40
          lg:block
        "
      />

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[760px]
          max-w-[1380px]
          items-center
          px-5
          pb-16
          pt-28
          sm:px-8
          lg:px-12
          lg:pt-24
        "
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* =========================
              LEFT — EDITORIAL INTRO
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            {/* Label */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white
                bg-white/65
                px-3.5
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

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.13em]
                  text-[#625B79]
                "
              >
                About DreamDeploy
              </span>
            </motion.div>

            {/* Main heading */}

            <h1
              className="
                max-w-[760px]
                text-[52px]
                font-extrabold
                leading-[0.91]
                tracking-[-0.065em]
                text-[#10101C]
                sm:text-[68px]
                lg:text-[76px]
                xl:text-[86px]
              "
            >
              We build what
              <br />
              <span className="text-[#10101C]">businesses</span>
              <br />
              <span
                className="
                  font-editorial
                  font-normal
                  italic
                  text-[#6635E8]
                "
              >
                dream about.
              </span>
            </h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="
                mt-7
                max-w-[570px]
                text-[15px]
                leading-6
                text-[#716B92]
                sm:text-[16px]
              "
            >
              DreamDeploy is a digital studio where strategy, design and
              technology come together to turn ideas into real digital products.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Start a Project */}

              <MagneticButton
                href="/contact"
                className="
                  rounded-full
                  bg-[#11101B]
                  px-6
                  py-3.5
                  text-[12px]
                  font-semibold
                  text-white
                  shadow-[0_14px_32px_rgba(17,16,27,0.18)]
                  hover:bg-violet-700
                  hover:shadow-[0_16px_35px_rgba(109,40,217,0.25)]
                "
              >
                <span className="flex items-center gap-2">
                  Start a Project
                  <ArrowUpRight className="size-4" />
                </span>
              </MagneticButton>

              {/* Meet The Founders */}

              <MagneticButton
                href="#founders"
                className="
                  rounded-full
                  border
                  border-white
                  bg-white/65
                  px-6
                  py-3.5
                  text-[12px]
                  font-semibold
                  text-[#171522]
                  shadow-[0_8px_25px_rgba(109,40,217,0.08)]
                  backdrop-blur-xl
                  hover:bg-white
                "
              >
                <span className="flex items-center gap-2">
                  <UsersRound className="size-4 text-violet-600" />
                  Meet The Founders
                </span>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT — DIGITAL STUDIO
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            {/* Large glass orb */}

            <motion.div
              animate={{
                y: [0, -14, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                mx-auto
                aspect-square
                max-w-[500px]
                rounded-full
                border
                border-white/80
                bg-white/20
                shadow-[0_35px_100px_-35px_rgba(91,63,160,0.3)]
                backdrop-blur-2xl
              "
            >
              {/* Inner glow */}

              <div
                aria-hidden
                className="
                  absolute
                  inset-[12%]
                  rounded-full
                  bg-gradient-to-br
                  from-violet-200/60
                  via-white/20
                  to-fuchsia-200/40
                  blur-[2px]
                "
              />

              {/* Center mark */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  grid
                  size-[150px]
                  -translate-x-1/2
                  -translate-y-1/2
                  place-items-center
                  rounded-[38px]
                  border
                  border-white/80
                  bg-white/45
                  shadow-[0_25px_60px_rgba(91,63,160,0.18)]
                  backdrop-blur-2xl
                "
              >
                <div className="text-center">
                  <p
                    className="
                      text-[42px]
                      font-black
                      leading-none
                      tracking-[-0.08em]
                      text-[#151220]
                    "
                  >
                    DD
                  </p>

                  <p
                    className="
                      mt-2
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-violet-600
                    "
                  >
                    Dream Deploy
                  </p>
                </div>
              </div>

              {/* Orbit dots */}

              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[7%]
                  rounded-full
                  border
                  border-violet-300/30
                "
              >
                <span className="absolute -top-1 left-1/2 size-3 -translate-x-1/2 rounded-full bg-violet-500 shadow-[0_0_18px_rgba(124,58,237,0.7)]" />
              </motion.span>

              <motion.span
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[20%]
                  rounded-full
                  border
                  border-dashed
                  border-violet-200/50
                "
              >
                <span className="absolute -right-1 top-1/2 size-2.5 rounded-full bg-fuchsia-400 shadow-[0_0_15px_rgba(232,121,249,0.7)]" />
              </motion.span>
            </motion.div>

            {/* Floating service chips */}

            <div className="absolute inset-0">
              {services.map((service, index) => {
                const Icon = service.icon;

                const positions = [
                  "left-[0%] top-[18%]",
                  "right-[-2%] top-[25%]",
                  "left-[-3%] bottom-[24%]",
                  "right-[0%] bottom-[15%]",
                ];

                return (
                  <motion.div
                    key={service.label}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -7, 0],
                    }}
                    transition={{
                      opacity: {
                        duration: 0.5,
                        delay: 0.5 + index * 0.1,
                      },
                      scale: {
                        duration: 0.5,
                        delay: 0.5 + index * 0.1,
                      },
                      y: {
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className={`
                      absolute
                      ${positions[index]}
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/80
                      bg-white/60
                      px-3
                      py-2.5
                      shadow-[0_12px_30px_rgba(91,63,160,0.13)]
                      backdrop-blur-2xl
                    `}
                  >
                    <span
                      className="
                        grid
                        size-7
                        place-items-center
                        rounded-full
                        bg-white/80
                        text-violet-600
                        shadow-sm
                      "
                    >
                      <Icon className="size-3.5" />
                    </span>

                    <span
                      className="
                        text-[9px]
                        font-bold
                        text-[#3E3850]
                      "
                    >
                      {service.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* =========================
            BOTTOM IDENTITY STRIP
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.65,
          }}
          className="
            absolute
            bottom-6
            left-5
            right-5
            hidden
            rounded-2xl
            border
            border-white/80
            bg-white/40
            px-5
            py-3
            shadow-[0_10px_35px_rgba(91,63,160,0.08)]
            backdrop-blur-xl
            sm:flex
            sm:items-center
            sm:justify-between
            lg:left-12
            lg:right-12
          "
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#716B92]">
            Strategy • Design • Technology
          </span>

          <span className="text-[9px] font-medium text-[#817B98]">
            From idea → digital product → growth
          </span>
        </motion.div>
      </div>
    </section>
  );
}
