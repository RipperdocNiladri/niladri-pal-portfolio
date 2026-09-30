"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-void/85 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-2xl bg-tech-navy/95 border border-cyan-glow/40 rounded-lg p-6 sm:p-8 shadow-2xl overflow-hidden hud-bracket-top-right hud-bracket-bottom-left"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <div className="text-[10px] font-mono text-cyan-muted tracking-widest uppercase mb-1">
                  {project.sysId} {"//"} SPECIFICATION
                </div>
                <h3 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded text-slate-400 hover:text-cyan-glow hover:bg-slate-800/80 transition-colors font-mono"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Problem & Architecture Content */}
            <div className="space-y-5 text-sm font-light leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              <div>
                <h4 className="text-xs font-mono text-cyan-glow uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <span>{"// SYSTEM OVERVIEW & CHALLENGE"}</span>
                </h4>
                <p className="text-slate-300 font-light">{project.details.overview}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <span>{"// ARCHITECTURE & APPROACH"}</span>
                </h4>
                <p className="text-slate-300 font-light">{project.details.approach}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-cyan-muted uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <span>{"// KEY LEARNING & ROADMAP"}</span>
                </h4>
                <p className="text-slate-300 font-light">{project.details.keyLearning}</p>
              </div>

              {/* Technologies Pills */}
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  {"// STACK ARTIFACTS"}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-tech-navy border border-slate-800 text-slate-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* System Status Banner */}
            <div className="mt-6 p-3 bg-void/80 border border-slate-800 rounded flex items-center justify-between font-mono text-[10px] text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-glow">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-ping" />
                <ShieldCheck className="w-3.5 h-3.5" />
                STATUS: {project.status}
              </span>
              <span>BUILD: {project.build}</span>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-end gap-3 pt-5 mt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 font-mono text-xs text-slate-400 hover:text-white border border-slate-700 rounded transition-colors"
              >
                [ CLOSE ]
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hud-cut-box px-5 py-2 font-mono text-xs text-cyan-glow border border-cyan-glow/50 hover:bg-cyan-glow hover:text-black transition-colors rounded flex items-center gap-1.5 shadow-cyan-button"
              >
                <span>[ OPEN CODE REPO ]</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
