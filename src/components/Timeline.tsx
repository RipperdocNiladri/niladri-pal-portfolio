export interface TimelineItem {
  year: string;
  badge: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "2026",
    badge: "CURRENT",
    title: "Intelligent Systems & Vision Pipelines",
    description:
      "Architecting computer vision inspection tools, desktop voice automation, and embedded hardware interfaces.",
    isCurrent: true,
  },
  {
    year: "2026",
    badge: "MILESTONE",
    title: "Full-Stack Exploration & Embedded C",
    description:
      "Deep-dived into systems programming, responsive web frameworks, and microcontroller sensor telemetry.",
    isCurrent: false,
  },
  {
    year: "2026",
    badge: "FOUNDATION",
    title: "Engineering Matriculation & Python Prototyping",
    description:
      "Began B.Tech in Electronics & Communication; built automated utility programs and core algorithmic logic.",
    isCurrent: false,
  },
];

export default function Timeline() {
  return (
    <div className="pt-6">
      <h3 className="text-xs font-mono text-cyan-muted uppercase tracking-widest mb-4">
        {"// EXECUTION TIMELINE"}
      </h3>
      <div className="relative border-l border-slate-800 ml-3 space-y-6">
        {TIMELINE_ITEMS.map((item, idx) => (
          <div key={idx} className="relative pl-6">
            <span
              className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${
                item.isCurrent
                  ? "bg-cyan-glow shadow-cyan-glow"
                  : idx === 1
                  ? "bg-slate-600"
                  : "bg-slate-800"
              }`}
            />
            <div
              className={`text-xs font-mono mb-0.5 ${
                item.isCurrent ? "text-cyan-glow" : "text-slate-400"
              }`}
            >
              {item.year} {"//"} {item.badge}
            </div>
            <div className="text-sm font-semibold text-white">{item.title}</div>
            <div className="text-xs text-slate-400 mt-0.5 leading-relaxed font-light">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
