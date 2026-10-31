export interface ProjectDetail {
  overview: string;
  approach: string;
  keyLearning: string;
}

export type ProjectFilterCategory = "all" | "ai" | "vision" | "web" | "systems" | "graphics";

export interface Project {
  id: string;
  number: string;
  sysId: string;
  title: string;
  badge: string;
  badgeColor?: "cyan" | "purple" | "slate";
  thumbnail?: string;
  description: string;
  technologies: string[];
  filterCategories: ProjectFilterCategory[];
  githubUrl: string;
  demoUrl?: string;
  status: string;
  build: string;
  details: ProjectDetail;
}

export const PROJECTS: Project[] = [
  {
    id: "patchpilot",
    number: "07",
    sysId: "SYS_ID: 007 // AI",
    title: "PATCHPILOT",
    badge: "AI REPO ONBOARDING",
    badgeColor: "cyan",
    thumbnail: "/images/projects/patchpilot.webp",
    description:
      "AI-powered open-source onboarding assistant that helps developers explore unfamiliar GitHub repositories through structured Gemma code explanations, grounded file Q&A, and beginner contribution discovery.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Gemma API",
      "GitHub REST API",
      "Vitest",
    ],
    filterCategories: ["ai", "web"],
    githubUrl: "https://github.com/RipperdocNiladri/Patchpilot",
    demoUrl: "https://patchpilot-livid.vercel.app",
    status: "VERIFIED MODULE",
    build: "STABLE [v1.0.0]",
    details: {
      overview:
        "Built a full-stack open-source onboarding assistant designed to lower the barrier to exploring unfamiliar GitHub repositories. It provides repository blueprints, an interactive file tree explorer, beginner-friendly AI code breakdowns, line-grounded file Q&A, and a built-in demo dataset that runs even without external API keys.",
      approach:
        "Engineered with Next.js App Router and server-side Route Handlers integrating the GitHub REST API and Google's Gemma model (gemma-4-26b-a4b-it). Combines recursive tree ingestion, SSRF and path-traversal input validation, prompt-injection-resistant AI templates, and an issue/TODO analyzer that surfaces beginner-friendly contribution opportunities.",
      keyLearning:
        "Developed end-to-end patterns for grounding LLM responses strictly in source file evidence, keeping API credentials isolated inside server boundaries, and validating untrusted repository paths with automated Vitest suites.",
    },
  },
  {
    id: "chatvault",
    number: "08",
    sysId: "SYS_ID: 008 // WEB",
    title: "CHATVAULT",
    badge: "LOCAL-FIRST AI ARCHIVE",
    badgeColor: "purple",
    thumbnail: "/images/projects/chatvault.webp",
    description:
      "Local-first AI conversation organizer and academic transcript reader that transforms exported ChatGPT archives into a searchable, customizable browser-side knowledge workspace.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Dexie.js (IndexedDB)",
      "MiniSearch",
      "KaTeX",
      "Zod",
    ],
    filterCategories: ["web", "ai"],
    githubUrl: "https://github.com/RipperdocNiladri/ChatVault",
    demoUrl: "https://chatvault-kappa.vercel.app",
    status: "VERIFIED MODULE",
    build: "STABLE [v1.0.0]",
    details: {
      overview:
        "A privacy-focused, local-first web workspace for students, researchers, and developers to organize exported AI conversations into customizable subject vaults without uploading chat history to an external server.",
      approach:
        "Implemented with Next.js App Router, Dexie.js (IndexedDB) for client-side persistence, JSZip for parsing ChatGPT .zip and conversations.json message trees, MiniSearch for weighted BM25 full-text search (⌘K), and React Markdown with KaTeX for rendering technical transcripts, code decks, and study scratchpads. Currently supports offline ChatGPT archive ingestion, procedural SVG collection covers, and Zod-validated JSON backups, while direct third-party cloud sync and live provider API polling remain outside the current local-first scope.",
      keyLearning:
        "Engineered browser-side relational indexing in IndexedDB, reconstructive traversal of branching conversation DAGs, defensive ZIP-bomb validation, and weighted client-side BM25 search across Markdown, LaTeX formulas, and code blocks.",
    },
  },
  {
    id: "pixel-fluid-morph",
    number: "09",
    sysId: "SYS_ID: 009 // CV",
    title: "PIXEL FLUID MORPH",
    badge: "PARTICLE & IMAGE MORPHING",
    badgeColor: "cyan",
    thumbnail: "/images/projects/pixel-fluid-morph.webp",
    description:
      "Interactive Python visual simulation that rearranges every pixel of a source image to form a target image without recoloring, animating the transition through a 60 FPS fluid-like particle field.",
    technologies: ["Python", "NumPy", "Pygame", "SciPy", "Pillow", "Tkinter"],
    filterCategories: ["vision", "systems", "graphics"],
    githubUrl: "https://github.com/RipperdocNiladri/pixel_fluid_morph",
    status: "VERIFIED MODULE",
    build: "STABLE [v1.0.0]",
    details: {
      overview:
        "A desktop visual computing tool that transforms one image into another by strictly permuting the original pixels—using every source pixel exactly once without altering its RGB color—and rendering the rearrangement as an interactive 60 FPS fluid animation.",
      approach:
        "Formulates pixel matching as a minimum-cost assignment problem combining weighted RGB squared error and spatial travel distance. Supports both an exact Hungarian solver via SciPy (linear_sum_assignment) and a fast NumPy solver using luminance rank sorting with parallel random pair swaps. Animates each pixel as a particle governed by a damped spring, a divergence-free swirl field, and grid-based neighbor viscosity in Pygame, with controls to reverse morphs, capture PNG screenshots, or export GIFs.",
      keyLearning:
        "Explored combinatorial optimization trade-offs between exact Hungarian assignment and heuristic vectorized swaps in NumPy, alongside real-time particle physics and divergence-free flow fields for 60 FPS rendering.",
    },
  },
  {
    id: "lucy",
    number: "01",
    sysId: "SYS_ID: 001 // AI",
    title: "LUCY A.I. ASSISTANT",
    badge: "VOICE DESKTOP AI",
    badgeColor: "cyan",
    thumbnail: "/images/projects/lucy.webp",
    description:
      "Modular voice-command desktop assistant utilizing Microsoft Edge TTS engine, automated OS process control, and real-time query parsing.",
    technologies: ["Python", "Edge-TTS", "SpeechRecognition", "OS Automation"],
    filterCategories: ["ai"],
    githubUrl: "https://github.com/RipperdocNiladri/Project-LUCY",
    status: "VERIFIED MODULE",
    build: "STABLE [v0.0.1]",
    details: {
      overview:
        "Developed a voice-command automation assistant running locally on desktop. Built to solve repetitive computer interactions by interpreting spoken commands into OS-level execution.",
      approach:
        "Combines SpeechRecognition libraries with Microsoft Edge's Neural Text-To-Speech API for human-like vocal feedback. Employs async task scheduling, regex intent parsing, and automated application switching.",
      keyLearning:
        "Mastered asynchronous Python scripting, audio stream handling, latency reduction, and robust exception fallbacks when network endpoints are unreachable.",
    },
  },
  {
    id: "turtle",
    number: "02",
    sysId: "SYS_ID: 002 // CV",
    title: "TURTLE IMAGE TRACER",
    badge: "TURTLE GRAPHICS",
    badgeColor: "purple",
    thumbnail: "/images/projects/turtle.webp",
    description:
      "A simple computer-vision project that converts images into drawable contours and recreates them using Python's built-in Turtle Graphics.",
    technologies: ["OpenCV", "Turtle Graphics", "Python", "NumPy"],
    filterCategories: ["vision", "graphics"],
    githubUrl: "https://github.com/RipperdocNiladri/Turtle-graphics-Projects",
    status: "VERIFIED MODULE",
    build: "STABLE [v0.0.3]",
    details: {
      overview:
        "A simple computer-vision project that converts images into drawable contours and recreates them using Python's built-in Turtle Graphics.",
      approach:
        "The project combines OpenCV image processing with Turtle Graphics to turn an image into a sequence of paths that a Turtle can automatically draw on the screen.",
      keyLearning:
        "Learned deep aspects of computer vision preprocessing: perspective distortion correction, illumination normalization, and handling skewed typography.",
    },
  },
  {
    id: "maskcv",
    number: "03",
    sysId: "SYS_ID: 003 // CV",
    title: "REAL-TIME FACE MASK CV",
    badge: "REALTIME TRACKING",
    badgeColor: "cyan",
    thumbnail: "/images/projects/maskcv.webp",
    description:
      "Real-time video feed face landmark detection with spatial mask overlay, tracking accuracy adjustments, and multi-face matrix handling.",
    technologies: ["OpenCV", "Haar Cascades", "NumPy", "Live Stream"],
    filterCategories: ["vision"],
    githubUrl: "https://github.com/RipperdocNiladri/Open-CV-projects",
    status: "VERIFIED MODULE",
    build: "STABLE [v0.0.4]",
    details: {
      overview:
        "A lightweight computer vision tool running at 60 FPS capable of locating facial anchor landmarks and dynamically warping digital safety masks or filters over subjects.",
      approach:
        "Engineered using Haar Cascade classifiers combined with affine transformations in OpenCV to ensure real-time rendering on CPU without GPU dependency.",
      keyLearning:
        "Gained hands-on experience in matrix geometry, image rotation math, alpha channel blending, and bounding-box tracking across consecutive frames.",
    },
  },
  {
    id: "pyfun",
    number: "04",
    sysId: "SYS_ID: 004 // AUTOMATION",
    title: "PYTHON UTILITY SUITE",
    badge: "SCRIPTS & UTILS",
    badgeColor: "slate",
    thumbnail: "/images/projects/python-utility.webp",
    description:
      "Curated repository of algorithmic experiments, automated batch converters, network socket checkers, and mini-games built to master fundamentals.",
    technologies: ["Python 3", "Tkinter", "CLI Tools", "Threading", "Data Structures"],
    filterCategories: ["ai", "systems"],
    githubUrl: "https://github.com/RipperdocNiladri/Python-Fun-Projects",
    status: "VERIFIED SUITE",
    build: "STABLE [v0.5.0]",
    details: {
      overview:
        "A structured engineering repository containing targeted scripts designed to automate system housekeeping, batch convert documents, inspect network sockets, and model basic physics.",
      approach:
        "Built purely with Python standard libraries and select modules (Requests, BeautifulSoup, Multiprocessing) to minimize dependencies and emphasize clean algorithmic code.",
      keyLearning:
        "Strengthened core computer science fundamentals, CLI parameter parsing, file I/O safety, and concurrency models.",
    },
  },
  {
    id: "Super-Saiyan",
    number: "05",
    sysId: "SYS_ID: 005 // CV",
    title: "SUPER SAIYAN",
    badge: "REAL-TIME INTERACTION SYSTEM",
    badgeColor: "cyan",
    thumbnail: "/images/projects/super-saiyan.webp",
    description:
      "An interactive real-time computer vision and augmented reality application inspired by Goku's iconic Super Siyan and Kamehameha attack from Dragon Ball Z / Dragon Ball Super.",
    technologies: ["Python", "NumPy", "OpenCV", "Live Stream", "Mediapipe", "Pillow"],
    filterCategories: ["vision"],
    githubUrl: "https://github.com/RipperdocNiladri/Super_Saiyan",
    status: "VERIFIED MODULE",
    build: "STABLE [v0.0.1]",
    details: {
      overview:
        "An interactive real-time computer vision and augmented reality application inspired by Goku's iconic Super Siyan and Kamehameha attack from Dragon Ball Z / Dragon Ball Super.",
      approach:
        "This system tracks your hands and upper body with MediaPipe, listens for real-time battle screams through your microphone, renders transparent animated GIF sprites and procedural particle/beam VFX, and manages attack sequencing through a discrete finite state machine.",
      keyLearning:
        "Building this project demonstrates how to integrate multi-modal real-time tracking—combining MediaPipe pose and hand tracking, sounddevice audio decibel detection, and custom OpenCV alpha compositing—to power interactive augmented reality driven by a finite state machine.",
    },
  },
  {
    id: "ascii",
    number: "06",
    sysId: "SYS_ID: 006 // CV",
    title: "ASCII ART",
    badge: "ASCII ART & TERMINAL RENDERER",
    badgeColor: "purple",
    thumbnail: "/images/projects/ascii-art.webp",
    description:
      "A small command-line application for rendering images, videos, and procedural 3D experiments directly in a terminal.",
    technologies: ["Python", "NumPy", "Pillow", "FFmpeg", "FFplay", "FFprobe"],
    filterCategories: ["systems"],
    githubUrl: "https://github.com/RipperdocNiladri/ASCII-Art",
    status: "VERIFIED MODULE",
    build: "VERIFIED [v0.1.2]",
    details: {
      overview:
        "A small command-line application for rendering images, videos, and procedural 3D experiments directly in a terminal.",
      approach:
        "The project treats the terminal as a character-based framebuffer. Pixel brightness selects an ASCII character, ANSI escape sequences provide true color and screen updates, and mathematical renderers supply geometry, projection, lighting, and depth.",
      keyLearning:
        "Building this project demonstrates how to treat a terminal as a character-based framebuffer, combining brightness-to-ASCII mapping, ANSI color sequences, bounded frame-skipping for audio-video synchronization, and procedural 3D math engine techniques like perspective projection and depth buffering.",
    },
  },
];
