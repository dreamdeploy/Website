import {
  Bot,
  Code2,
  Database,
  Globe,
  Palette,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  name: string;
  category: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    name: "The GetOvr",
    category: "SaaS Website",
    image: "/images/work-getovr.png",
  },
  {
    name: "Web Envolve",
    category: "Analytics Platform",
    image: "/images/work-webenvolve.png",
  },
  {
    name: "Raina Digital",
    category: "E-commerce Store",
    image: "/images/work-raina.png",
  },
];

export type Service = {
  title: string;
  icon: LucideIcon;
  position: string;
  depth: number;
  tilt: number;
  delay: string;
};

export const SERVICES: Service[] = [
  {
    title: "Website Development",
    icon: Globe,
    position: "left-[-14%] top-[6%]",
    depth: 26,
    tilt: -8,
    delay: "0s",
  },
  {
    title: "UI/UX & Branding",
    icon: Palette,
    position: "left-[-16%] top-[30%]",
    depth: 34,
    tilt: -6,
    delay: "1.2s",
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    position: "right-[0%] top-[4%]",
    depth: 30,
    tilt: 6,
    delay: "0.6s",
  },
  {
    title: "Custom Software",
    icon: Code2,
    position: "right-[-3%] top-[30%]",
    depth: 22,
    tilt: 8,
    delay: "1.8s",
  },
  {
    title: "Backend & APIs",
    icon: Database,
    position: "right-[0%] top-[51%]",
    depth: 38,
    tilt: 7,
    delay: "0.9s",
  },
  {
    title: "AI & Automation",
    icon: Bot,
    position: "left-[15%] top-[55%]",
    depth: 28,
    tilt: -4,
    delay: "2.4s",
  },
];

/* export const STATS = [
  { value: 50, suffix: "+", label: "Businesses Empowered" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
]; */

export const NAV_LINKS = [
  "Home",
  "Services",
  "Work",
  "Why Us",
  "Process",
  "Calculator",
  "About",
];
