"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface ServiceScrollMotionProps {
  children: React.ReactNode;
}

export function ServiceScrollMotion({ children }: ServiceScrollMotionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 0.5, 1], [90, 0, -70]);
  const scaleRaw = useTransform(scrollYProgress, [0, 0.45, 1], [0.9, 1, 0.96]);
  const rotateRaw = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -3]);
  const opacityRaw = useTransform(
    scrollYProgress,
    [0, 0.18, 0.85, 1],
    [0, 1, 1, 0.9],
  );

  const y = useSpring(yRaw, {
    stiffness: 100,
    damping: 25,
    mass: 0.8,
  });

  const scale = useSpring(scaleRaw, {
    stiffness: 100,
    damping: 25,
    mass: 0.8,
  });

  const rotateX = useSpring(rotateRaw, {
    stiffness: 100,
    damping: 25,
    mass: 0.8,
  });

  const opacity = useSpring(opacityRaw, {
    stiffness: 100,
    damping: 25,
    mass: 0.8,
  });

  return (
    <div ref={ref} className="relative h-full w-full [perspective:1200px]">
      <motion.div
        style={{
          y,
          scale,
          rotateX,
          opacity,
          transformPerspective: 1200,
        }}
        className="relative h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
