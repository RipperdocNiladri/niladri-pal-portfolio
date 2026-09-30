"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ExternalLink, Terminal } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const getBadgeStyle = () => {
    switch (project.badgeColor) {
      case "purple":
        return "bg-purple-glow/10 text-purple-300 border-purple-glow/30";
      case "slate":
        return "bg-slate-700/40 text-slate-300 border-slate-700";
      case "cyan":
      default:
        return "bg-cyan-glow/10 text-cyan-glow border-cyan-glow/30";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="hud-cut-box hud-bracket-top-right rounded-sm p-6 flex flex-col justify-between group hover:border-cyan-glow/60 transition-all duration-300"
    >
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between text-xs font-mono text-cyan-muted mb-3">
          <span>{project.sysId}</span>
          <span className={`px-2 py-0.5 rounded text-[10px] border ${getBadgeStyle()}`}>
            {project.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-glow transition-colors mb-2 tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono bg-tech-navy border border-slate-800 text-slate-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="text-xs font-mono text-cyan-glow hover:underline flex items-center gap-1.5 cursor-pointer group/btn"
        >
          <Terminal className="w-3.5 h-3.5 text-cyan-glow" />
          <span>[ VIEW SYSTEM SPEC ]</span>
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white text-xs font-mono flex items-center gap-1 transition-colors"
        >
          <span>[ GITHUB ]</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}
