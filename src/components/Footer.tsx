"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-tech-border/30 py-10 px-4 sm:px-8 bg-void text-xs font-mono text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
          <span>© 2026 NILADRI PAL // BUILT WITH CURIOSITY</span>
        </div>

        <div className="text-slate-400 tracking-wider text-[11px]">
          DESIGNED • DEVELOPED • ITERATED
        </div>

        <div className="flex items-center gap-4 text-cyan-muted/80">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            SYS_STATUS: ONLINE
          </span>
          <span>•</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-cyan-glow transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>[ TOP</span>
            <ArrowUp className="w-3 h-3" />
            <span>]</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
