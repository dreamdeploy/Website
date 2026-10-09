"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { whyUsProcess } from "@/data/whyUsData";

export function WhyUsProcess() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7FF] py-14 sm:py-24">
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none absolute
          -left-40 top-10
          h-[420px] w-[420px]
          rounded-full
          bg-violet-300/20
          blur-[120px]
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none absolute
          -right-40 top-[25%]
          h-[460px] w-[460px]
          rounded-full
          bg-purple-300/15
          blur-[130px]
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none absolute
          bottom-[-120px] left-[30%]
          h-[350px] w-[350px]
          rounded-full
          bg-fuchsia-200/20
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid gap-6
            md:grid-cols-[1fr_0.75fr]
            md:items-end
          "
        >
          {/* LEFT */}

          <div>
            {/* Glass label */}

            <div
              className="
                mb-5
                inline-flex items-center gap-2
                rounded-full
                border border-white/80
                bg-white/55
                px-3.5 py-2
                shadow-[0_8px_30px_rgba(109,40,217,0.08)]
                backdrop-blur-2xl
                backdrop-saturate-[180%]
              "
            >
              <span
                className="
                  size-2
                  rounded-full
                  bg-violet-600
                  shadow-[0_0_14px_rgba(124,58,237,0.7)]
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#625B79]
                "
              >
                Our Process
              </span>
            </div>

            <h2
              className="
                max-w-[620px]
                text-[38px]
                font-extrabold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#11111C]
                sm:text-[48px]
              "
            >
              From idea to{" "}
              <span
                className="
                  font-editorial
                  font-normal
                  italic
                  text-[#6635E8]
                "
              >
                impact.
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <p
            className="
              max-w-[390px]
              text-[14px]
              leading-6
              text-[#716B92]
              md:justify-self-end
            "
          >
            A clear and collaborative process to turn your ideas into real
            business results.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN GLASS PANEL
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-10
            overflow-hidden
            rounded-[32px]
            border border-white/75
            bg-white/25
            p-4
            shadow-[0_35px_90px_-35px_rgba(91,63,160,0.28)]
            backdrop-blur-3xl
            backdrop-saturate-[190%]
            sm:p-6
            lg:p-8
          "
        >
          {/* =================================================
              GLASS GLOSS
          ================================================= */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-br
              from-white/65
              via-white/15
              to-violet-100/20
            "
          />

          {/* Top reflection */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              -top-40
              left-[10%]
              h-[260px]
              w-[80%]
              rounded-full
              bg-white/35
              blur-[80px]
            "
          />

          {/* Violet light */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              right-[-80px]
              top-[25%]
              h-[260px]
              w-[260px]
              rounded-full
              bg-violet-300/20
              blur-[80px]
            "
          />

          {/* Inner border */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute inset-[1px]
              rounded-[31px]
              border border-white/45
            "
          />

          {/* =================================================
              PROCESS GRID
          ================================================= */}

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-5
              lg:gap-3
            "
          >
            {whyUsProcess.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  {/* =================================================
                      STEP CARD
                  ================================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                      scale: 0.96,
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
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -7,
                      scale: 1.015,
                    }}
                    className="
                      group
                      relative
                      min-h-[260px]
                      overflow-hidden
                      rounded-[24px]
                      border border-white/80
                      bg-white/38
                      px-5
                      py-6
                      shadow-[0_15px_40px_-18px_rgba(91,63,160,0.22)]
                      backdrop-blur-2xl
                      backdrop-saturate-[190%]
                      transition-all
                      duration-500
                      hover:border-white
                      hover:bg-white/52
                      hover:shadow-[0_25px_55px_-18px_rgba(109,40,217,0.30)]
                    "
                  >
                    {/* Card glossy layer */}

                    <div
                      aria-hidden
                      className="
                        pointer-events-none
                        absolute inset-0
                        bg-gradient-to-br
                        from-white/65
                        via-white/10
                        to-violet-100/20
                        opacity-80
                      "
                    />

                    {/* Card inner border */}

                    <div
                      aria-hidden
                      className="
                        pointer-events-none
                        absolute inset-[1px]
                        rounded-[23px]
                        border border-white/40
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
                        size-28
                        rounded-full
                        bg-violet-400/20
                        blur-[35px]
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* =================================================
                        ICON
                    ================================================= */}

                    <div className="relative z-10 flex justify-center">
                      <div
                        className="
                          relative
                          grid
                          size-[68px]
                          place-items-center
                          rounded-full
                          border border-white/90
                          bg-white/55
                          shadow-[0_12px_30px_rgba(109,40,217,0.15)]
                          backdrop-blur-2xl
                          backdrop-saturate-[180%]
                          transition-all
                          duration-500
                          group-hover:border-violet-100
                          group-hover:bg-white/70
                          group-hover:shadow-[0_15px_35px_rgba(109,40,217,0.25)]
                        "
                      >
                        {/* Icon glow */}

                        <span
                          aria-hidden
                          className="
                            absolute
                            inset-2
                            rounded-full
                            bg-violet-400/15
                            blur-lg
                          "
                        />

                        <Icon
                          className="
                            relative
                            z-10
                            size-7
                            text-violet-600
                            transition-transform
                            duration-500
                            group-hover:scale-110
                          "
                          strokeWidth={1.7}
                        />
                      </div>
                    </div>

                    {/* =================================================
                        NUMBER
                    ================================================= */}

                    <div className="relative z-10 mt-5 flex justify-center">
                      <span
                        className="
                          rounded-full
                          border border-white/80
                          bg-white/55
                          px-3
                          py-1
                          text-[10px]
                          font-bold
                          tracking-[0.08em]
                          text-violet-700
                          shadow-[0_5px_15px_rgba(109,40,217,0.08)]
                          backdrop-blur-xl
                        "
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* =================================================
                        TITLE
                    ================================================= */}

                    <h3
                      className="
                        relative
                        z-10
                        mt-3
                        text-center
                        text-[16px]
                        font-bold
                        tracking-[-0.02em]
                        text-[#161420]
                      "
                    >
                      {step.title}
                    </h3>

                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <p
                      className="
                        relative
                        z-10
                        mx-auto
                        mt-2
                        max-w-[175px]
                        text-center
                        text-[11px]
                        leading-[1.55]
                        text-[#77708E]
                      "
                    >
                      {step.description}
                    </p>
                  </motion.div>

                  {/* =================================================
                      CONNECTOR
                  ================================================= */}

                  {index < whyUsProcess.length - 1 && (
                    <div
                      aria-hidden
                      className="
                        pointer-events-none
                        absolute
                        -right-[13px]
                        top-1/2
                        z-30
                        hidden
                        -translate-y-1/2
                        lg:block
                      "
                    >
                      <div
                        className="
                          grid
                          size-7
                          place-items-center
                          rounded-full
                          border border-white/90
                          bg-white/65
                          shadow-[0_8px_22px_rgba(109,40,217,0.16)]
                          backdrop-blur-xl
                        "
                      >
                        <ArrowRight
                          className="size-3.5 text-violet-600"
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
