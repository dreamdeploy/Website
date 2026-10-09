import { ArrowRight, BarChart3, Play, Sprout, Target } from "lucide-react";
import { motion } from "framer-motion";
/* import { STATS } from "@/lib/hero-data"; */
import { CountUp } from "./count-up";
import { MagneticButton } from "../common/magnetic-button";
/*  
const STAT_ICONS = [Sprout, Target, BarChart3]; */

interface HeroContentProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export function HeroContent({
  onStartProject,
  onExploreWork,
}: HeroContentProps) {
  return (
    <div className="relative z-10 max-w-2xl lg:-top-10">
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.8,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-2 text-[clamp(2.4rem,10.5vw,5.75rem)] leading-[0.95]  
      font-extrabold tracking-[-0.045em] text-ink lg:text-[clamp(3rem,4.8vw,5.2rem)]"
      >
        Your Dream.
        <br />
        <span className="whitespace-nowrap">
          Our{" "}
          <span className="bg-gradient-to-r from-violet-800 via-violet-brand to-fuchsia-500 bg-clip-text text-transparent">
            Deployment.
          </span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
      >
        We design, develop and deploy digital products that help businesses grow
        — websites, mobile apps, custom software, branding and intelligent
        automation, all under one roof.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.48,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
      >
        <MagneticButton
          href="#contact"
          className="inline-flex h-14 items-center gap-3 rounded-full bg-ink px-8 text-base font-semibold text-white shadow-[0_18px_40px_-14px_rgba(14,11,36,0.9)] hover:shadow-[0_22px_50px_-12px_rgba(124,58,237,0.7)]"
        >
          Start a Project
          <ArrowRight
            className="size-5 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </MagneticButton>

        <MagneticButton
          href="#work"
          strength={0.25}
          className="glass inline-flex h-14 items-center gap-3 rounded-full px-7 text-base font-semibold text-ink"
        >
          <span className="grid size-8 place-items-center rounded-full bg-ink text-white transition-transform group-hover:scale-110">
            <Play className="size-3.5 fill-current" aria-hidden />
          </span>
          Watch Our Work
        </MagneticButton>
      </motion.div>

      {/* <dl className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-ink/10"> 
        {STATS.map((stat, i) => { 
          const Icon = STAT_ICONS[i]; 
          return ( 
            <div 
              key={stat.label} 
              className="flex flex-col gap-2 px-3 first:pl-0 sm:flex-row sm:items-start sm:gap-3 sm:px-5" 
            > 
              <span 
                className="grid size-10 shrink-0 place-items-center rounded-full bg-white/70 text-violet-brand shadow-sm" 
                aria-hidden 
              > 
                <Icon className="size-5" /> 
              </span> 
              <div> 
                <dt className="sr-only">{stat.label}</dt> 
                <dd className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"> 
                  <CountUp end={stat.value} suffix={stat.suffix} /> 
                </dd> 
                <p 
                  aria-hidden 
                  className="mt-0.5 text-xs leading-tight text-muted-foreground sm:text-sm" 
                > 
                  {stat.label} 
                </p> 
              </div> 
            </div> 
          ); 
        })} 
      </dl> */}
    </div>
  );
}
