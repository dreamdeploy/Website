"use client";

import type { WorkCategory } from "@/data/workData";

interface WorkFiltersProps {
  categories: WorkCategory[];
  activeCategory: WorkCategory;
  onChange: (category: WorkCategory) => void;
}

export function WorkFilters({
  categories,
  activeCategory,
  onChange,
}: WorkFiltersProps) {
  return (
    <div className="mx-auto mt-12 flex w-fit max-w-full overflow-x-auto rounded-full border border-violet-100 bg-white/70 p-1.5 shadow-[0_8px_30px_rgba(91,63,160,0.08)] backdrop-blur-md [scrollbar-width:none]">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={`shrink-0 rounded-full px-5 py-2.5 text-[12px] font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-violet-600 text-white shadow-[0_5px_18px_rgba(124,58,237,0.28)]"
              : "text-[#625d78] hover:bg-violet-50 hover:text-violet-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
