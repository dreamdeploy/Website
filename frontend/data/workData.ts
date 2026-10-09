export const workCategories = [
  "All",
  "Websites",
  "Web Apps",
  "Mobile Apps",
  "Branding",
  "UI/UX",
  "Custom Software",
] as const;

export type WorkCategory = (typeof workCategories)[number];

export interface CaseStudyData {
  overview?: string;
  challenge?: string;
  solution?: string;
  deliverables?: string[];
  techStack?: string[];
}

export interface WorkProject {
  id: string;
  title: string;
  category: Exclude<WorkCategory, "All">;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  featured?: boolean;
  caseStudy?: CaseStudyData;
}

export const workProjects: WorkProject[] = [
  {
    id: "getovr-clothing",
    title: "GetOvr Clothing",
    category: "Websites",
    description:
      "A modern fitness website with class booking and membership management.",
    image: "/images/work-getovr.png",
    tags: ["UI/UX", "Development"],
    link: "https://www.thegetovr.in/",
    featured: true,

    caseStudy: {
      overview:
        "A modern digital experience designed to present the brand and its services through a clean and engaging interface.",

      challenge:
        "The goal was to create a professional online presence with a simple and intuitive user experience.",

      solution:
        "We designed and developed a responsive interface focused on clear content, strong visual hierarchy and smooth interactions.",

      deliverables: [
        "UI/UX Design",
        "Website Development",
        "Responsive Design",
      ],

      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
  },
];

export const workHeroData = {
  eyebrow: "Our Work",

  title: "Digital products",

  titleHighlight: "built for real businesses.",

  description:
    "A collection of websites, apps and digital products we've designed, developed and deployed.",

  stats: [
    {
      value: "30+",
      label: "Projects Delivered",
    },
    {
      value: "20+",
      label: "Happy Clients",
    },
    {
      value: "5+",
      label: "Industries Served",
    },
  ],
};
