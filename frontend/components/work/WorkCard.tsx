"use client";

import { ArrowUpRight } from "lucide-react";
import type { WorkProject } from "@/data/workData";

interface WorkCardProps {
  project: WorkProject;
  index?: number;
}

export function WorkCard({ project, index = 0 }: WorkCardProps) {
  return (
    <article className="group">
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border border-[#e8e3f2]
          bg-[#faf9fd]
          p-3
          shadow-[0_15px_50px_rgba(79,58,125,0.07)]
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:-translate-y-1
          group-hover:shadow-[0_25px_65px_rgba(79,58,125,0.12)]
        "
      >
        {/* IMAGE */}
        <div
          className="
            relative
            aspect-[16/10]
            overflow-hidden
            rounded-[21px]
            bg-[#eeeaf6]
          "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
              h-full
              w-full
              object-fill
              transition-transform
              duration-[1000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.035]
            "
          />

          {/* Soft image tint */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-tr
              from-violet-950/[0.08]
              via-transparent
              to-white/[0.12]
            "
          />

          {/* Number */}
          <span
            className="
              absolute
              left-5
              top-5
              flex
              size-9
              items-center
              justify-center
              rounded-full
              border border-white/70
              bg-white/55
              text-[10px]
              font-bold
              text-[#4e4760]
              shadow-[0_6px_20px_rgba(50,40,80,0.08)]
              backdrop-blur-xl
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* CONTENT */}
        <div className="px-3 pb-2 pt-5 sm:px-4">
          <div className="flex items-start justify-between gap-5">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-violet-500" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-violet-600
                  "
                >
                  {project.category}
                </span>
              </div>

              <h3
                className="
                  mt-2.5
                  text-[24px]
                  font-extrabold
                  leading-none
                  tracking-[-0.045em]
                  text-[#17141f]
                  transition-colors
                  duration-300
                  group-hover:text-violet-700
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  mt-3
                  max-w-[420px]
                  text-[13px]
                  leading-[1.6]
                  text-[#777083]
                "
              >
                {project.description}
              </p>
            </div>

            {/* Desktop action */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="
                  mt-1
                  hidden
                  size-10
                  shrink-0
                  place-items-center
                  rounded-full
                  border border-[#e4deef]
                  bg-white
                  text-[#332c43]
                  transition-all
                  duration-400
                  sm:grid
                  group-hover:border-violet-300
                  group-hover:bg-violet-600
                  group-hover:text-white
                "
              >
                <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border border-[#e8e2f1]
                  bg-[#f7f4fb]
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  text-[#625a70]
                  transition-all
                  duration-300
                  group-hover:border-violet-200
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
