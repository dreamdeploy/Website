"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { WorkProject } from "@/data/workData";
import { WorkCard } from "./WorkCard";

interface WorkGridProps {
  projects: WorkProject[];
}

export function WorkGrid({ projects }: WorkGridProps) {
  return (
    <motion.div
      layout
      className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <motion.div
            layout
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              duration: 0.4,
              delay: index * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <WorkCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
