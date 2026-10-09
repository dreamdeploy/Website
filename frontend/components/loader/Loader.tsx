"use client";

import { motion } from "framer-motion";

export function Loader() {
  return (
    <main className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-[#f7f4ff]">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          size-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-300/20
          blur-[110px]
        "
      />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="relative grid size-24 place-items-center">
          {/* Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
              rounded-full
              border
              border-violet-300/40
            "
          >
            <span
              className="
                absolute
                -top-1
                left-1/2
                size-2
                -translate-x-1/2
                rounded-full
                bg-violet-500
                shadow-[0_0_14px_rgba(139,92,246,0.8)]
              "
            />
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              grid
              size-16
              place-items-center
              rounded-[20px]
              bg-gradient-to-br
              from-violet-600
              to-purple-500
              text-3xl
              font-black
              tracking-[-0.08em]
              text-white
              shadow-[0_18px_45px_rgba(124,58,237,0.28)]
            "
          >
            D
          </motion.div>
        </div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-7 text-center"
        >
          <h1 className="text-[17px] font-extrabold tracking-[0.2em] text-[#17131f]">
            DREAMDEPLOY
          </h1>

          <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-violet-500">
            Digital Studio
          </p>
        </motion.div>

        {/* Loading */}
        <div className="mt-10 w-48">
          <div className="h-[2px] overflow-hidden rounded-full bg-violet-100">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-full
                w-1/2
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-violet-500
                to-transparent
              "
            />
          </div>

          <p className="mt-3 text-center text-[9px] font-medium tracking-[0.14em] text-[#9b94a6]">
            LOADING EXPERIENCE
          </p>
        </div>
      </div>
    </main>
  );
}
