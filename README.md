# NILADRI PAL — Engineering Portfolio

A futuristic, high-performance personal engineering portfolio — built from scratch, designed with a **cyberpunk HUD aesthetic**, and engineered for speed, accessibility, and authenticity.

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

```
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
│   ├── ProjectCard.tsx    # Reusable HUD-bracket project card
│   ├── ProjectFilter.tsx  # Category filter pills (ALL / AI ML / VISION / WEB / SYSTEMS)
│   ├── ProjectModal.tsx   # Project specification modal (keyboard accessible)
│   ├── Skills.tsx         # 6-domain capability matrix — honest proficiency tiers
│   ├── Contact.tsx        # Transmission form + cyber terminal + direct links
│   ├── Footer.tsx         # Technical footer — status indicator & scroll-to-top
│   └── Icons.tsx          # Custom SVG brand icons (GitHub, LinkedIn, Instagram)
│
├── data/
│   ├── projects.ts        # Typed project records
│   └── skills.ts          # Structured capabilities by domain & proficiency tier
│
└── lib/
    └── utils.ts           # Class name utility (cn helper)

public/
├── avatar.png             # Self-hosted profile portrait
└── favicon.ico            # Site favicon
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Install & Run

```bash
# Clone the repository
git clone https://github.com/niladri-pal/niladri-portfolio.git
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
| 03 | **Projects** | Filter tabs, Framer Motion animated grid, accessible project specification modal |
| 04 | **Skills** | 6 domains, honest proficiency tiers (`WORKING WITH` · `LEARNING` · `EXPLORING`) |
| 05 | **Contact** | Native `mailto:` form, cyberpunk terminal console, direct social link cards |

### Code Quality
- Zero fake percentages, no fabricated accomplishments, no fake backend
- Keyboard-accessible modal (closes on `Escape` key and backdrop click)
- Semantic HTML throughout
- Static prerendering — no server required to run in production

---

## Customisation

### Adding a New Project
Edit [`src/data/projects.ts`](src/data/projects.ts) and add a new object to the `PROJECTS` array following the `Project` interface. The card and modal are fully driven by this data.

### Adding a New Skill
Edit [`src/data/skills.ts`](src/data/skills.ts) and add a skill item to any domain in `SKILL_DOMAINS`. Use an existing `SkillTier` value: `"WORKING WITH"`, `"LEARNING"`, or `"EXPLORING"`.

### Updating Social Links
All external links (GitHub, LinkedIn, Instagram, Email) are located in:
- [`src/components/SideHud.tsx`](src/components/SideHud.tsx)
- [`src/components/Contact.tsx`](src/components/Contact.tsx)
- [`src/components/Navbar.tsx`](src/components/Navbar.tsx)

### Replacing the Avatar
Replace [`public/avatar.png`](public/avatar.png) with your own image. The image is statically imported in `Hero.tsx` so Next.js will automatically generate a new content hash and invalidate the browser cache on next build.

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
