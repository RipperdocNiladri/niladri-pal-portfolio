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
    id: "lucy",
    number: "01",
    sysId: "SYS_ID: 001 // AI",
    title: "LUCY A.I. ASSISTANT",
    badge: "VOICE DESKTOP AI",
    badgeColor: "cyan",
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
