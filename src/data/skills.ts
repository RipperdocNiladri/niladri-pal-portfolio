export type SkillTier = "WORKING WITH" | "LEARNING" | "EXPLORING";

export interface SkillItem {
  name: string;
  tier: SkillTier;
}

export interface SkillDomain {
  domainId: string;
  domainNumber: string;
  category: string;
  title: string;
  skills: SkillItem[];
}

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    domainId: "programming",
    domainNumber: "01",
    category: "LANGUAGES",
    title: "Core Programming",
    skills: [
      { name: "Python 3", tier: "WORKING WITH" },
      { name: "C Language", tier: "WORKING WITH" },
      { name: "C++ Fundamentals", tier: "LEARNING" },
      { name: "JavaScript / TypeScript", tier: "WORKING WITH" },
    ],
  },
  {
    domainId: "ai-vision",
    domainNumber: "02",
    category: "INTELLIGENCE",
    title: "AI & Computer Vision",
    skills: [
      { name: "OpenCV Pipelines", tier: "WORKING WITH" },
      { name: "Image Filtering & Cascades", tier: "WORKING WITH" },
      { name: "ML Model Prototyping", tier: "LEARNING" },
      { name: "TTS & Voice Synthesis", tier: "WORKING WITH" },
    ],
  },
  {
    domainId: "web",
    domainNumber: "03",
    category: "INTERFACES",
    title: "Web & Telemetry UI",
    skills: [
      { name: "Tailwind CSS & Modern UI", tier: "WORKING WITH" },
      { name: "Semantic HTML5 & Architecture", tier: "WORKING WITH" },
      { name: "React & Next.js App Router", tier: "WORKING WITH" },
      { name: "RESTful API Integration", tier: "WORKING WITH" },
    ],
  },
  {
    domainId: "electronics",
    domainNumber: "04",
    category: "ECE HARDWARE",
    title: "Electronics & Embedded",
    skills: [
      { name: "Microcontrollers (ESP32/Arduino)", tier: "WORKING WITH" },
      { name: "Digital Logic & Signals", tier: "WORKING WITH" },
      { name: "Sensor Matrix Interfacing", tier: "LEARNING" },
      { name: "Robotics Actuation", tier: "EXPLORING" },
    ],
  },
  {
    domainId: "tooling",
    domainNumber: "05",
    category: "ENVIRONMENT",
    title: "Tooling & Workflow",
    skills: [
      { name: "Git & GitHub Versioning", tier: "WORKING WITH" },
      { name: "Linux & Bash Terminal", tier: "WORKING WITH" },
      { name: "VS Code Debugger Suites", tier: "WORKING WITH" },
      { name: "Docker Basics", tier: "LEARNING" },
    ],
  },
  {
    domainId: "future",
    domainNumber: "06",
    category: "HORIZONS",
    title: "Future Frontiers",
    skills: [
      { name: "Space Technology Systems", tier: "EXPLORING" },
      { name: "Autonomous Edge Vehicles", tier: "EXPLORING" },
      { name: "TinyML on Microcontrollers", tier: "EXPLORING" },
      { name: "Real-Time DSP Algorithms", tier: "EXPLORING" },
    ],
  },
];
