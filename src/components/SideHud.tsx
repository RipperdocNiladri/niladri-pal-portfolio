import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";

export default function SideHud() {
  return (
    <aside
      className="fixed left-0 top-0 bottom-0 z-40 hidden lg:flex flex-col items-center justify-between py-8 px-4 border-r border-tech-border/40 bg-tech-navy/40 backdrop-blur-md w-20"
      aria-label="System HUD Rail"
    >
      {/* Top HUD Telemetry Indicator */}
      <div className="flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-muted/70">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-ping" />
        <span className="[writing-mode:vertical-rl] rotate-180 uppercase font-medium">
          SYS.SYS_READY
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-glow/40 to-transparent mt-1" />
      </div>

      {/* Social Links Rail */}
      <div className="flex flex-col items-center gap-5 text-slate-400">
        <a
          href="https://github.com/RipperdocNiladri"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg border border-transparent hover:border-cyan-glow/40 hover:text-cyan-glow hover:bg-cyan-glow/5 transition-all duration-300 group"
          title="GitHub Codebase Vault"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
        </a>

        <a
          href="https://www.linkedin.com/in/niladri-pal-7262893a9/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg border border-transparent hover:border-cyan-glow/40 hover:text-cyan-glow hover:bg-cyan-glow/5 transition-all duration-300 group"
          title="LinkedIn Professional Network"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
        </a>

        <a
          href="https://www.instagram.com/ripperdocniladri?igsi=MW5sazkxZHR1eDRkZw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg border border-transparent hover:border-cyan-glow/40 hover:text-cyan-glow hover:bg-cyan-glow/5 transition-all duration-300 group"
          title="Instagram Transmission"
          aria-label="Instagram Profile"
        >
          <InstagramIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
        </a>

        <a
          href="#contact"
          className="p-2.5 rounded-lg border border-transparent hover:border-cyan-glow/40 hover:text-cyan-glow hover:bg-cyan-glow/5 transition-all duration-300 group"
          title="Direct Message Transmission"
          aria-label="Navigate to Contact Section"
        >
          <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
        </a>
      </div>

      {/* Bottom Technical System Indicator (No precise GPS) */}
      <div className="text-[9px] font-mono text-cyan-muted/50 [writing-mode:vertical-rl] tracking-widest uppercase">
        NODE: ECE_IN // UTC+5:30
      </div>
    </aside>
  );
}
