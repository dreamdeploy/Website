import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/heroData";

type Props = {
  projects: Project[];
  active: number;
  duration: number;
  onNext: () => void;
};

export function FeaturedWorkCard({
  projects,
  active,
  duration,
  onNext,
}: Props) {
  const project = projects[active];

  return (
    <article className="glass-dark relative flex w-full items-center gap-4 overflow-hidden rounded-3xl p-3 pr-4 text-white lg:max-w-[400px]">
      <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/15 sm:w-32">
        <Image
          key={project.image}
          src={project.image}
          alt=""
          fill
          sizes="128px"
          className="h-full w-full object-fill [animation:fade-up_0.6s_ease-out_both]"
        />
      </div>
      <div
        key={project.name}
        className="min-w-0 flex-1 [animation:fade-up_0.6s_ease-out_both]"
        aria-live="polite"
      >
        <p className="text-xs font-medium text-white/60">
          Featured Work · {active + 1}/{projects.length}
        </p>
        <h2 className="mt-1 truncate text-lg font-bold">{project.name}</h2>
        <p className="truncate text-xs text-violet-300">{project.category}</p>
      </div>
      <button
        type="button"
        onClick={onNext}
        aria-label="Show next featured project"
        className="grid size-12 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 transition-all hover:bg-violet-brand hover:ring-violet-400"
      >
        <ArrowRight className="size-5" aria-hidden />
      </button>
      <span
        key={`progress-${active}`}
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-violet-400 to-fuchsia-400"
        style={{ animation: `progress ${duration}ms linear both` }}
      />
    </article>
  );
}
