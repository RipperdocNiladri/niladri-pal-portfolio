"use client";

import { motion } from "framer-motion";
import Timeline from "./Timeline";
import { GraduationCap, Cpu, Flame, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 border-t border-tech-border/20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan-muted uppercase tracking-widest mb-1">
            {"// 01 / PROFILE"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            ABOUT ME{" "}
            <span className="h-px bg-gradient-to-r from-cyan-glow/50 to-transparent flex-grow max-w-xs" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Philosophy and Narrative Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Philosophy Callout Box */}
            <div className="hud-cut-box hud-bracket-top-right p-6 rounded-sm border-l-4 border-l-cyan-glow bg-tech-navy/50">
              <span className="text-[10px] font-mono text-cyan-muted uppercase tracking-widest block mb-1">
                CORE OPERATING PHILOSOPHY
              </span>
              <p className="text-xl sm:text-2xl font-mono text-white font-semibold tracking-wide flex flex-wrap items-center gap-2">
                <span>Learn</span>
                <span className="text-cyan-glow">→</span>
                <span>Build</span>
                <span className="text-cyan-glow">→</span>
                <span>Break</span>
                <span className="text-cyan-glow">→</span>
                <span>Improve</span>
              </p>
            </div>

            {/* Narrative */}
            <p className="text-slate-300 leading-relaxed font-light text-base sm:text-lg">
              I am an <strong className="text-white font-medium">Electronics & Communication Engineering (ECE)</strong> undergraduate student who bridges physical hardware and intelligent software. My journey is driven by genuine curiosity: how signals transform into code, how algorithms interpret vision, and how software scales effortlessly.
            </p>

            <p className="text-slate-400 leading-relaxed font-light text-sm sm:text-base">
              Rather than staying confined to theory, I obsess over prototyping. From building real-time vision pipelines with OpenCV to developing voice-automated desktop intelligence and embedded firmware experiments, I view every challenge through a lens of engineering precision and intuitive design.
            </p>

            {/* Execution Timeline */}
            <Timeline />
          </motion.div>

          {/* Quick Spec HUD Grid Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="hud-cut-box p-5 rounded border border-tech-border/40 hover:border-cyan-glow/50 transition-colors">
              <div className="flex items-center justify-between text-cyan-muted text-xs font-mono mb-2">
                <span>[ ACADEMIC SPEC ]</span>
                <GraduationCap className="w-4 h-4 text-cyan-glow" />
              </div>
              <div className="text-white font-semibold text-base mb-1">ECE Undergrad</div>
              <div className="text-xs text-slate-400 font-mono">
                B.Tech Electronics & Comm. Engineering
              </div>
              <div className="mt-3 text-[10px] font-mono text-cyan-glow/80 tracking-wider">
                STATUS: ACTIVE INGENIEUR
              </div>
            </div>

            <div className="hud-cut-box p-5 rounded border border-tech-border/40 hover:border-purple-glow/50 transition-colors">
              <div className="flex items-center justify-between text-purple-400 text-xs font-mono mb-2">
                <span>[ PRIMARY DOMAINS ]</span>
                <Cpu className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-white font-semibold text-base mb-1">AI & Robotics</div>
              <div className="text-xs text-slate-400 font-mono">
                Computer Vision, Embedded Edge, Full-Stack
              </div>
              <div className="mt-3 text-[10px] font-mono text-purple-400/80 tracking-wider">
                DOMAIN: HYBRID TECH
              </div>
            </div>

            <div className="hud-cut-box p-5 rounded border border-tech-border/40 hover:border-cyan-glow/50 transition-colors">
              <div className="flex items-center justify-between text-cyan-muted text-xs font-mono mb-2">
                <span>[ CURRENT MODE ]</span>
                <Flame className="w-4 h-4 text-cyan-glow" />
              </div>
              <div className="text-white font-semibold text-base mb-1">Building & Scaling</div>
              <div className="text-xs text-slate-400 font-mono">
                Exploring Space Tech, Vision Models & C++
              </div>
              <div className="mt-3 text-[10px] font-mono text-cyan-glow/80 tracking-wider">
                STATE: CONTINUOUS FLOW
              </div>
            </div>

            <div className="hud-cut-box p-5 rounded border border-tech-border/40 hover:border-purple-glow/50 transition-colors">
              <div className="flex items-center justify-between text-purple-400 text-xs font-mono mb-2">
                <span>[ REGION NODE ]</span>
                <Globe className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-white font-semibold text-base mb-1">India [National Node]</div>
              <div className="text-xs text-slate-400 font-mono">
                Open to Global Remote Collaborations
              </div>
              <div className="mt-3 text-[10px] font-mono text-purple-400/80 tracking-wider">
                TIMEZONE: UTC+05:30
              </div>
            </div>

            {/* Terminal telemetry banner spanning both columns */}
            <div className="sm:col-span-2 hud-cut-box p-4 rounded bg-tech-navy/70 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-glow" />
                <span className="text-xs font-mono text-slate-300">
                  DISCIPLINE: HARDWARE + CODE SYNCHRONY
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-muted">NODE://ECE_NP</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
