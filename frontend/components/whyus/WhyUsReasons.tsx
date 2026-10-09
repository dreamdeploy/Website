"use client";

import { motion } from "framer-motion";
import { whyUsReasons } from "@/data/whyUsData";

export function WhyUsReasons() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7FF]  py-14 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/80 px-3.5 py-2 shadow-[0_6px_20px_rgba(109,40,217,0.06)]">
              <span className="size-2 rounded-full bg-violet-600" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#625B79]">
                Key Reasons
              </span>
            </div>

            <h2 className="text-[36px] font-extrabold leading-[1.02] tracking-[-0.045em] text-[#11111C] sm:text-[43px]">
              Why businesses choose
              <br />
              <span className="font-editorial font-normal italic text-[#6635E8]">
                DreamDeploy.
              </span>
            </h2>
          </div>

          <p className="max-w-[410px] text-[14px] leading-6 text-[#716B92] md:justify-self-end">
            We focus on what actually matters — your business goals, not just
            the technical requirements.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsReasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="
                  rounded-[22px]
                  border border-white
                  bg-white/75
                  p-6
                  shadow-[0_12px_35px_rgba(109,40,217,0.07)]
                  backdrop-blur-xl
                  transition-shadow duration-300
                  hover:shadow-[0_20px_45px_rgba(109,40,217,0.13)]
                "
              >
                <div className="mb-7 grid size-12 place-items-center rounded-full bg-violet-100/80 shadow-[0_8px_22px_rgba(109,40,217,0.12)]">
                  <Icon className="size-6 text-violet-600" strokeWidth={2.2} />
                </div>

                <h3 className="text-[17px] font-bold tracking-[-0.025em] text-[#15131F]">
                  {reason.title}
                </h3>

                <p className="mt-2 text-[13px] leading-5 text-[#716B92]">
                  {reason.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
