"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/data/heroData";
import { usePointerParallax } from "@/lib/use-pointer-parallax";
import { AmbientBackground } from "./ambient-background";
import { FeaturedWorkCard } from "./featured-work-card";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./hero-visual";
import { ScrollIndicator } from "./scroll-indicator";
import { TrustedBy } from "./trusted-by";
import { HeroEntrance } from "../animations/HeroEntrance";

const ROTATE_MS = 5000;

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export function Hero({ onStartProject, onExploreWork }: HeroProps) {
  const rootRef = useRef<HTMLElement>(null);
  const drag = usePointerParallax(rootRef);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setTimeout(
      () => setActive((i) => (i + 1) % PROJECTS.length),
      ROTATE_MS,
    );

    return () => window.clearTimeout(id);
  }, [active]);

  const next = useCallback(
    () => setActive((i) => (i + 1) % PROJECTS.length),
    [],
  );

  return (
    <section
      ref={rootRef}
      aria-label="DreamDeploy introduction"
      className="relative isolate flex min-h-svh flex-col overflow-hidden"
    >
      <AmbientBackground />

      <div
        className="relative mx-auto grid w-full
        max-w-[1440px] flex-1 items-center gap-6
        px-5 pt-28 sm:px-8
        lg:grid-cols-[1fr_1.15fr]
        lg:gap-4 lg:px-6 lg:pt-0"
      >
        <HeroEntrance variant="content">
          <HeroContent
            onStartProject={onStartProject}
            onExploreWork={onExploreWork}
          />
        </HeroEntrance>

        <HeroEntrance
          variant="visual"
          delay={0.18}
          className="relative top-10 min-h-0 min-w-0 lg:top-25"
        >
          <HeroVisual
            drag={drag}
            projects={PROJECTS}
            active={active}
            onSelect={setActive}
          />
        </HeroEntrance>
      </div>

      <HeroEntrance
        variant="bottom"
        delay={0.4}
        className="relative mx-auto flex
        w-full max-w-[1440px] flex-col gap-6 px-5
        pt-6 pb-6 sm:px-8 lg:flex-row lg:items-end
        lg:justify-between
        lg:px-14 lg:pb-0 lg:-top-36"
      >
        <FeaturedWorkCard
          projects={PROJECTS}
          active={active}
          duration={ROTATE_MS}
          onNext={next}
        />

        <TrustedBy />

        <ScrollIndicator />
      </HeroEntrance>
    </section>
  );
}
