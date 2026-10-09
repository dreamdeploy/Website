"use client";

import { ArrowUpRight } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";

interface Founder {
  id: string;
  name: string;
  designation: string;
  socials: {
    instagram: string;
    linkedin: string;
  };
  facts: string[];
  tags: string[];
  image: string;
  icon: React.ElementType;
}

interface FounderCardProps {
  founder: Founder;
  index: number;
}

const containerVariants: Variants = {
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
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function FounderCard({ founder, index }: FounderCardProps) {
  const Icon = founder.icon;

  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.18,
        margin: "0px 0px -60px 0px",
      }}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/80
        bg-white/35
        p-5
        shadow-[0_25px_70px_-30px_rgba(91,63,160,0.28)]
        backdrop-blur-2xl
        backdrop-saturate-[180%]
        transition-shadow
        duration-500
        hover:bg-white/45
        hover:shadow-[0_35px_80px_-25px_rgba(91,63,160,0.35)]
        sm:p-6
      "
    >
      {/* Glass shine */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/60
          via-transparent
          to-violet-100/20
        "
      />

      {/* Glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          size-60
          rounded-full
          bg-violet-300/20
          blur-[70px]
        "
      />

      <div className="relative z-10">
        {/* Top */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between gap-3"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white
              bg-white/65
              px-3
              py-2
              shadow-[0_6px_20px_rgba(109,40,217,0.08)]
              backdrop-blur-xl
            "
          >
            <motion.span
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.35 + index * 0.12,
                duration: 0.5,
                type: "spring",
                stiffness: 220,
                damping: 14,
              }}
              className="
                grid
                size-7
                place-items-center
                rounded-full
                bg-violet-600
                text-white
                shadow-[0_5px_15px_rgba(124,58,237,0.3)]
              "
            >
              <Icon className="size-3.5" />
            </motion.span>

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-violet-700
              "
            >
              {founder.designation}
            </span>
          </div>

          <motion.span
            variants={itemVariants}
            className="
              hidden
              rounded-full
              border
              border-white
              bg-white/60
              px-3
              py-2
              text-[10px]
              font-bold
              text-violet-700
              sm:block
            "
          >
            0{index + 1}
          </motion.span>
        </motion.div>

        {/* Main content */}
        <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_0.8fr]">
          <div>
            {/* Name */}
            <motion.h3
              variants={itemVariants}
              className="
                text-[29px]
                font-extrabold
                leading-none
                tracking-[-0.045em]
                text-[#10101C]
                sm:text-[32px]
              "
            >
              {founder.name}
            </motion.h3>

            {/* Socials */}
            <motion.div
              variants={itemVariants}
              className="mt-4 flex flex-wrap gap-2"
            >
              <a
                href={founder.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white
                  bg-white/70
                  px-3
                  py-2
                  text-[9px]
                  font-bold
                  text-[#292433]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white
                  hover:shadow-[0_8px_20px_rgba(109,40,217,0.10)]
                "
              >
                <IoLogoInstagram className="size-3.5 text-pink-500" />
                INSTAGRAM
                <ArrowUpRight className="size-3" />
              </a>

              <a
                href={founder.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white
                  bg-white/70
                  px-3
                  py-2
                  text-[9px]
                  font-bold
                  text-[#292433]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white
                  hover:shadow-[0_8px_20px_rgba(109,40,217,0.10)]
                "
              >
                <FaLinkedinIn className="size-3.5 text-blue-600" />
                LINKEDIN
                <ArrowUpRight className="size-3" />
              </a>
            </motion.div>

            {/* Facts */}
            <motion.div variants={itemVariants} className="mt-6">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-violet-600
                "
              >
                100% Verified Facts
              </p>

              <div className="my-3 h-px bg-violet-100" />

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.09,
                      delayChildren: 0.25,
                    },
                  },
                }}
                className="space-y-2.5"
              >
                {founder.facts.map((fact) => (
                  <motion.li
                    key={fact}
                    variants={itemVariants}
                    className="
                      flex
                      items-start
                      gap-2.5
                      text-[11px]
                      leading-4
                      text-[#514B67]
                    "
                  >
                    <motion.span
                      initial={{ scale: 0, rotate: -30 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        type: "spring",
                      }}
                      className="
                        mt-0.5
                        text-[15px]
                        font-bold
                        text-violet-500
                      "
                    >
                      ✱
                    </motion.span>

                    <span>{fact}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.35,
                  },
                },
              }}
              className="mt-5 flex flex-wrap gap-2"
            >
              {founder.tags.map((tag) => (
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
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    rounded-full
                    border
                    border-white
                    bg-white/60
                    px-3
                    py-1.5
                    text-[8px]
                    font-bold
                    tracking-[0.12em]
                    text-violet-700
                  "
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Founder image */}
          <motion.div
            variants={imageVariants}
            className="
              relative
              min-h-[250px]
              overflow-hidden
              rounded-[24px]
              bg-gradient-to-br
              from-violet-100/80
              via-white/20
              to-violet-200/50
            "
          >
            {/* Image glow */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                size-48
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-violet-300/35
                blur-[45px]
              "
            />

            <motion.img
              src={founder.image}
              alt={founder.name}
              initial={{
                opacity: 0,
                scale: 1.12,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                bottom-0
                left-1/2
                z-10
                h-full
                w-full
                -translate-x-1/2
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.04]
              "
            />

            {/* Floating badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.65,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                bottom-4
                right-4
                z-20
                rounded-2xl
                border
                border-white/80
                bg-white/55
                px-4
                py-3
                shadow-[0_12px_30px_rgba(109,40,217,0.16)]
                backdrop-blur-xl
              "
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-violet-700">
                {index === 0 ? "IDEA" : "IDEAS"}
              </p>

              <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#22202C]">
                {index === 0 ? "CODE" : "BRAND"}
              </p>

              <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#22202C]">
                {index === 0 ? "DEPLOY" : "GROW"}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
