"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Bot, Code2, Layers3, Palette, Rocket, Sparkles } from "lucide-react";

import { workHeroData } from "@/data/workData";

const agencyStages = [
  {
    id: "strategy",
    title: "Strategy",
    icon: Layers3,
  },
  {
    id: "design",
    title: "Design",
    icon: Palette,
  },
  {
    id: "build",
    title: "Build",
    icon: Code2,
  },
  {
    id: "deploy",
    title: "Deploy",
    icon: Rocket,
  },
];

export function WorkHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 22,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 22,
  });

  const systemX = useTransform(springX, [-500, 500], [-12, 12]);
  const systemY = useTransform(springY, [-500, 500], [-8, 8]);

  const glowX = useTransform(springX, [-500, 500], [20, -20]);
  const glowY = useTransform(springY, [-500, 500], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="
        relative
        min-h-[760px]
        overflow-hidden
        bg-[#F8F7FF]
        pt-28
        lg:min-h-[820px]
        lg:pt-32
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          style={{
            x: glowX,
            y: glowY,
          }}
          className="
            absolute
            -right-40
            top-[-80px]
            size-[620px]
            rounded-full
            bg-violet-300/20
            blur-[135px]
          "
        />

        <motion.div
          style={{
            x: useTransform(springX, [-500, 500], [-15, 15]),
            y: useTransform(springY, [-500, 500], [10, -10]),
          }}
          className="
            absolute
            -left-48
            bottom-[-180px]
            size-[520px]
            rounded-full
            bg-fuchsia-200/20
            blur-[125px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[45%]
            size-[460px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-200/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.13]
            [background-image:linear-gradient(rgba(109,40,217,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(109,40,217,0.045)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F8F7FF] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* ================================================= */}
        {/* TOP CONTENT */}
        {/* ================================================= */}

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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 text-center"
        >
          {/* Eyebrow */}
          <div
            className="
              mx-auto
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/80
              bg-white/55
              px-4
              py-2
              shadow-[0_10px_30px_rgba(91,63,160,0.07)]
              backdrop-blur-xl
            "
          >
            <span className="size-1.5 rounded-full bg-violet-600 shadow-[0_0_12px_rgba(124,58,237,0.7)]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#625B79]">
              {workHeroData.eyebrow}
            </span>
          </div>

          {/* EXISTING HEADING — UNCHANGED */}
          <h1
            className="
              mx-auto
              mt-7
              max-w-[900px]
              text-[clamp(3.3rem,7vw,6.5rem)]
              font-extrabold
              leading-[0.88]
              tracking-[-0.075em]
              text-[#11101A]
            "
          >
            We turn ideas into
            <br />
            <span className="font-editorial font-normal italic text-violet-600">
              digital experiences.
            </span>
          </h1>

          {/* EXISTING DESCRIPTION — UNCHANGED */}
          <p className="mx-auto mt-6 max-w-[590px] text-[14px] leading-7 text-[#706B7E] sm:text-[15px]">
            {workHeroData.description}
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* AGENCY SYSTEM */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-12 max-w-[1100px]"
        >
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
              z-30
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-white/80
              bg-white/70
              px-3
              py-2
              shadow-[0_15px_35px_rgba(91,63,160,0.12)]
              backdrop-blur-xl
              sm:flex
            "
          >
            <span className="size-1.5 rounded-full bg-violet-600 shadow-[0_0_8px_rgba(124,58,237,0.6)]" />

            <span className="text-[9px] font-bold text-[#4C4561]">
              Design × Technology
            </span>
          </motion.div>

          {/* ================================================= */}
          {/* MAIN GLASS CONTAINER */}
          {/* ================================================= */}

          <div
            className="
              relative
               mb-12
              overflow-hidden
              rounded-[36px]
              border
              border-white/80
              bg-white/30
              shadow-[0_40px_100px_-42px_rgba(91,63,160,0.32)]
              backdrop-blur-3xl
              backdrop-saturate-[180%]
            "
          >
            {/* Reflection */}
            <div
              aria-hidden
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-white/70
                via-white/10
                to-violet-100/20
              "
            />

            {/* Top highlight */}
            <div
              aria-hidden
              className="
                pointer-events-none
                absolute
                left-[8%]
                right-[8%]
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent
              "
            />

            {/* Ambient glow */}
            <div
              aria-hidden
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[-170px]
                h-[320px]
                w-[70%]
                -translate-x-1/2
                rounded-full
                bg-violet-300/20
                blur-[105px]
              "
            />

            <div className="relative z-10 px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
              {/* ================================================= */}
              {/* SYSTEM HEADER */}
              {/* ================================================= */}

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-3.5 text-violet-600" />

                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-violet-600">
                      DreamDeploy Studio
                    </p>
                  </div>

                  <p className="mt-1 text-[13px] font-semibold text-[#302B40]">
                    From concept to deployment
                  </p>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/80
                    bg-white/55
                    px-3
                    py-1.5
                    shadow-[0_8px_20px_rgba(91,63,160,0.06)]
                    backdrop-blur-xl
                  "
                >
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />

                  <span className="text-[9px] font-semibold text-[#625B79]">
                    Digital engine online
                  </span>
                </div>
              </div>

              {/* ================================================= */}
              {/* DIGITAL SYSTEM */}
              {/* ================================================= */}

              <div className="relative mt-7 min-h-[260px] sm:min-h-[285px]">
                {/* Outer orbit */}
                <motion.div
                  aria-hidden
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 38,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    size-[300px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-violet-200/45
                  "
                >
                  <span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_12px_3px_rgba(139,92,246,0.35)]" />
                </motion.div>

                {/* Inner orbit */}
                <motion.div
                  aria-hidden
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 52,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    size-[400px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-dashed
                    border-violet-200/30
                  "
                >
                  <span className="absolute right-[14%] top-[9%] size-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_12px_3px_rgba(232,121,249,0.35)]" />
                </motion.div>

                {/* Horizontal connector */}
                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-px
                    w-[82%]
                    -translate-x-1/2
                    -translate-y-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-violet-300/45
                    to-transparent
                  "
                />

                {/* Vertical connector */}
                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[82%]
                    w-px
                    -translate-x-1/2
                    -translate-y-1/2
                    bg-gradient-to-b
                    from-transparent
                    via-violet-300/30
                    to-transparent
                  "
                />

                {/* Center card */}
                <motion.div
                  style={{
                    x: systemX,
                    y: systemY,
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    z-20
                    flex
                    size-[150px]
                    -translate-x-1/2
                    -translate-y-1/2
                    flex-col
                    items-center
                    justify-center
                    rounded-[32px]
                    border
                    border-white/90
                    bg-white/65
                    text-center
                    shadow-[0_25px_60px_rgba(91,63,160,0.18)]
                    backdrop-blur-2xl
                  "
                >
                  <div
                    className="
                      relative
                      grid
                      size-11
                      place-items-center
                      rounded-[15px]
                      bg-[#171522]
                      text-white
                      shadow-[0_10px_25px_rgba(23,21,34,0.18)]
                    "
                  >
                    <Bot className="size-5" />

                    <span className="absolute -right-1 -top-1 size-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                  </div>

                  <p className="mt-3 text-[12px] font-extrabold tracking-[-0.02em] text-[#171522]">
                    DreamDeploy
                  </p>

                  <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.12em] text-violet-600">
                    Digital Studio
                  </p>
                </motion.div>

                {/* ================================================= */}
                {/* STAGES */}
                {/* ================================================= */}

                <div className="absolute inset-0">
                  {agencyStages.map((stage, index) => {
                    const Icon = stage.icon;

                    const positions = [
                      "left-[1%] top-1/2 -translate-y-1/2",
                      "left-1/2 top-0 -translate-x-1/2",
                      "right-[1%] top-1/2 -translate-y-1/2",
                      "bottom-0 left-1/2 -translate-x-1/2",
                    ];

                    return (
                      <motion.div
                        key={stage.id}
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.45 + index * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                          scale: 1.05,
                        }}
                        className={`absolute ${positions[index]}`}
                      >
                        <div
                          className="
                            group
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/85
                            bg-white/65
                            px-3
                            py-2
                            shadow-[0_12px_30px_rgba(91,63,160,0.10)]
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:border-violet-200
                            hover:bg-white/80
                            hover:shadow-[0_16px_35px_rgba(91,63,160,0.15)]
                          "
                        >
                          <span
                            className="
                              grid
                              size-7
                              place-items-center
                              rounded-full
                              bg-violet-100
                              text-violet-600
                              transition-transform
                              duration-300
                              group-hover:scale-105
                            "
                          >
                            <Icon className="size-3.5" />
                          </span>

                          <span className="text-[9px] font-bold text-[#4C4561]">
                            {stage.title}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* ================================================= */}
              {/* PROCESS INDICATOR */}
              {/* ================================================= */}

              <div className="mt-5 flex justify-center">
                <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/35 px-4 py-2 backdrop-blur-xl">
                  {agencyStages.map((stage, index) => (
                    <div key={stage.id} className="flex items-center gap-2">
                      <span className="text-[8px] font-semibold uppercase tracking-[0.08em] text-[#716B82]">
                        {stage.title}
                      </span>

                      {index < agencyStages.length - 1 && (
                        <span className="text-[8px] text-violet-300">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* ================================================= */}
              {/* STATS — INSIDE MAIN GLASS */}
              {/* ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  mt-7
                  -mx-5
                  border-t
                  border-white/60
                  bg-white/15
                  px-5
                  pb-2
                  pt-5
                  sm:-mx-8
                  sm:px-8
                  lg:-mx-10
                  lg:px-10
                "
              >
                {/* Stats highlight */}
                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    inset-x-[20%]
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent
                  "
                />

                <div className="mx-auto flex max-w-[620px] items-center justify-center">
                  {workHeroData.stats.map((stat, index) => (
                    <div
                      key={`${stat.label}-${index}`}
                      className="flex flex-1 items-center justify-center"
                    >
                      <div className="px-4 text-center sm:px-8">
                        <p className="text-[21px] font-extrabold tracking-[-0.04em] text-[#171520]">
                          {stat.value}
                        </p>

                        <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#817B91]">
                          {stat.label}
                        </p>
                      </div>

                      {index < workHeroData.stats.length - 1 && (
                        <span className="h-9 w-px bg-white/70" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
