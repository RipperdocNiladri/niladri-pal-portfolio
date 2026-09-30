"use client";

import { motion } from "framer-motion";
import { SKILL_DOMAINS, SkillTier } from "@/data/skills";

export default function Skills() {
  const getTierBadge = (tier: SkillTier) => {
    switch (tier) {
      case "WORKING WITH":
        return <span className="text-cyan-glow text-[10px] font-mono">[WORKING WITH]</span>;
      case "LEARNING":
        return <span className="text-purple-300 text-[10px] font-mono">[LEARNING]</span>;
      case "EXPLORING":
      default:
        return <span className="text-slate-400 text-[10px] font-mono">[EXPLORING]</span>;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 border-t border-tech-border/20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan-muted uppercase tracking-widest mb-1">
            {"// 03 / TECHNICAL STACK"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            CAPABILITIES &amp; DOMAINS
            <span className="h-px bg-gradient-to-r from-cyan-glow/50 to-transparent flex-grow max-w-xs" />
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Structured engineering stack with honest proficiency tiers instead of arbitrary percentages.
          </p>
        </div>

        {/* Honest Tiers Legend */}
        <div className="flex flex-wrap gap-4 mb-8 font-mono text-xs">
          <div className="flex items-center gap-2 px-3 py-1 bg-cyan-glow/10 border border-cyan-glow/40 text-cyan-glow rounded-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-glow" />
            <span>TIER 1: DAILY DRIVER / WORKING WITH</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-purple-glow/10 border border-purple-glow/40 text-purple-300 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-purple-glow" />
            <span>TIER 2: ACTIVE LEARNING</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/50 border border-slate-700 text-slate-300 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            <span>TIER 3: EXPLORING &amp; RESEARCHING</span>
          </div>
        </div>

        {/* Stack Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_DOMAINS.map((domain, idx) => (
            <motion.div
              key={domain.domainId}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="hud-cut-box p-6 rounded-sm border border-tech-border/30 hover:border-cyan-glow/40 transition-colors"
            >
              <div className="text-xs font-mono text-cyan-muted uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>DOMAIN // {domain.domainNumber}</span>
                <span>{domain.category}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4 tracking-tight">
                {domain.title}
              </h3>

              <div className="space-y-3 font-mono text-xs">
                {domain.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2 bg-tech-navy/70 rounded border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-slate-200">{skill.name}</span>
                    {getTierBadge(skill.tier)}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
