import { Code2, Palette, ShoppingBag, Smartphone } from "lucide-react";

export const founders = [
  {
    id: "shivdeep",
    name: "SHIVDEEP RAINA",
    designation: "FOUNDER — TECHNOLOGY & PRODUCT",
    socials: {
      instagram: "#",
      linkedin: "#",
    },
    facts: [
      "Builds the things that make the idea real.",
      "Lives somewhere between code and caffeine.",
      "Always thinking about the next product.",
      "Turns “idea hai” into “deployed hai”.",
      "Probably fixing something right now.",
    ],
    tags: ["DEVELOPMENT", "PRODUCT", "TECH"],
    image: "/images/founders/shivdeep.png",
    icon: Code2,
  },

  {
    id: "dikshit",
    name: "DIKSHIT SHARMA",
    designation: "FOUNDER — CREATIVE & BUSINESS",
    socials: {
      instagram: "#",
      linkedin: "#",
    },
    facts: [
      "Turns ideas into things people actually notice.",
      "Always thinking about the bigger picture.",
      "Talks business, branding and growth.",
      "Believes good work should look as good as it works.",
      "Probably planning the next big thing.",
    ],
    tags: ["BRANDING", "BUSINESS", "GROWTH"],
    image: "/images/founders/dikshit.png",
    icon: Palette,
  },
];

export const aboutStats = [
  {
    value: "03+",
    title: "PROJECTS BUILT",
    description: "Websites, Apps, E-commerce",
    icon: Code2,
    iconClass: "bg-violet-100 text-violet-600",
  },
  {
    value: "02",
    title: "FOUNDERS",
    description: "Technology & Business",
    icon: Smartphone,
    iconClass: "bg-orange-100 text-orange-500",
  },
  {
    value: "10+",
    title: "TECHNOLOGIES",
    description: "Modern & Scalable Stack",
    icon: ShoppingBag,
    iconClass: "bg-emerald-100 text-emerald-600",
  },
  {
    value: "100%",
    title: "CLIENT FOCUS",
    description: "Real Business Growth",
    icon: Palette,
    iconClass: "bg-pink-100 text-pink-500",
  },
];

export const aboutWork = [
  {
    title: "The GetOvr",
    category: "E-commerce / SaaS Website",
    image: "/images/work-getovr.png",
  },
  {
    title: "Web Envolve",
    category: "Web Platform",
    image: "/images/work-webenvolve.png",
  },
  {
    title: "Raina Digital Solutions",
    category: "Business Website",
    image: "/images/work-raina.png",
  },
  {
    title: "Food Delivery App",
    category: "Mobile Application",
    image: "/images/food-delivery.png",
  },
];
