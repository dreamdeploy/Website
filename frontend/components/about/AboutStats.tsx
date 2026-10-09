"use client";

import { motion } from "framer-motion";
import { aboutStats } from "@/data/aboutData";

export function AboutStats() {
  return (
    <section className="relative bg-[#F8F7FF] px-5 pb-16 sm:px-8 sm:pb-20">
      <div
        className="
          mx-auto
          grid
          max-w-[1280px]
          overflow-hidden
          rounded-[28px]
          border
          border-white/80
          bg-white/35
          shadow-[0_20px_60px_-30px_rgba(91,63,160,0.2)]
          backdrop-blur-2xl
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {aboutStats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.title}
              initial={{
                opacity: 0,
                y: 20,
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
                delay: index * 0.08,
              }}
              className="
                flex
                items-center
                gap-4
                border-b
                border-violet-100/70
                p-6
                last:border-b-0
                sm:border-r
                sm:last:border-r-0
                lg:border-b-0
                lg:p-7
              "
            >
              <div
                className={`
                  grid
                  size-12
                  shrink-0
                  place-items-center
                  rounded-full
                  ${stat.iconClass}
                `}
              >
                <Icon className="size-5" />
              </div>

              <div>
                <p className="text-[29px] font-extrabold leading-none tracking-[-0.04em] text-[#10101C]">
                  {stat.value}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#292433]">
                  {stat.title}
                </p>

                <p className="mt-0.5 text-[9px] text-[#817B98]">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
