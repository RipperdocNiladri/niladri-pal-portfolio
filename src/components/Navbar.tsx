"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  id: string;
  number: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", number: "01.", label: "HOME" },
  { id: "about", number: "02.", label: "ABOUT" },
  { id: "projects", number: "03.", label: "PROJECTS" },
  { id: "skills", number: "04.", label: "SKILLS" },
  { id: "contact", number: "05.", label: "CONTACT" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 lg:left-20 right-0 z-50 bg-void/85 backdrop-blur-xl border-b border-tech-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Logo Branding */}
        <a
          href="#home"
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 group"
          aria-label="Niladri Pal - Back to top"
        >
          <div className="w-10 h-10 border border-cyan-glow/40 bg-tech-navy/80 flex items-center justify-center font-mono font-bold text-white text-lg tracking-wider rounded-sm relative group-hover:border-cyan-glow transition-colors shadow-cyan-glow">
            <span className="text-cyan-glow">N</span>P
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-200 group-hover:text-cyan-glow transition-colors">
              NILADRI PAL
            </span>
            <span className="text-[9px] font-mono text-slate-500 tracking-widest">
              SYS.VER_1.0 // ECE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 transition-colors group ${
                  isActive ? "text-cyan-glow" : "text-slate-400 hover:text-cyan-glow"
                }`}
              >
                <span className="text-cyan-muted mr-1">{item.number}</span>
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-cyan-glow transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Connect Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className="hidden sm:inline-flex relative group px-5 py-2.5 rounded-sm border border-cyan-glow/50 bg-cyan-glow/5 hover:bg-cyan-glow/15 text-cyan-glow text-xs font-mono tracking-widest uppercase transition-all duration-300 shadow-cyan-button items-center gap-2"
          >
            <span>LET&apos;S CONNECT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow inline-block group-hover:scale-125 transition-transform" />
          </a>

          {/* Mobile Menu Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-cyan-glow focus:outline-none focus:ring-1 focus:ring-cyan-glow rounded border border-slate-800"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-tech-border/40 bg-tech-navy/95 backdrop-blur-2xl px-6 py-5 flex flex-col gap-3 font-mono text-sm overflow-hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`py-2 border-b border-slate-800/80 flex items-center justify-between ${
                  activeSection === item.id
                    ? "text-cyan-glow"
                    : "text-slate-300 hover:text-cyan-glow"
                }`}
              >
                <span>
                  <span className="text-cyan-muted mr-2">{item.number}</span>
                  {item.label}
                </span>
                <span className="text-xs text-slate-500">→</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="mt-2 py-2.5 px-4 text-center rounded border border-cyan-glow/50 text-cyan-glow bg-cyan-glow/10 text-xs font-mono tracking-widest uppercase flex items-center justify-center gap-2"
            >
              <span>TRANSMIT SIGNAL</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
