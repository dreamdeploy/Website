"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  Code2,
  Database,
  Globe,
  Palette,
  Smartphone,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

import type { WorkProject } from "@/data/workData";

interface FeaturedWorkCardProps {
  project: WorkProject;
  index: number;
}

function getCategoryIcon(category: string) {
  const value = category.toLowerCase();

  if (value.includes("mobile")) return Smartphone;
  if (value.includes("branding") || value.includes("ui/ux")) {
    return Palette;
  }
  if (value.includes("software")) return Code2;
  if (value.includes("web app")) return Database;
  if (value.includes("ai")) return Bot;

  return Globe;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.97,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function FeaturedWorkCard({ project, index }: FeaturedWorkCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
        margin: "0px 0px -80px 0px",
      }}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="group relative w-full"
    >
      {/* OUTER GLASS CARD */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/70
          bg-gradient-to-br
          from-white/75
          via-white/55
          to-violet-50/55
          p-3.5
          shadow-[0_25px_60px_-18px_rgba(109,40,217,0.20)]
          backdrop-blur-[28px]
          backdrop-saturate-[180%]
          transition-all
          duration-500
          sm:p-4
          group-hover:border-violet-200/80
          group-hover:shadow-[0_35px_75px_-18px_rgba(109,40,217,0.28)]
        "
      >
        {/* SUBTLE GLASS BORDER */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[30px]
            border
            border-white/40
            opacity-80
          "
          aria-hidden="true"
        />

        {/* IMAGE */}

        <motion.div
          variants={contentVariants}
          className="
            relative
            aspect-[16/10]
            overflow-hidden
            rounded-[25px]
            bg-[#eee9fb]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.1,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="
                (min-width: 1280px) 380px,
                (min-width: 1024px) 31vw,
                (min-width: 768px) 45vw,
                100vw
              "
              priority={index === 0}
              className="
                object-fill
                transition-transform
                duration-1000
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-[1.045]
              "
            />
          </motion.div>

          {/* DARK IMAGE GRADIENT */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-b
              from-black/[0.08]
              via-transparent
              to-[#160d20]/75
            "
          />

          {/* PURPLE LIGHT */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              size-44
              rounded-full
              bg-violet-400/25
              blur-[65px]
              opacity-60
              transition-opacity
              duration-700
              group-hover:opacity-90
            "
            aria-hidden="true"
          />

          {/* TOP CONTROLS */}

          <motion.div
            variants={contentVariants}
            className="
              absolute
              left-4
              right-4
              top-4
              z-10
              flex
              items-center
              justify-between
              sm:left-5
              sm:right-5
              sm:top-5
            "
          >
            {/* CATEGORY */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/30
                bg-[#130d1d]/35
                px-3
                py-1.5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white
                shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                backdrop-blur-xl
              "
            >
              <CategoryIcon
                className="size-3.5 shrink-0 text-white"
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span>{project.category}</span>
            </div>
          </motion.div>

          {/* FEATURED LABEL */}

          <motion.div
            variants={contentVariants}
            className="
              absolute
              bottom-4
              left-4
              z-10
              sm:bottom-5
              sm:left-5
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
                rounded-[16px]
                border
                border-white/25
                bg-[#130d1d]/45
                px-3
                py-2
                shadow-[0_10px_25px_rgba(0,0,0,0.18)]
                backdrop-blur-xl
              "
            >
              <span
                className="
                  text-[21px]
                  font-semibold
                  leading-none
                  tracking-[-0.04em]
                  text-white
                "
              >
                {number}
              </span>

              <span className="h-5 w-px bg-white/25" />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-white/85
                "
              >
                Featured Project
              </span>
            </div>
          </motion.div>

          {/* IMAGE GLOSS */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-white/[0.16]
              via-transparent
              to-transparent
              opacity-70
            "
            aria-hidden="true"
          />
        </motion.div>

        {/* FROSTED CONTENT PANEL */}

        <motion.div
          variants={contentVariants}
          className="
            relative
            z-20
            mx-2
            mt-3
            rounded-[23px]
            border
            border-white/80
            bg-gradient-to-b
            from-white
            to-[#faf8ff]
            p-5
            shadow-[0_12px_30px_-10px_rgba(109,40,217,0.16)]
            sm:mt-4
            sm:p-5
          "
        >
          {/* TITLE */}

          <div className="flex items-start justify-between gap-3">
            <h3
              className="
                min-w-0
                text-[20px]
                font-extrabold
                leading-tight
                tracking-[-0.04em]
                text-[#17131D]
                sm:text-[22px]
              "
            >
              {project.title}
            </h3>

            {project.featured && (
              <span
                className="
                  shrink-0
                  rounded-full
                  border
                  border-violet-200/80
                  bg-violet-50
                  px-2.5
                  py-1
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-violet-700
                "
              >
                Featured
              </span>
            )}
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mt-2.5
              line-clamp-2
              text-[12.5px]
              leading-[1.6]
              text-[#716B7E]
            "
          >
            {project.description}
          </p>

          {/* TAGS */}

          {project.tags.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.2,
                  },
                },
              }}
              className="mt-4 flex flex-wrap gap-1.5"
            >
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.85,
                      y: 8,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    rounded-full
                    border
                    border-violet-100
                    bg-white
                    px-2.5
                    py-1
                    text-[9px]
                    font-semibold
                    text-[#5F586B]
                    shadow-[0_2px_8px_rgba(109,40,217,0.04)]
                  "
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* VIEW PROJECT */}

          {project.link && (
            <motion.div variants={contentVariants} className="mt-5">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/button
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-full
                  border
                  border-violet-200/80
                  bg-white
                  py-1.5
                  pl-4
                  pr-1.5
                  text-[#25202F]
                  no-underline
                  shadow-[0_6px_18px_rgba(109,40,217,0.08)]
                  transition-all
                  duration-300
                  hover:border-violet-300
                  hover:bg-violet-50
                  hover:text-[#25202F]
                  hover:shadow-[0_10px_25px_rgba(109,40,217,0.14)]
                "
              >
                <span
                  className="
                    text-[11px]
                    font-bold
                    tracking-wide
                    text-[#25202F]
                    no-underline
                  "
                >
                  View Project
                </span>

                <span
                  className="
                    flex
                    size-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#6D28D9]
                    text-white
                    shadow-[0_5px_14px_rgba(109,40,217,0.28)]
                    transition-transform
                    duration-300
                    group-hover/button:scale-105
                  "
                >
                  <ArrowUpRight
                    className="
                      size-3.5
                      shrink-0
                      text-white
                      opacity-100
                      transition-transform
                      duration-300
                      group-hover/button:translate-x-0.5
                      group-hover/button:-translate-y-0.5
                    "
                    strokeWidth={2.2}
                  />
                </span>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
}
