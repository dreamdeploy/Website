"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

interface ServiceImageMotionProps {
  children: ReactNode;
  className?: string;
}

export function ServiceImageMotion({
  children,
  className = "",
}: ServiceImageMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
    mass: 0.6,
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
    mass: 0.6,
  });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = containerRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    mouseX.set(-percentY * 7);
    mouseY.set(percentX * 7);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
