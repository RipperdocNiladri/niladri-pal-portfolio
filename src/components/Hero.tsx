"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Cpu, Activity } from "lucide-react";
import avatarImg from "../../public/avatar.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative px-4 sm:px-8 py-12 lg:py-0 overflow-hidden"
    >
      {/* Ambient background blur orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-glow/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-glow/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Hero Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col justify-center text-left z-10"
        >
          {/* System Prompt Tag */}
          <div className="inline-flex items-center gap-2 mb-4 font-mono text-xs text-cyan-muted tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-glow animate-ping" />
            <span>{"// HELLO, I'M"}</span>
          </div>

          {/* Main Name Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-3">
            NILADRI
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow via-cyan-muted to-white filter drop-shadow-[0_0_20px_rgba(0,242,254,0.4)]">
              PAL
            </span>
          </h1>
          <h1 className=" text-cyan-glow font-mono text-xs sm:text-sm tracking-widest uppercase h-8 w-9">@RIPPERDOCNILADRI</h1>

          {/* Tagline Badge */}
          <div className="inline-block self-start font-mono text-xs sm:text-sm text-cyber-violet font-semibold tracking-widest uppercase mb-6 px-3 py-1 bg-cyber-violet/10 border border-cyber-violet/30 rounded-sm">
            [ ECE STUDENT • DEVELOPER • BUILDER ]
          </div>

          {/* Subtitle / Bio */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-4 font-light">
            Always exploring how <strong className="text-white font-medium">hardware and software</strong> work together.
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-light">
            I build futuristic, fast, and scalable engineering systems at the intersection of clean code, smart electronics, and computer vision.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="hud-cut-box px-7 py-3.5 border border-cyan-glow text-cyan-glow font-mono text-xs sm:text-sm tracking-widest uppercase hover:bg-cyan-glow hover:text-black transition-all duration-300 shadow-cyan-button flex items-center gap-3 group"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </a>
            <a
              href="https://github.com/RipperdocNiladri"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-slate-700 hover:border-slate-400 text-slate-300 hover:text-white font-mono text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 bg-tech-navy/50 flex items-center gap-2"
            >
              <span>GITHUB</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Live Status Micro HUD Cards */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800/80">
            <div className="hud-cut-box px-4 py-2.5 rounded flex items-center gap-3">
              <span className="p-1.5 rounded-full bg-emerald-500/10 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 block animate-pulse" />
              </span>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                  STATUS
                </span>
                <span className="text-xs font-mono text-slate-200 font-medium">
                  BUILDING PROJECTS
                </span>
              </div>
            </div>

            <div className="hud-cut-box px-4 py-2.5 rounded flex items-center gap-3">
              <span className="p-1.5 rounded-full bg-cyan-glow/10 text-cyan-glow">
                <Cpu className="w-3.5 h-3.5" />
              </span>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                  FOCUS
                </span>
                <span className="text-xs font-mono text-slate-200 font-medium">
                  HARDWARE × SOFTWARE
                </span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-8 hidden sm:flex items-center gap-3 text-cyan-muted/60 text-[10px] font-mono tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow" />
            <span>SCROLL TO EXPLORE ARCHIVE</span>
            <div className="w-12 h-px bg-gradient-to-r from-cyan-glow/40 to-transparent" />
          </div>
        </motion.div>

        {/* Right Hero Visual Column (HUD Frame & Avatar Matching Screenshot) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-6 flex items-center justify-center relative"
        >
          {/* Outer Concentric Glowing Rings */}
          <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
            {/* Radar Circle 1 */}
            <div className="absolute inset-0 rounded-full border border-cyan-glow/20 border-dashed animate-radar" />
            {/* Radar Circle 2 */}
            <div className="absolute inset-6 rounded-full border border-purple-glow/25" />
            {/* Radar Circle 3 */}
            <div className="absolute inset-12 rounded-full border border-cyan-glow/30" />

            {/* Technical Angle Degree Markings */}
            <div className="absolute top-2 right-12 text-[9px] font-mono text-cyan-muted/60">
              [ 045° RAD ]
            </div>
            <div className="absolute bottom-4 left-10 text-[9px] font-mono text-cyan-muted/60">
              [ 225° SYS ]
            </div>

            {/* Telemetry Status Pills */}
            <div className="absolute -top-2 left-6 z-20 font-mono text-[10px] px-2.5 py-1 bg-void/90 border border-cyan-glow/40 text-cyan-glow rounded-full flex items-center gap-1.5 shadow-cyan-glow">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-ping" />
              CORE: ACTIVE
            </div>

            <div className="absolute -bottom-3 right-8 z-20 font-mono text-[10px] px-3 py-1 bg-void/90 border border-purple-glow/40 text-purple-300 rounded-full flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-purple-400" />
              <span>NODE: ECE_IN</span>
            </div>

            {/* Main Image Container with Vignette & HUD framing */}
            <div className="relative w-4/5 h-4/5 rounded-2xl overflow-hidden border border-cyan-glow/30 shadow-2xl bg-tech-navy group">
              <Image
                src={avatarImg}
                alt="Niladri Pal Futuristic Cyberpunk Developer Portrait"
                priority
                className="w-full h-full object-cover object-center filter saturate-110 contrast-110 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Radial Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* HUD Target Reticle in Center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity">
                <div className="w-24 h-24 border border-cyan-glow/40 rounded-full border-t-transparent border-b-transparent animate-spin" />
              </div>

              {/* Corner Tech Tick Marks */}
              <div className="absolute top-2 left-2 text-[8px] font-mono text-cyan-glow select-none">
                [+]
              </div>
              <div className="absolute top-2 right-2 text-[8px] font-mono text-cyan-glow select-none">
                [+]
              </div>
              <div className="absolute bottom-2 left-2 text-[8px] font-mono text-cyan-glow select-none">
                [01]
              </div>
              <div className="absolute bottom-2 right-2 text-[8px] font-mono text-cyan-glow select-none">
                [NP]
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
