"use client";

import { ProjectFilterCategory } from "@/data/projects";

interface ProjectFilterProps {
  currentFilter: ProjectFilterCategory;
  onSelectFilter: (category: ProjectFilterCategory) => void;
}

const FILTERS: { id: ProjectFilterCategory; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "ai", label: "AI / ML" },
  { id: "vision", label: "VISION" },
  { id: "web", label: "WEB" },
  { id: "systems", label: "SYSTEMS / ECE" },
];

export default function ProjectFilter({
  currentFilter,
  onSelectFilter,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 font-mono text-xs" role="tablist" aria-label="Project Categories">
      {FILTERS.map((filter) => {
        const isActive = currentFilter === filter.id;
        return (
          <button
            key={filter.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectFilter(filter.id)}
            className={`px-3.5 py-1.5 rounded-sm transition-all duration-200 cursor-pointer ${
              isActive
                ? "border border-cyan-glow bg-cyan-glow/15 text-cyan-glow shadow-cyan-button font-medium"
                : "border border-slate-800 bg-tech-navy/50 text-slate-400 hover:text-white hover:border-slate-600"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
