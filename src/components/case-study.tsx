"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, CheckCircle, AlertTriangle, Cpu, Terminal, Sparkles, BookOpen, ShieldAlert, Code2, Globe, Star } from "lucide-react";

interface CaseStudyProps {
  project: "secureu" | "aurabeauty" | null;
  onClose: () => void;
}

export default function CaseStudy({ project, onClose }: CaseStudyProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      
      if (e.key === "Tab") {
        const modal = document.getElementById("case-study-panel");
        if (!modal) return;
        
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex="0"]'
        );
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    
    // Focus the first element (close button) on open
    const modal = document.getElementById("case-study-panel");
    if (modal) {
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex="0"]');
      if (focusable.length > 0) (focusable[0] as HTMLElement).focus();
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const isSecureU = project === "secureu";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-end bg-charcoal/30 backdrop-blur-sm p-4 sm:p-6"
    >
      {/* Backdrop closer */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Panel */}
      <motion.div
        id="case-study-panel"
        initial={{ x: "100%", opacity: 0.9 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0.9 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-4xl h-full bg-warm-white border-l border-muted-brown/10 shadow-2xl rounded-2xl sm:rounded-r-none flex flex-col z-10 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-muted-brown/10 bg-soft-cream/35">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#6D5F54]/10 text-xs font-semibold uppercase tracking-wider text-muted-brown mb-2">
              {isSecureU ? "Cybersecurity & AI Audit" : "AI Recommendation Marketplace"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal">
              {isSecureU ? "SecureU — Threat Scanner & Assistant" : "AuraBeauty AI — Salon Marketplace"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-muted-brown/10 hover:bg-soft-cream/60 text-charcoal/60 hover:text-charcoal transition-colors cursor-none focus:outline-none focus:ring-1 focus:ring-subtle-gold"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-12 scrollbar-thin">
          
          {/* Section 1: Executive Summary */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <BookOpen className="w-5 h-5 text-subtle-gold" /> 1. Executive Summary
            </h3>
            <div className="text-sm text-charcoal/70 leading-relaxed font-sans space-y-3">
              {isSecureU ? (
                <>
                  <p>
                    SecureU was engineered to fill a gap in lightweight security analysis. Many small-scale developers and recruiters lack access to fast, non-resource-intensive network safety auditing interfaces.
                  </p>
                  <p>
                    By merging raw socket handshakes, compliance-check algorithms, and static URL classifiers into a single dashboard, SecureU enables instant threat insights. It integrates a context-aware LLM (Groq LLaMA 3.3) for immediate fix suggestions.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    AuraBeauty AI transforms salon discovery and bookings in the Ahmedabad region by implementing a clean, trust-focused recommendation architecture.
                  </p>
                  <p>
                    The application matches users with salon providers using an AI-guided advice interface. It weights metrics like hygiene, certification, and verification logs using a custom scoring framework (Aura Score), and schedules multiple services dynamically leading up to events.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Section 2: Problem Statement */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <ShieldAlert className="w-5 h-5 text-subtle-gold" /> 2. Problem Statement
            </h3>
            <div className="text-sm text-charcoal/70 leading-relaxed font-sans space-y-3">
              {isSecureU ? (
                <p>
                  Existing threat scanners are heavy, require installation, and output complex logs. Web developers need a way to check if their SSL configs are compliant and if their endpoints are secure, without complex tooling.
                </p>
              ) : (
                <p>
                  Discovering high-quality salon providers lacks objective metrics. Furthermore, coordinating appointments (especially event timelines like bridal treatments) requires manual phone calls and spreadsheet scheduling.
                </p>
              )}
            </div>
          </div>

          {/* Section 3: Research & Planning */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <Terminal className="w-5 h-5 text-subtle-gold" /> 3. Research & Planning
            </h3>
            <div className="text-sm text-charcoal/70 leading-relaxed font-sans space-y-3">
              {isSecureU ? (
                <p>
                  We established key technical constraints: checks must run in under 3 seconds, require zero user configurations, and classify malicious link profiles using lightweight ML models to run efficiently.
                </p>
              ) : (
                <p>
                  We observed that trust and hygiene parameters were highly subjective. Our design goals prioritized a numeric trust score (Aura Score) and an auto-scheduling treatment calendar.
                </p>
              )}
            </div>
          </div>

          {/* Section 4: Solution */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <CheckCircle className="w-5 h-5 text-subtle-gold" /> 4. Solution
            </h3>
            <div className="text-sm text-charcoal/70 leading-relaxed font-sans space-y-3">
              {isSecureU ? (
                <p>
                  SecureU wraps SSL validators, compliance check headers, and active scripts crawlers into a unified Python backend. It couples these audits with a fast Logistic Regression model to assess link safety and Groq APIs to detail remediation.
                </p>
              ) : (
                <p>
                  AuraBeauty AI integrates recommendations and booking into a unified Next.js dashboard. The AI advisor profiles users, while the scheduling calendar updates treatment paths dynamically based on a target event date.
                </p>
              )}
            </div>
          </div>

          {/* Section 5: System Architecture Diagram */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <Cpu className="w-5 h-5 text-subtle-gold" /> 5. System Architecture
            </h3>
            <pre className="p-4 bg-charcoal text-[#F9F6F0] rounded-xl overflow-x-auto text-[11px] font-mono leading-relaxed shadow-inner">
              {isSecureU ? (
`  [Browser Client]
         │
         ▼ (HTTP Request)
  [Flask Web Server]
         │
   ┌─────┴──────────────┐
   ▼ (Audits)           ▼ (URL Classification)
  [Scanner Engine]     [scikit-learn Classifier]
   ├─ SSL socket check  └─ Logistic Regression model
   ├─ Security headers
   └─ Passive crawler
         │
         ▼ (Context Data & Payload)
  [Groq LLaMA 3.3 API]
         │
         ▼ (Explanation Snippets)
  [Security Report Response]`
              ) : (
`  [Client User View]
         │
         ▼ (Date selections, Profiling parameters)
  [Next.js App Router]
         │
   ┌─────┴──────────────────┐
   ▼                        ▼
  [Recommendation Engine]  [Booking Orchestration]
   ├─ Skin/Hair Advisor     ├─ Treatment duration checks
   └─ Aura Score weighting  └─ Bridal date math calendar
         │                        │
         └──────────┬─────────────┘
                    ▼
              [PostgreSQL DB]`
              )}
            </pre>
          </div>

          {/* Section 6: Development Process */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <Code2 className="w-5 h-5 text-subtle-gold" /> 6. Development Process
            </h3>
            <div className="text-sm text-charcoal/70 leading-relaxed font-sans space-y-3">
              {isSecureU ? (
                <p>
                  We built a simple command-line Python socket connection utility first. Next, we migrated the socket logic to an asynchronous Flask service, added the training data classifiers, and created the dashboard interface.
                </p>
              ) : (
                <p>
                  We prototyped the recommendation rules as static templates, then implemented the AI Advisor with LLM prompts. We refactored calendar state handling to dynamically update using Next.js client utilities.
                </p>
              )}
            </div>
          </div>

          {/* Section 7: Challenges */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <AlertTriangle className="w-5 h-5 text-subtle-gold" /> 7. Key Challenges
            </h3>
            <div className="text-sm text-charcoal/70 leading-relaxed font-sans space-y-3">
              {isSecureU ? (
                <p>
                  **Socket Timout Latency**: Deep socket checks caused requests to block. We solved this by implementing async timeout hooks and limiting DNS resolution attempts.
                </p>
              ) : (
                <p>
                  **Appointment Date Math**: Recalculating timelines across timezone shifts caused scheduling overlap errors. We normalized dates to UTC inside our TypeScript interfaces.
                </p>
              )}
            </div>
          </div>

          {/* Section 8: Engineering Decisions & Trade-offs */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <Cpu className="w-5 h-5 text-subtle-gold" /> 8. Engineering Decisions & Trade-offs
            </h3>
            <div className="text-sm text-charcoal/70 leading-relaxed font-sans space-y-4">
              {isSecureU ? (
                <>
                  <p>
                    **Why Flask over Node?**: Python&apos;s native socket-handling and scikit-learn ecosystems made it ideal for security parsing and running prediction vectors. Flask provided a lightweight framework for these tasks.
                  </p>
                  <p>
                    **Why Logistic Regression?**: A Logistic Regression classifier requires minimal compute resources and memory compared to deep neural networks, making it ideal to run inside a basic Flask process thread.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    **Why Next.js App Router?**: The App Router enables fast server-side rendering for marketplace content while keeping search engine compliance high. It allows client hooks for dynamic user selections.
                  </p>
                  <p>
                    **Why TypeScript?**: Date manipulation loops can easily lead to runtime errors. TypeScript interface validations helped catch these bugs during compilation.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Section 9: Results */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <CheckCircle className="w-5 h-5 text-subtle-gold" /> 9. Results
            </h3>
            <div className="text-sm text-charcoal/70 leading-relaxed font-sans space-y-2">
              {isSecureU ? (
                <ul className="list-disc list-inside space-y-1">
                  <li>Successful deployment of asynchronous vulnerability scan loop.</li>
                  <li>Fast SSL validator execution.</li>
                  <li>Groq AI assistant integration.</li>
                </ul>
              ) : (
                <ul className="list-disc list-inside space-y-1">
                  <li>Integrated AI recommendation Advisor.</li>
                  <li>Unified scheduling calendar working across timezones.</li>
                  <li>Trust-focused scoring system parameters (Aura Score).</li>
                </ul>
              )}
            </div>
          </div>

          {/* Section 10: Lessons Learned */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <BookOpen className="w-5 h-5 text-subtle-gold" /> 10. Lessons Learned
            </h3>
            <div className="text-sm text-charcoal/70 leading-relaxed font-sans space-y-3">
              {isSecureU ? (
                <p>
                  Combining heuristics-based compliance rules with a machine learning classification model yields a much safer scanning system than relying on either mechanism alone.
                </p>
              ) : (
                <p>
                  Creating custom scheduling algorithms taught us that date math requires robust validation rules to handle boundary states like leap years and timezone offsets.
                </p>
              )}
            </div>
          </div>

          {/* Section 11: Future Roadmap */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <Sparkles className="w-5 h-5 text-subtle-gold" /> 11. Future Roadmap
            </h3>
            <div className="text-sm text-charcoal/70 leading-relaxed font-sans space-y-2">
              {isSecureU ? (
                <ul className="list-disc list-inside space-y-1">
                  <li>Implement JWT Authentication for secure report history tracking.</li>
                  <li>Set up containerized scanning engines using Docker.</li>
                  <li>Add automated CI/CD checks on GitHub pushes.</li>
                </ul>
              ) : (
                <ul className="list-disc list-inside space-y-1">
                  <li>Integrate direct billing APIs (Stripe) for appointment deposits.</li>
                  <li>Implement automated WhatsApp reminders for booking details.</li>
                  <li>Add containerized deployment pipelines to scale the recommendation engine.</li>
                </ul>
              )}
            </div>
          </div>

          {/* Section 12: Media Gallery */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <Globe className="w-5 h-5 text-subtle-gold" /> 12. Media Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-charcoal/50 uppercase tracking-widest font-sans">
                  Desktop Interface
                </span>
                <div className="rounded-xl overflow-hidden border border-muted-brown/10 shadow-sm">
                  <Image
                    src={isSecureU ? "/secureu_screenshot.png" : "/aurabeauty_screenshot.png"}
                    alt="Desktop View"
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-charcoal/50 uppercase tracking-widest font-sans">
                  Mobile Experience
                </span>
                <div className="rounded-xl overflow-hidden border border-muted-brown/10 shadow-sm max-w-[240px] mx-auto sm:mx-0">
                  <Image
                    src="/mobile_homepage.png"
                    alt="Mobile View"
                    width={240}
                    height={480}
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 13: GitHub Repository Metadata */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <Star className="w-5 h-5 text-subtle-gold" /> 13. Repository Parameters
            </h3>
            <div className="p-5 rounded-xl border border-muted-brown/10 bg-soft-cream/20 font-sans grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="space-y-1">
                <span className="font-semibold uppercase tracking-wider text-charcoal/40 block">Repository</span>
                <a
                  href={isSecureU ? "https://github.com/Rudra4604/SecureU" : "https://github.com/Rudra4604/AuraBeautyAI"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-charcoal hover:text-subtle-gold block truncate cursor-none"
                >
                  {isSecureU ? "Rudra4604/SecureU" : "Rudra4604/AuraBeautyAI"}
                </a>
              </div>
              <div className="space-y-1">
                <span className="font-semibold uppercase tracking-wider text-charcoal/40 block">Main Tech</span>
                <p className="font-bold text-charcoal">{isSecureU ? "Python & Flask" : "Next.js & TS"}</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold uppercase tracking-wider text-charcoal/40 block">Status</span>
                <p className="font-bold text-green-700">✓ Production Ready</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold uppercase tracking-wider text-charcoal/40 block">Last Updated</span>
                <p className="font-bold text-charcoal">June 2026</p>
              </div>
            </div>
          </div>

          {/* Section 14: Technical Highlights */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 border-b border-muted-brown/5 pb-2">
              <Terminal className="w-5 h-5 text-subtle-gold" /> 14. Technical Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
              {isSecureU ? (
                <>
                  <div className="flex items-center gap-2 text-charcoal/80">
                    <span className="text-subtle-gold">⚡</span>
                    <strong>Groq LLaMA Integration</strong>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/80">
                    <span className="text-subtle-gold">⚡</span>
                    <strong>Logistic Regression Classifier</strong>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/80">
                    <span className="text-subtle-gold">⚡</span>
                    <strong>SSL Socket Analysis</strong>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/80">
                    <span className="text-subtle-gold">⚡</span>
                    <strong>Compliance Audits Crawler</strong>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-charcoal/80">
                    <span className="text-subtle-gold">⚡</span>
                    <strong>AI Recommendation Profiler</strong>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/80">
                    <span className="text-subtle-gold">⚡</span>
                    <strong>Structured Bridal Calendar API</strong>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/80">
                    <span className="text-subtle-gold">⚡</span>
                    <strong>Aura Score Logic weighting</strong>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/80">
                    <span className="text-subtle-gold">⚡</span>
                    <strong>Client-side Calendar state</strong>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>

        {/* Footer (Links) */}
        <div className="p-6 border-t border-muted-brown/10 flex items-center justify-between bg-soft-cream/35">
          <div className="flex gap-4">
            <a
              href={isSecureU ? "https://github.com/Rudra4604/SecureU" : "https://github.com/Rudra4604/AuraBeautyAI"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-warm-beige bg-charcoal hover:bg-muted-brown rounded-full transition-colors cursor-none focus:outline-none focus:ring-1 focus:ring-subtle-gold"
            >
              View Code
            </a>
            <button
              onClick={() => alert("Simulation mode: live demo link is simulated.")}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal bg-warm-white border border-muted-brown/10 hover:bg-soft-cream rounded-full transition-colors cursor-none focus:outline-none focus:ring-1 focus:ring-subtle-gold"
            >
              Live Demo
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-semibold uppercase tracking-widest text-charcoal/60 hover:text-charcoal cursor-none focus:outline-none focus:ring-1 focus:ring-subtle-gold"
          >
            Close Case Study
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
