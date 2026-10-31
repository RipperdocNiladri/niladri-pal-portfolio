# NILADRI PAL — Engineering Portfolio

> *"Always exploring how hardware and software work together."*

A futuristic, high-performance personal engineering portfolio — built from scratch, designed with a **cyberpunk HUD aesthetic**, and engineered for speed, accessibility, and authenticity.

**Live Portfolio:** [https://niladri-pal-portfolio.vercel.app/](https://niladri-pal-portfolio.vercel.app/)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-BB22FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.3.7 (App Router, Turbopack) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (`@theme` tokens) |
| Animation | Framer Motion 13 |
| Icons | Lucide React + Custom SVGs |
| Fonts | Space Grotesk (primary) · JetBrains Mono (mono) |
| Rendering | Static prerendering (fully edge-compatible) |

---

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx         # Root layout — fonts, metadata, favicon
│   ├── page.tsx           # Single-page smooth-scrolling container
│   └── globals.css        # Tailwind v4 @theme tokens, HUD utilities, cyber grid
│
├── components/
│   ├── Navbar.tsx         # Fixed top nav — active scroll spy, mobile drawer
│   ├── SideHud.tsx        # Fixed left HUD rail (desktop) — telemetry & social links
│   ├── Hero.tsx           # Hero — animated radar rings, avatar HUD frame, CTAs
│   ├── About.tsx          # Profile — philosophy card, bio narrative, spec cards
│   ├── Timeline.tsx       # Learning journey & milestone component
│   ├── Projects.tsx       # Engineering archive — filter tabs, animated grid
│   ├── ProjectCard.tsx    # Reusable HUD card with 16:9 thumbnail & fallback HUD placeholder
│   ├── ProjectFilter.tsx  # Category filter pills (ALL / AI ML / VISION / WEB / SYSTEMS)
│   ├── ProjectModal.tsx   # Project specification modal (keyboard accessible)
│   ├── Skills.tsx         # 6-domain capability matrix — honest proficiency tiers
│   ├── Contact.tsx        # Transmission form + cyber terminal + direct links
│   ├── Footer.tsx         # Technical footer — status indicator & scroll-to-top
│   └── Icons.tsx          # Custom SVG brand icons (GitHub, LinkedIn, Instagram)
│
├── data/
│   ├── projects.ts        # Typed project records (9 engineering & software modules)
│   └── skills.ts          # Structured capabilities by domain & proficiency tier
│
└── lib/
    └── utils.ts           # Class name utility (cn helper)

public/
├── avatar.png             # Self-hosted profile portrait
├── favicon.ico            # Site favicon
└── images/
    └── projects/          # 16:9 WebP project thumbnails
        ├── patchpilot.webp
        ├── chatvault.webp
        ├── pixel-fluid-morph.webp
        ├── lucy.webp
        ├── turtle.webp
        ├── maskcv.webp
        ├── python-utility.webp
        ├── super-saiyan.webp
        └── ascii-art.webp
```

---

## Featured Engineering & Software Archive

The portfolio showcases **9 engineering, AI, web, and computer vision projects** in [`src/data/projects.ts`](src/data/projects.ts):

| SYS_ID | Project | Category Filters | Key Stack | Links |
|---|---|---|---|---|
| `007` | **PATCHPILOT** | `AI / ML` · `WEB` | Next.js, TypeScript, React, Tailwind CSS, Gemma API, GitHub REST API, Vitest | [Repo](https://github.com/RipperdocNiladri/Patchpilot) · [Live](https://patchpilot-livid.vercel.app) |
| `008` | **CHATVAULT** | `WEB` · `AI / ML` | Next.js, TypeScript, Tailwind CSS, Dexie.js (IndexedDB), MiniSearch, KaTeX, Zod | [Repo](https://github.com/RipperdocNiladri/ChatVault) · [Live](https://chatvault-kappa.vercel.app) |
| `009` | **PIXEL FLUID MORPH** | `VISION` · `SYSTEMS / ECE` | Python, NumPy, Pygame, SciPy, Pillow, Tkinter | [Repo](https://github.com/RipperdocNiladri/pixel_fluid_morph) |
| `001` | **LUCY A.I. ASSISTANT** | `AI / ML` | Python, Edge-TTS, SpeechRecognition, OS Automation | [Repo](https://github.com/RipperdocNiladri/Project-LUCY) |
| `002` | **TURTLE IMAGE TRACER** | `VISION` | OpenCV, Turtle Graphics, Python, NumPy | [Repo](https://github.com/RipperdocNiladri/Turtle-graphics-Projects) |
| `003` | **REAL-TIME FACE MASK CV** | `VISION` | OpenCV, Haar Cascades, NumPy, Live Stream | [Repo](https://github.com/RipperdocNiladri/Open-CV-projects) |
| `004` | **PYTHON UTILITY SUITE** | `AI / ML` · `SYSTEMS / ECE` | Python 3, Tkinter, CLI Tools, Threading, Data Structures | [Repo](https://github.com/RipperdocNiladri/Python-Fun-Projects) |
| `005` | **SUPER SAIYAN** | `VISION` | Python, NumPy, OpenCV, Live Stream, MediaPipe, Pillow | [Repo](https://github.com/RipperdocNiladri/Super_Saiyan) |
| `006` | **ASCII ART** | `SYSTEMS / ECE` | Python, NumPy, Pillow, FFmpeg, FFplay, FFprobe | [Repo](https://github.com/RipperdocNiladri/ASCII-Art) |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Install & Run

```bash
# Clone the repository
git clone https://github.com/RipperdocNiladri/niladri-portfolio.git
cd niladri-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Commands

```bash
# Production build (Turbopack)
npm run build

# Run production server
npm run start

# Lint
npm run lint
```

---

## Features

### Visual Design
- **Futuristic HUD aesthetic** — chamfered corners, bracket tick marks, translucent surfaces, subtle backdrop blur
- **Cyber grid background** — ultra-subtle 40px technical grid that never interferes with readability
- **Ambient glow effects** — `#00F2FE` cyan and `#8B5CF6` purple as focused accents only (not dominant colors)
- **Dual typography** — Space Grotesk for visual hierarchy, JetBrains Mono for all technical labels

### Navigation
- **Fixed top navigation** with active section scroll spy and animated underline indicator
- **Compact `NP` logo** with cyan pulse status dot
- **Mobile hamburger drawer** with animated open/close via Framer Motion — auto-closes on navigation
- **Fixed left HUD rail** on desktop — telemetry ping, social links, and system indicator

### Sections
| # | Section | Key Highlights |
|---|---|---|
| 01 | **Hero** | Animated concentric radar rings, HUD avatar frame with reticle, status micro-cards |
| 02 | **About** | `Learn → Build → Break → Improve` philosophy card, authentic bio, timeline, 4 spec HUD cards |
| 03 | **Projects** | 16:9 project thumbnails with HUD fallback placeholders, filter tabs, Framer Motion animated grid, accessible specification modal |
| 04 | **Skills** | 6 domains, honest proficiency tiers (`WORKING WITH` · `LEARNING` · `EXPLORING`) |
| 05 | **Contact** | Native `mailto:` form, cyberpunk terminal console, direct social link cards |

### Code Quality
- Zero fake percentages, no fabricated accomplishments, no fake backend
- Resilient `next/image` project thumbnails with automatic HUD placeholder fallback when an image file is pending
- Keyboard-accessible modal (closes on `Escape` key and backdrop click)
- Semantic HTML throughout
- Static prerendering — no server required to run in production

---

## Customisation

### Adding a New Project
Edit [`src/data/projects.ts`](src/data/projects.ts) and add a new object to the `PROJECTS` array following the `Project` interface. The card, category filters, thumbnail, and specification modal are all driven by this data.

### Adding or Replacing Project Thumbnails
Place `16:9` `.webp` screenshots inside [`public/images/projects/`](public/images/projects/) and reference their path (e.g., `"/images/projects/my-project.webp"`) via the `thumbnail` property in [`src/data/projects.ts`](src/data/projects.ts). If a configured image is not yet present in `public/images/projects/`, [`ProjectCard`](src/components/ProjectCard.tsx) automatically renders a clean cyberpunk HUD placeholder instead of a broken image.

### Adding a New Skill
Edit [`src/data/skills.ts`](src/data/skills.ts) and add a skill item to any domain in `SKILL_DOMAINS`. Use an existing `SkillTier` value: `"WORKING WITH"`, `"LEARNING"`, or `"EXPLORING"`.

### Updating Social Links
All external links (GitHub, LinkedIn, Instagram, Email) are located in:
- [`src/components/SideHud.tsx`](src/components/SideHud.tsx)
- [`src/components/Contact.tsx`](src/components/Contact.tsx)
- [`src/components/Navbar.tsx`](src/components/Navbar.tsx)

### Replacing the Avatar
Replace [`public/avatar.png`](public/avatar.png) with your own image. The image is statically imported in [`src/components/Hero.tsx`](src/components/Hero.tsx) so Next.js automatically generates a new content hash and invalidates the browser cache on the next build.

### Changing Theme Colors
All design tokens are defined in [`src/app/globals.css`](src/app/globals.css) under `@theme`. Modify the CSS custom properties there — Tailwind v4 picks them up automatically.

---

## Deployment

This site is fully statically prerendered (`○ Static`) and can be deployed to any static host.

### Vercel (Recommended)
Push to GitHub and connect the repository on [vercel.com](https://vercel.com). Zero configuration required.

### Other Hosts (Netlify, Cloudflare Pages, GitHub Pages)
```bash
npm run build
# Deploy the generated .next directory per your host's documentation
```

---

## License

This is a personal portfolio — the **code and structure** are open for reference and inspiration. Please do not clone and deploy the site as-is with someone else's identity or content.

---

<div align="center">
  <sub>Designed · Developed · Iterated — NILADRI PAL · 2026</sub>
</div>
