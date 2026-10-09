"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/whyUsData";

export function WhyUsTechnology() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7FF] py-12 sm:py-16">
      {/* =====================================================
          AMBIENT GLASS GLOW
      ===================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none absolute
          -right-32 top-0
          h-[420px] w-[420px]
          rounded-full
          bg-violet-300/25
          blur-[120px]
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none absolute
          -left-32 bottom-0
          h-[320px] w-[320px]
          rounded-full
          bg-fuchsia-200/25
          blur-[110px]
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none absolute
          left-[42%] top-[35%]
          h-[220px] w-[220px]
          rounded-full
          bg-indigo-200/15
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8">
        {/* =====================================================
            MAIN GLASS CONTAINER
        ===================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border border-white/70
            bg-white/25
            p-6
            shadow-[0_30px_80px_-35px_rgba(91,63,160,0.22)]
            backdrop-blur-2xl
            backdrop-saturate-[180%]
            sm:p-8
            lg:p-10
          "
        >
          {/* Outer glossy reflection */}

          <div
            aria-hidden
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-br
              from-white/55
              via-white/10
              to-violet-100/20
            "
          />

          {/* Top glass reflection */}

          <div
            aria-hidden
            className="
              pointer-events-none absolute
              -top-32
              left-[15%]
              h-64
              w-[70%]
              rounded-full
              bg-white/35
              blur-[70px]
            "
          />

          {/* Inner glass border */}

          <div
            aria-hidden
            className="
              pointer-events-none absolute inset-[1px]
              rounded-[31px]
              border border-white/40
            "
          />

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            {/* =================================================
                TITLE
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Glass label */}

              <div
                className="
                  mb-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border border-white/80
                  bg-white/60
                  px-3.5 py-2
                  shadow-[0_8px_25px_rgba(109,40,217,0.07)]
                  backdrop-blur-xl
                  backdrop-saturate-150
                "
              >
                <span
                  className="
                    size-2
                    rounded-full
                    bg-violet-600
                    shadow-[0_0_10px_rgba(124,58,237,0.55)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#625B79]
                  "
                >
                  Modern Technology
                </span>
              </div>

              <h2
                className="
                  text-[36px]
                  font-extrabold
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-[#11111C]
                  sm:text-[43px]
                "
              >
                Built with the
                <br />
                <span
                  className="
                    font-editorial
                    font-normal
                    italic
                    text-[#6635E8]
                  "
                >
                  best tools.
                </span>
              </h2>

              <p className="mt-5 max-w-[390px] text-[13px] leading-6 text-[#716B92]">
                We use modern, reliable technologies to create fast, scalable
                and future-ready digital experiences.
              </p>
            </motion.div>

            {/* =================================================
                TECHNOLOGY CARDS
            ================================================= */}

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {technologies.map((technology, index) => {
                const Icon = technology.icon;

                return (
                  <motion.div
                    key={technology.name}
                    initial={{
                      opacity: 0,
                      y: 25,
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
                      duration: 0.55,
                      delay: index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.015,
                    }}
                    className="
                      group
                      relative
                      flex
                      min-h-[108px]
                      flex-col
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[20px]
                      border border-white/80
                      bg-white/40
                      px-4 py-5
                      shadow-[0_14px_35px_-12px_rgba(109,40,217,0.16)]
                      backdrop-blur-2xl
                      backdrop-saturate-[180%]
                      transition-all
                      duration-300
                      hover:border-white
                      hover:bg-white/55
                      hover:shadow-[0_20px_45px_-12px_rgba(109,40,217,0.22)]
                    "
                  >
                    {/* Glossy glass layer */}

                    <div
                      aria-hidden
                      className="
                        pointer-events-none
                        absolute inset-0
                        bg-gradient-to-br
                        from-white/50
                        via-transparent
                        to-violet-100/20
                        opacity-80
                      "
                    />

                    {/* Inner glass border */}

                    <div
                      aria-hidden
                      className="
                        pointer-events-none
                        absolute inset-[1px]
                        rounded-[19px]
                        border border-white/40
                      "
                    />

                    {/* Hover glow */}

                    <div
                      aria-hidden
                      className="
                        pointer-events-none
                        absolute
                        -right-8
                        -top-8
                        size-20
                        rounded-full
                        bg-violet-400/15
                        blur-[25px]
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* =================================================
                        GLASS ICON
                    ================================================= */}

                    <div
                      className="
                        relative
                        z-10
                        grid
                        size-12
                        place-items-center
                        rounded-[14px]
                        border border-white/80
                        bg-white/55
                        shadow-[0_8px_20px_rgba(109,40,217,0.10)]
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        group-hover:border-violet-100
                        group-hover:bg-white/70
                        group-hover:shadow-[0_10px_25px_rgba(109,40,217,0.16)]
                      "
                    >
                      <Icon
                        className="
                          size-7
                          text-violet-600
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Name */}

                    <span
                      className="
                        relative
                        z-10
                        mt-3
                        text-[11px]
                        font-medium
                        text-[#55506C]
                      "
                    >
                      {technology.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
