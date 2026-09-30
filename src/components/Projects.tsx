"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PROJECTS, Project, ProjectFilterCategory } from "@/data/projects";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [currentFilter, setCurrentFilter] = useState<ProjectFilterCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = PROJECTS.filter((project) => {
    if (currentFilter === "all") return true;
    return project.filterCategories.includes(currentFilter);
  });

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 bg-void/50 border-t border-tech-border/20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title & Filter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-xs font-mono text-cyan-muted uppercase tracking-widest mb-1">
              {"// 02 / SELECTED PROJECTS"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              ENGINEERING &amp; SOFTWARE ARCHIVE
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Production modules, AI computer vision pipelines, and experimental scripts engineered with precision.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="mt-6 md:mt-0">
            <ProjectFilter
              currentFilter={currentFilter}
              onSelectFilter={setCurrentFilter}
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
