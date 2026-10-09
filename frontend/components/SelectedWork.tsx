"use client";

import React from "react";
import { ArrowUpRight, BarChart3, Gem, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { workProjects } from "@/data/workData";
import { FeaturedWorkCard } from "@/components/work/FeaturedWorkCard";

interface SelectedWorkProps {
  onInquireProject: (projectTitle: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onInquireProject,
}) => {
  const featuredProjects = workProjects.filter(
    (project) => project.featured === true,
  );

  return (
    <section
      id="work"
      className="
        relative
        overflow-hidden
        border-t
        border-white/70
        bg-[#F8F6FC]
        py-20
        sm:py-24
        md:py-28
      "
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          -top-48
          h-[520px]
          w-[520px]
          rounded-full
          bg-violet-300/20
          blur-[120px]
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          -top-40
          h-[520px]
          w-[520px]
          rounded-full
          bg-purple-300/20
          blur-[120px]
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          left-1/2
          h-[520px]
          w-[760px]
          -translate-x-1/2
          rounded-full
          bg-violet-300/15
          blur-[130px]
        "
        aria-hidden="true"
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/40 px-5 py-2.5 shadow-[0_10px_30px_rgba(124,58,237,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl backdrop-saturate-150"
          >
            <motion.span
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.65, 1, 0.65],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(124,58,237,0.65)]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-violet-700">
              Selected Work
            </span>
          </motion.div>

          {/* HEADING */}

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              tracking-[-0.04em]
              text-[#171321]
              sm:text-4xl
              md:text-5xl
            "
          >
            Digital work,
            <span className="font-editorial font-normal italic text-[#6D28D9]">
              {" "}
              built with purpose.
            </span>
          </h2>

          {/* TAGLINE */}

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-6
              text-[#6F687C]
            "
          >
            A glimpse of what we build — crafted to move businesses forward.
          </p>
        </div>

        {/* =======================================================
            FLOATING INFO — WHAT WE DO
            MOVED UP
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-[6%]
            hidden
            xl:block
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              rounded-[22px]
              border
              border-white/90
              bg-white/45
              px-4
              py-3
              shadow-[0_15px_45px_rgba(91,63,160,0.08)]
              backdrop-blur-2xl
            "
          >
            <div
              className="
                grid
                size-9
                place-items-center
                rounded-full
                border
                border-white/80
                bg-violet-100/60
                text-violet-600
              "
            >
              <Gem className="size-4" />
            </div>

            <div>
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#6C617B]
                "
              >
                What we do
              </p>

              <p className="mt-0.5 text-[11px] font-semibold text-[#272130]">
                Strategy · Design · Development
              </p>
            </div>
          </div>
        </div>

        {/* =======================================================
            FLOATING INFO — OUR APPROACH
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-[5%]
            hidden
            xl:block
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              rounded-[22px]
              border
              border-white/90
              bg-white/45
              px-4
              py-3
              shadow-[0_15px_45px_rgba(91,63,160,0.08)]
              backdrop-blur-2xl
            "
          >
            <div
              className="
                grid
                size-9
                place-items-center
                rounded-full
                border
                border-white/80
                bg-violet-100/60
                text-violet-600
              "
            >
              <BarChart3 className="size-4" />
            </div>

            <div>
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#6C617B]
                "
              >
                Our approach
              </p>

              <p className="mt-0.5 text-[11px] font-semibold text-[#272130]">
                Real Projects · Real Results
              </p>
            </div>
          </div>
        </div>

        {/* =======================================================
            PROJECTS
            FUTURE-PROOF FLEXIBLE GRID
        ======================================================= */}

        {featuredProjects.length > 0 ? (
          <div
            className="
              mt-12
              flex
              flex-wrap
              justify-center
              gap-7
              sm:mt-14
              lg:gap-8
            "
          >
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="
                  w-full
                  md:w-[calc(50%-14px)]
                  lg:w-[calc(33.333%-22px)]
                "
              >
                <FeaturedWorkCard project={project} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="
              mx-auto
              mt-12
              max-w-xl
              rounded-[28px]
              border
              border-dashed
              border-violet-200
              bg-white/50
              p-12
              text-center
              backdrop-blur-xl
            "
          >
            <p className="text-sm text-zinc-500">
              Featured projects will appear here.
            </p>
          </div>
        )}

        {/* =======================================================
            VIEW ALL WORK
        ======================================================= */}

        <div className="mt-10 flex justify-center">
          <a
            href="/work"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-violet-200/90
              bg-white/60
              px-5
              py-2.5
              text-xs
              font-bold
              text-[#292231]
              no-underline
              shadow-[0_8px_25px_rgba(91,63,160,0.07)]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-violet-300
              hover:bg-white/85
              hover:shadow-[0_12px_30px_rgba(91,63,160,0.12)]
            "
          >
            <span>View all work</span>

            <span
              className="
                flex
                size-7
                items-center
                justify-center
                rounded-full
                bg-[#6D28D9]
                text-white
                shadow-[0_6px_16px_rgba(109,40,217,0.30)]
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
            >
              <ArrowUpRight className="size-3.5" strokeWidth={2.2} />
            </span>
          </a>
        </div>

        {/* =======================================================
            BOTTOM GLASS CTA
        ======================================================= */}
      </div>
    </section>
  );
};
