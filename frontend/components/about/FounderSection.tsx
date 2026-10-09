"use client";

import { motion } from "framer-motion";
import { founders } from "@/data/aboutData";
import { FounderCard } from "./FounderCard";

export function FounderSection() {
  return (
    <section
      id="founders"
      className="
        relative
        overflow-hidden
        bg-[#F8F7FF]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Ambient shapes */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          size-72
          rounded-full
          bg-violet-200/30
          blur-[90px]
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          size-80
          rounded-full
          bg-fuchsia-200/30
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 text-center"
        >
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-100
              bg-white/75
              px-3.5
              py-2
              shadow-[0_8px_25px_rgba(109,40,217,0.07)]
              backdrop-blur-md
            "
          >
            <span className="size-2 rounded-full bg-violet-600" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#625B79]
              "
            >
              Meet The Founders
            </span>
          </div>

          <h2
            className="
              mx-auto
              max-w-[700px]
              text-[42px]
              font-extrabold
              leading-[0.98]
              tracking-[-0.055em]
              text-[#10101C]
              sm:text-[55px]
            "
          >
            The people behind the
            <br />
            <span
              className="
                font-editorial
                font-normal
                italic
                text-[#6635E8]
              "
            >
              deployment.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-[14px] text-[#716B92] sm:text-[15px]">
            Two founders. One vision — turning ideas into digital products that
            actually work.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-2">
          {founders.map((founder, index) => (
            <FounderCard key={founder.id} founder={founder} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
