"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ExternalLink, Terminal } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  const showImage = Boolean(project.thumbnail) && failedSrc !== project.thumbnail;
  const isImageLoaded = loadedSrc === project.thumbnail;

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
        {/* Project Thumbnail */}
        <div className="relative w-full aspect-video mb-4 rounded-sm overflow-hidden bg-tech-navy/90 border border-slate-800/80 group-hover:border-cyan-glow/40 transition-colors duration-300">
          {(!showImage || !isImageLoaded) && (
            <div
              className="absolute inset-0 bg-grid-cyber flex flex-col items-center justify-center p-4 text-center select-none"
              aria-hidden={showImage && isImageLoaded}
            >
              <div className="w-8 h-8 rounded-sm border border-cyan-glow/20 bg-void/60 flex items-center justify-center mb-2 group-hover:border-cyan-glow/50 group-hover:shadow-cyan-button transition-all duration-300">
                <Terminal className="w-4 h-4 text-cyan-muted/60 group-hover:text-cyan-glow transition-colors duration-300" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-cyan-glow/90 transition-colors duration-300 uppercase">
                {"// VISUAL_FEED // "}MODULE_{project.number}
              </span>
              <span className="text-[9px] font-mono text-slate-600 mt-0.5 tracking-wider">
                [ PREVIEW ASSET PENDING ]
              </span>
            </div>
          )}

          {showImage && project.thumbnail && (
            <Image
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setLoadedSrc(project.thumbnail ?? null)}
              onError={() => setFailedSrc(project.thumbnail ?? null)}
            />
          )}

          {/* Subtle HUD Overlay & Corner Ticks */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
          <span className="pointer-events-none absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-cyan-glow/30 group-hover:border-cyan-glow/80 transition-colors duration-300" />
          <span className="pointer-events-none absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-cyan-glow/30 group-hover:border-cyan-glow/80 transition-colors duration-300" />
        </div>

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
