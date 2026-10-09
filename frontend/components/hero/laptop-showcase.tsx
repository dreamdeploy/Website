import Image from "next/image";
import type { Project } from "@/data/heroData";
import { cn } from "@/lib/utils";

type Props = {
  projects: Project[];
  active: number;
  onSelect: (index: number) => void;
};

export function LaptopShowcase({ projects, active, onSelect }: Props) {
  const current = projects[active];

  return (
    <div className="[perspective:1400px]">
      <div className="[transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)] [transform-style:preserve-3d]">
        <div className="rounded-[1.6cqw] bg-gradient-to-b from-[#26223a] to-[#0b0918] p-[1.1cqw] shadow-[0_40px_80px_-30px_rgba(14,11,36,0.9)] ring-1 ring-white/10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[0.8cqw] bg-ink">
            {projects.map((project, i) => (
              <Image
                key={project.name}
                src={project.image}
                alt={
                  i === active
                    ? `${project.name} — ${project.category} built by DreamDeploy`
                    : ""
                }
                aria-hidden={i !== active}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority={i === 0}
                className={cn(
                  "h-full w-full object-fill transition-[opacity,transform] duration-1000 ease-out",
                  i === active
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0",
                )}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div
              key={current.name}
              className="absolute bottom-[4%] left-[4%] [animation:fade-up_0.6s_ease-out_both]"
              aria-live="polite"
            >
              <p className="text-[1.1cqw] font-semibold tracking-[0.2em] text-violet-300 uppercase">
                {current.category}
              </p>
              <p className="text-[2.6cqw] leading-tight font-extrabold text-white">
                {current.name}
              </p>
            </div>
            <div className="absolute right-[4%] bottom-[5%] flex gap-[0.6cqw]">
              {projects.map((project, i) => (
                <button
                  key={project.name}
                  type="button"
                  onClick={() => onSelect(i)}
                  aria-label={`Show ${project.name}`}
                  aria-pressed={i === active}
                  className={cn(
                    "h-[0.8cqw] min-h-1.5 rounded-full transition-all duration-500",
                    i === active
                      ? "w-[3cqw] bg-white"
                      : "w-[0.8cqw] min-w-1.5 bg-white/40 hover:bg-white/70",
                  )}
                />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />
          </div>
        </div>
        <div className="relative mx-auto h-[2cqw] w-[112%] -translate-x-[5.4%] rounded-b-[2cqw] bg-gradient-to-b from-[#3a3550] via-[#1a1729] to-[#0b0918] shadow-[0_30px_40px_-20px_rgba(14,11,36,0.9)]">
          <div className="mx-auto h-[0.7cqw] w-[16%] rounded-b-lg bg-[#0b0918]" />
        </div>
      </div>
    </div>
  );
}
