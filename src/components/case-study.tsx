"use client";

import { motion } from "framer-motion";
import { X, CheckCircle, AlertTriangle, Cpu, Terminal, Sparkles, BookOpen } from "lucide-react";

interface CaseStudyProps {
  project: "secureu" | "aurabeauty" | null;
  onClose: () => void;
}

export default function CaseStudy({ project, onClose }: CaseStudyProps) {
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
        initial={{ x: "100%", opacity: 0.9 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0.9 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-3xl h-full bg-warm-white border-l border-muted-brown/10 shadow-2xl rounded-2xl sm:rounded-r-none flex flex-col z-10 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-muted-brown/10 bg-soft-cream/35">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#6D5F54]/10 text-xs font-semibold uppercase tracking-wider text-muted-brown mb-2">
              {isSecureU ? "Cybersecurity & AI" : "AI Marketplace"}
            </span>
            <h2 className="text-2xl font-bold text-charcoal">
              {isSecureU ? "SecureU — Threat Scanner & Assistant" : "AuraBeauty AI — Salon Marketplace"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-muted-brown/10 hover:bg-soft-cream/60 text-charcoal/60 hover:text-charcoal transition-colors cursor-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-10 scrollbar-thin">
          {/* Section: Overview */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-subtle-gold" /> Overview
            </h3>
            <p className="text-sm text-charcoal/70 leading-relaxed font-sans">
              {isSecureU
                ? "SecureU is a hybrid web vulnerability scanner and threat intelligence platform. It conducts automated heuristics-based audits of web servers (such as SSL socket validation and security header configuration) alongside a machine learning pipeline (Logistic Regression) to predict if a URL holds malicious intent. It couples this with an LLM agent assistant (Groq/LLaMA 3.3) for context-based vulnerability explanation."
                : "AuraBeauty AI is an AI-powered marketplace specializing in salon discovery, booking orchestration, and bridal prep timelines. It targets the beauty space in Ahmedabad, providing users with personalized beauty advice based on skin/hair profiling via an AI advisor, evaluating salons via a proprietary rating system (Aura Score), and rendering structured bridal timelines."}
            </p>
          </div>

          {/* Section: Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2.5 p-5 rounded-xl bg-[#6D5F54]/5 border border-muted-brown/5">
              <h4 className="text-sm font-bold text-charcoal flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-muted-brown" /> The Problem
              </h4>
              <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                {isSecureU
                  ? "Recruiters and small developers lack lightweight web audit tools. Traditional scanners are resource-heavy, require complex configuration, and output cryptic text errors that require manual research to decode."
                  : "Navigating salon services and scheduling multiple treatments (especially leading up to major events like weddings) is disorganized. Finding hygienic, high-quality salon providers lacks a reliable metrics scorecard."}
              </p>
            </div>
            <div className="space-y-2.5 p-5 rounded-xl bg-subtle-gold/10 border border-subtle-gold/15">
              <h4 className="text-sm font-bold text-charcoal flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-subtle-gold" /> The Solution
              </h4>
              <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                {isSecureU
                  ? "SecureU provides an interactive, glassmorphic dashboard where a user enters a URL to get an instant safety report. Behind the scenes, active audits check SSL parameters, analyze responses, classify risk via ML, and invoke an interactive chat assistant with code remediation snippets."
                  : "AuraBeauty AI integrates recommendations and booking into a unified flow. The AI Beauty Advisor builds custom timelines, while the Aura Score uses concrete parameters (hygiene, technician qualifications) to list providers transparently."}
              </p>
            </div>
          </div>

          {/* Section: Architecture / Engineering Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2">
              <Cpu className="w-5 h-5 text-subtle-gold" /> Architecture & Implementation
            </h3>
            <div className="p-5 rounded-xl border border-muted-brown/10 bg-soft-cream/20 font-sans space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">Backend</span>
                  <p className="text-xs font-semibold text-charcoal">{isSecureU ? "Python 3.11 / Flask" : "Next.js 15 (App Router)"}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">AI Pipeline</span>
                  <p className="text-xs font-semibold text-charcoal">{isSecureU ? "Scikit-Learn Logistic Regression & Groq" : "Structured Prompt Templates"}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">Frontend</span>
                  <p className="text-xs font-semibold text-charcoal">{isSecureU ? "Bootstrap 5 & Custom CSS" : "TypeScript & Tailwind CSS"}</p>
                </div>
              </div>

              {isSecureU ? (
                <div className="pt-4 border-t border-muted-brown/10 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-brown flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" /> Cyber Heuristics Audit Parameters
                  </span>
                  <ul className="text-xs space-y-2 text-charcoal/70 list-disc list-inside">
                    <li><strong>SSL Validator</strong>: Custom socket-level handshakes inspecting TLS version parameters.</li>
                    <li><strong>Compliance Audit</strong>: Inspects headers for CSP, X-Frame-Options, HSTS, XSS-Protection.</li>
                    <li><strong>Vulnerability Crawler</strong>: Active script parsing looking for raw XSS/SQLi payload signatures.</li>
                  </ul>
                </div>
              ) : (
                <div className="pt-4 border-t border-muted-brown/10 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-brown flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Advisor & Planner Features
                  </span>
                  <ul className="text-xs space-y-2 text-charcoal/70 list-disc list-inside">
                    <li><strong>Aura Score</strong>: Standardized weighting across provider credentials, sanitization logs, and verified reviews.</li>
                    <li><strong>Bridal Pipeline</strong>: Recomputes appointment timelines dynamically based on wedding dates and treatment durations.</li>
                    <li><strong>Chat Assistant</strong>: A floating assistant giving recommendations.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Section: Challenges & Lessons */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-charcoal">Challenges & Key Learnings</h3>
            <div className="space-y-4 text-sm text-charcoal/70 font-sans">
              <p className="leading-relaxed">
                {isSecureU
                  ? "One key engineering challenge was managing slow timeouts during deep socket inspection. Implementing async timeout handling in Flask prevented scans from blocking the server main loop. Additionally, training the scikit-learn classifier taught me about the importance of dataset balancing to avoid false positives on legitimate URLs."
                  : "Structuring the scheduling logic in AuraBeauty AI required complex date operations. Recomputing treatment calendars dynamically when an event date changed required solid state management and clean TypeScript validation checks."}
              </p>
              <p className="leading-relaxed">
                <strong>Key Takeaway:</strong> {isSecureU 
                  ? "Combining heuristic verification with probabilistic ML algorithms results in a far stronger validation layer than relying on either mechanism alone."
                  : "Premium UI/UX is not just about looks—it is about clear layouts, smooth transitions, and building interfaces that clarify complex processes."}
              </p>
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
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-warm-beige bg-charcoal hover:bg-muted-brown rounded-full transition-colors cursor-none"
            >
              View Code
            </a>
            <button
              onClick={() => alert("Simulation mode: live demo link is simulated.")}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal bg-warm-white border border-muted-brown/10 hover:bg-soft-cream rounded-full transition-colors cursor-none"
            >
              Live Demo
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-semibold uppercase tracking-widest text-charcoal/60 hover:text-charcoal cursor-none"
          >
            Close Project
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
