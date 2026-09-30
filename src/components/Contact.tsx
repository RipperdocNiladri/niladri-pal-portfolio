"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";

export default function Contact() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [dispatched, setDispatched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = "contact.niladripal0810@gmail.com";
    const emailSubject = encodeURIComponent(
      subject || `Transmission from ${senderName || "Portfolio Visitor"}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );

    // Open native email client
    window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${bodyContent}`;

    setDispatched(true);
    setTimeout(() => {
      setDispatched(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 bg-tech-navy/30 border-t border-tech-border/20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan-muted uppercase tracking-widest mb-1">
            {"// 04 / TRANSMISSION"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            LET&apos;S BUILD SOMETHING
            <span className="h-px bg-gradient-to-r from-cyan-glow/50 to-transparent flex-grow max-w-xs" />
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Open for innovative project collaborations, engineering discussions, and hardware-software experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Transmission Form (Left) */}
          <div className="lg:col-span-7 hud-cut-box hud-bracket-top-right p-8 rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="senderName"
                    className="block text-xs font-mono text-cyan-muted mb-2 uppercase"
                  >
                    {"// SENDER_NAME"}
                  </label>
                  <input
                    id="senderName"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full bg-tech-navy/80 border border-slate-800 rounded px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow font-mono transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="senderEmail"
                    className="block text-xs font-mono text-cyan-muted mb-2 uppercase"
                  >
                    {"// COMM_ADDRESS (EMAIL)"}
                  </label>
                  <input
                    id="senderEmail"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-tech-navy/80 border border-slate-800 rounded px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow font-mono transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono text-cyan-muted mb-2 uppercase"
                >
                  {"// SUBJECT_HEADER"}
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project Collaboration / Technical Discussion"
                  className="w-full bg-tech-navy/80 border border-slate-800 rounded px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow font-mono transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-cyan-muted mb-2 uppercase"
                >
                  {"// TRANSMISSION_PAYLOAD (MESSAGE)"}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your engineering idea, collaboration parameters, or inquiry..."
                  className="w-full bg-tech-navy/80 border border-slate-800 rounded px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow font-mono resize-none transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                {dispatched && (
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>✓ DISPATCHED TO EMAIL CLIENT</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="hud-cut-box px-8 py-3.5 border border-cyan-glow text-cyan-glow font-mono text-xs sm:text-sm tracking-widest uppercase hover:bg-cyan-glow hover:text-black transition-all duration-300 shadow-cyan-button sm:ml-auto flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>[ TRANSMIT MESSAGE ]</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Interactive Terminal & Direct Links (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Cyber Terminal Screen */}
            <div className="hud-cut-box rounded-sm p-5 border border-slate-800 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-slate-500 text-[10px]">TTY: ece-node@niladri</span>
              </div>
              <div className="space-y-2 text-slate-300 leading-relaxed font-mono">
                <div className="text-slate-500">&gt; establish_remote_link --node=niladri.pal</div>
                <div className="text-cyan-glow">&gt; connection established: [TLS 1.3 // 256-BIT]</div>
                <div className="text-slate-400">&gt; location: India [National Node]</div>
                <div className="text-slate-400">&gt; discipline: ECE Student / Developer</div>
                <div className="text-slate-400">&gt; response_window: &lt; 24 standard hours</div>
                <div className="text-emerald-400 flex items-center gap-1">
                  <span>&gt; ready_for_transmission</span>
                  <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block" />
                </div>
              </div>
            </div>

            {/* Direct Node Info HUD */}
            <div className="space-y-3">
              <a
                href="mailto:contact.niladripal0810@gmail.com"
                className="hud-cut-box p-4 rounded flex items-center justify-between group border border-slate-800 hover:border-cyan-glow/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-muted" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">
                      DIRECT ELECTRONIC MAIL
                    </div>
                    <div className="text-sm font-mono text-white group-hover:text-cyan-glow transition-colors">
                      contact.niladripal0810@gmail.com
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-glow opacity-0 group-hover:opacity-100 transition-opacity">
                  SEND ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/niladri-pal-7262893a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="hud-cut-box p-4 rounded flex items-center justify-between group border border-slate-800 hover:border-cyan-glow/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-cyan-muted" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">
                      PROFESSIONAL NETWORK
                    </div>
                    <div className="text-sm font-mono text-white group-hover:text-cyan-glow transition-colors">
                      linkedin.com/in/niladri-pal
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-glow opacity-0 group-hover:opacity-100 transition-opacity">
                  CONNECT ↗
                </span>
              </a>

              <a
                href="https://github.com/RipperdocNiladri"
                target="_blank"
                rel="noopener noreferrer"
                className="hud-cut-box p-4 rounded flex items-center justify-between group border border-slate-800 hover:border-cyan-glow/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-cyan-muted" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">
                      CODEBASE VAULT
                    </div>
                    <div className="text-sm font-mono text-white group-hover:text-cyan-glow transition-colors">
                      github.com/RipperdocNiladri
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-glow opacity-0 group-hover:opacity-100 transition-opacity">
                  INSPECT ↗
                </span>
              </a>

              <a
                href="https://www.instagram.com/ripperdocniladri?igsi=MW5sazkxZHR1eDRkZw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hud-cut-box p-4 rounded flex items-center justify-between group border border-slate-800 hover:border-cyan-glow/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <InstagramIcon className="w-4 h-4 text-cyan-muted" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">
                      VISUAL FEED
                    </div>
                    <div className="text-sm font-mono text-white group-hover:text-cyan-glow transition-colors">
                      instagram.com/niladri_pal_
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-glow opacity-0 group-hover:opacity-100 transition-opacity">
                  VISIT ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
