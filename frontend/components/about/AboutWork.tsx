"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { aboutWork } from "@/data/aboutData";

export function AboutWork() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7FF] py-16 sm:py-20">
      {/* =========================
          AMBIENT BACKGROUND
      ========================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          size-[420px]
          rounded-full
          bg-violet-300/20
          blur-[120px]
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          size-[460px]
          rounded-full
          bg-fuchsia-200/25
          blur-[120px]
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          size-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-200/15
          blur-[100px]
        "
      />

      {/* =========================
          MAIN GLASS CONTAINER
      ========================== */}

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8">
        <div
          className="
            relative
            overflow-hidden
            rounded-[34px]
            border
            border-white/80
            bg-white/30
            p-5
            shadow-[0_30px_90px_-35px_rgba(91,63,160,0.28)]
            backdrop-blur-3xl
            backdrop-saturate-[180%]
            sm:p-7
            lg:p-9
          "
        >
          {/* Main glass gradient */}
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

          {/* Top glossy reflection */}
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              -top-32
              left-[12%]
              h-64
              w-[76%]
              rounded-full
              bg-white/35
              blur-[80px]
            "
          />

          {/* Inner glass edge */}
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              inset-[1px]
              rounded-[33px]
              border
              border-white/35
            "
          />

          {/* =========================
              CONTENT
          ========================== */}

          <div className="relative z-10 grid gap-8 lg:grid-cols-[220px_1fr]">
            {/* =========================
                SECTION INTRO
            ========================== */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10"
            >
              {/* Label */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/80
                  bg-white/60
                  px-3
                  py-1.5
                  shadow-[0_8px_25px_rgba(109,40,217,0.08)]
                  backdrop-blur-xl
                  backdrop-saturate-[180%]
                "
              >
                <span
                  className="
                    size-1.5
                    rounded-full
                    bg-violet-600
                    shadow-[0_0_8px_rgba(124,58,237,0.55)]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#625B79]
                  "
                >
                  Our Work
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  mt-5
                  text-[39px]
                  font-extrabold
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-[#10101C]
                "
              >
                What
                <br />
                <span
                  className="
                    font-editorial
                    font-normal
                    italic
                    text-[#6635E8]
                  "
                >
                  we've built.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-[210px]
                  text-[12px]
                  leading-5
                  text-[#716B92]
                "
              >
                A mix of client projects and our own digital products.
              </p>

              {/* Small bottom indicator */}
              <div className="mt-7 hidden items-center gap-2 lg:flex">
                <span className="h-px w-8 bg-violet-300" />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-violet-500
                  "
                >
                  Selected Builds
                </span>
              </div>
            </motion.div>

            {/* =========================
                PROJECT GRID
            ========================== */}

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {aboutWork.map((project, index) => (
                <motion.a
                  href="/work"
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/80
                    bg-white/40
                    p-2
                    shadow-[0_18px_45px_-25px_rgba(91,63,160,0.22)]
                    backdrop-blur-2xl
                    backdrop-saturate-[180%]
                    transition-all
                    duration-500
                    hover:border-white
                    hover:bg-white/55
                    hover:shadow-[0_28px_60px_-24px_rgba(91,63,160,0.34)]
                  "
                >
                  {/* Card glass shine */}
                  <div
                    aria-hidden
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-10
                      bg-gradient-to-br
                      from-white/55
                      via-transparent
                      to-violet-100/20
                      opacity-80
                    "
                  />

                  {/* Gloss reflection */}
                  <div
                    aria-hidden
                    className="
                      pointer-events-none
                      absolute
                      -top-16
                      left-[10%]
                      z-10
                      h-24
                      w-[80%]
                      rounded-full
                      bg-white/30
                      blur-[35px]
                      transition-all
                      duration-500
                      group-hover:bg-white/45
                    "
                  />

                  {/* Hover glow */}
                  <div
                    aria-hidden
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-10
                      z-10
                      size-28
                      rounded-full
                      bg-violet-400/15
                      blur-[30px]
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Image */}
                  <div
                    className="
                      relative
                      aspect-[1.35/1]
                      overflow-hidden
                      rounded-[18px]
                      bg-[#eeeafa]
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.045]
                      "
                    />

                    {/* Image overlay */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-white/15
                        via-transparent
                        to-violet-950/10
                      "
                    />

                    {/* Arrow */}
                    <div
                      className="
                        absolute
                        bottom-2
                        right-2
                        z-20
                        grid
                        size-9
                        place-items-center
                        rounded-full
                        border
                        border-white/80
                        bg-white/70
                        text-[#171522]
                        shadow-[0_8px_20px_rgba(91,63,160,0.15)]
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        group-hover:scale-105
                        group-hover:bg-white/90
                        group-hover:text-violet-700
                      "
                    >
                      <ArrowUpRight
                        className="
                          size-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="relative z-20 px-2.5 pb-2.5 pt-3.5">
                    <h3
                      className="
                        text-[13px]
                        font-bold
                        tracking-[-0.02em]
                        text-[#171522]
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[9px]
                        font-medium
                        text-[#817B98]
                      "
                    >
                      {project.category}
                    </p>
                  </div>

                  {/* Bottom reflection */}
                  <div
                    aria-hidden
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-[15%]
                      h-px
                      w-[70%]
                      bg-white/80
                      opacity-70
                    "
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
