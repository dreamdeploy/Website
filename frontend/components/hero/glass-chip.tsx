"use client";

import { useRef, type PointerEvent } from "react";
import type { Service } from "@/data/heroData";

export function GlassChip({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--gx", `${x * 100}%`);
    el.style.setProperty("--gy", `${y * 100}%`);
    el.style.transform = `perspective(700px) rotateX(${(0.5 - y) * 22}deg) rotateY(${(x - 0.5) * 26 + service.tilt}deg) scale(1.06)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ transform: `perspective(700px) rotateY(${service.tilt}deg)` }}
      className="glass group relative flex w-[176px] xl:w-[196px] items-center gap-3 overflow-hidden rounded-2xl px-4 py-3.5 transition-[transform,box-shadow] duration-300 ease-out hover:shadow-[0_24px_60px_-18px_rgba(124,58,237,0.65)]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(160px circle at var(--gx, 50%) var(--gy, 50%), rgba(167,139,250,0.45), transparent 70%)",
        }}
      />
      <span className="relative grid size-10 shrink-0 place-items-center rounded-xl bg-white/80 text-violet-brand shadow-[0_6px_18px_-6px_rgba(124,58,237,0.6)] transition-transform duration-300 group-hover:scale-110">
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="relative text-sm leading-tight font-semibold text-ink">
        {service.title}
      </span>
    </div>
  );
}
