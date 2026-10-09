import {
  Database,
  LayoutDashboard,
  Monitor,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  type: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "01",
    title: "Website Development",
    short: "High-performance websites",
    description:
      "Modern websites engineered for speed, clarity, conversion and long-term growth.",
    icon: Monitor,
    type: "website",
    features: ["Responsive", "SEO Ready", "Fast Performance"],
  },
  {
    id: "02",
    title: "Mobile App Development",
    short: "iOS & Android applications",
    description:
      "Beautiful and reliable mobile applications built around your users and business.",
    icon: Smartphone,
    type: "mobile",
    features: ["iOS & Android", "Smooth UX", "Scalable"],
  },
  {
    id: "03",
    title: "Software & Web Apps",
    short: "Custom digital products",
    description:
      "Powerful custom applications designed around your workflow, customers and data.",
    icon: LayoutDashboard,
    type: "software",
    features: ["Custom Logic", "Dashboard", "Real-time"],
  },
  {
    id: "04",
    title: "UI/UX & Branding",
    short: "Designs that stand out",
    description:
      "Premium interfaces and brand systems that make your business look memorable.",
    icon: Palette,
    type: "design",
    features: ["UI Design", "UX Strategy", "Brand Identity"],
  },
  {
    id: "05",
    title: "Backend & APIs",
    short: "Powerful digital infrastructure",
    description:
      "Secure backend systems, APIs and databases that keep your digital products running.",
    icon: Database,
    type: "backend",
    features: ["APIs", "Database", "Security"],
  },
  {
    id: "06",
    title: "AI & Automation",
    short: "Smarter business workflows",
    description:
      "Intelligent automation that reduces repetitive work and helps your business move faster.",
    icon: Sparkles,
    type: "ai",
    features: ["AI Workflows", "Automation", "Insights"],
  },
];
