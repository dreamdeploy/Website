"use client";

import { useMemo, useState } from "react";

import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";

import { WorkHero } from "@/components/work/WorkHero";
import { WorkFilters } from "@/components/work/WorkFilters";
import { WorkGrid } from "@/components/work/WorkGrid";
import { WorkCTA } from "@/components/work/WorkCTA";

import { workProjects, type WorkCategory } from "@/data/workData";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("All");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(workProjects.map((project) => project.category)),
    );

    return ["All", ...uniqueCategories] as WorkCategory[];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return workProjects;
    }

    return workProjects.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#faf8ff] text-[#13131a]">
      <Navbar />

      <WorkHero />

      <section className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <WorkFilters
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <WorkGrid projects={filteredProjects} />
      </section>

      <WorkCTA />

      <Footer />
    </main>
  );
}
