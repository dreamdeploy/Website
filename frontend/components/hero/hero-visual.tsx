"use client";

import { useRef, type PointerEvent, type RefObject } from "react";
import { SERVICES, type Project } from "@/data/heroData";
import { parallax, type DragState } from "@/lib/use-pointer-parallax";
import { GlassChip } from "./glass-chip";
import { LaptopShowcase } from "./laptop-showcase";

type Props = {
  drag: RefObject<DragState>;
  projects: Project[];
  active: number;
  onSelect: (index: number) => void;
};

export function HeroVisual({ drag, projects, active, onSelect }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button, a")) return;

    const d = drag.current;

    d.active = true;
    d.startX = e.clientX - d.x;
    d.startY = e.clientY - d.y;

    e.currentTarget.setPointerCapture(e.pointerId);
    stageRef.current?.setAttribute("data-dragging", "true");
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;

    if (!d.active) return;

    d.x = Math.max(-240, Math.min(240, e.clientX - d.startX));

    d.y = Math.max(-120, Math.min(120, e.clientY - d.startY));
  };

  const endDrag = () => {
    drag.current.active = false;
    stageRef.current?.removeAttribute("data-dragging");
  };

  return (
    <div className="relative flex min-h-0 w-full items-center [container-type:inline-size]">
      <div
        ref={stageRef}
        role="group"
        aria-label="Interactive DreamDeploy showcase. Drag to explore."
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="relative mx-auto aspect-[1/0.92] w-full max-w-[860px] cursor-grab touch-pan-y select-none data-[dragging]:cursor-grabbing"
      >
        {/* Laptop Showcase */}
        <div
          className="absolute top-[4%] left-[8%] w-[70%] sm:left-[10%] lg:left-[8%]"
          style={parallax(12)}
        >
          <LaptopShowcase
            projects={projects}
            active={active}
            onSelect={onSelect}
          />
        </div>

        {/* Desktop Services */}
        <ul aria-label="Our services" className="hidden lg:block">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className={`absolute ${service.position}`}
              style={parallax(service.depth)}
            >
              <div
                className="[animation:float-y_6s_ease-in-out_infinite]"
                style={{
                  animationDelay: service.delay,
                }}
              >
                <GlassChip service={service} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Services */}
      <ul
        aria-label="Our services"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:hidden"
      >
        {SERVICES.map((service) => {
          const Icon = service.icon;

          return (
            <li
              key={service.title}
              className="glass flex shrink-0 items-center gap-2 rounded-full py-2 pr-4 pl-2"
            >
              <span className="grid size-7 place-items-center rounded-full bg-white text-violet-brand">
                <Icon className="size-4" aria-hidden />
              </span>

              <span className="text-xs font-semibold whitespace-nowrap text-ink">
                {service.title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
