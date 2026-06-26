"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { ArrowDown, FileText } from "lucide-react";
import ParticleNetwork from "@/components/particle-network";

const propositions = [
  "Building AI-powered products for real-world problems.",
  "Engineering secure software with intelligent automation.",
  "Creating production-ready web applications powered by AI.",
  "Designing cybersecurity tools developers actually enjoy using.",
  "Turning complex ideas into polished digital products.",
];

export default function Hero() {
  const [currentPropIndex, setCurrentPropIndex] = useState(0);
  const viewProjectsRef = useMagnetic<HTMLButtonElement>(0.2);
  const resumeRef = useMagnetic<HTMLAnchorElement>(0.2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPropIndex((prev) => (prev + 1) % propositions.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-center items-center px-6 pt-24 text-center overflow-hidden"
    >
      {/* Background Visual Element */}
      <ParticleNetwork />
      
      {/* Abstract floating design blobs (Premium background detail) */}
      <div className="absolute top-[20%] left-[15%] w-72 h-72 rounded-full bg-[#6D5F54]/3 filter blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-[#C5A880]/3 filter blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Subtle top indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.04 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-muted-brown/10 bg-warm-white/70 text-xs text-charcoal/70 mb-8 uppercase tracking-widest transition-colors duration-300 hover:border-subtle-gold/30 cursor-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-subtle-gold animate-pulse" />
          Open for Internship Opportunities
        </motion.div>

        {/* Big name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-charcoal leading-none mb-6"
        >
          Rudra Prajapati
        </motion.h1>

        {/* Animated value propositions switcher */}
        <div className="h-16 sm:h-20 flex items-center justify-center mb-10 overflow-hidden max-w-2xl px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPropIndex}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-lg sm:text-2xl font-medium tracking-wide text-muted-brown"
            >
              {propositions[currentPropIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bio summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl text-sm sm:text-base text-charcoal/75 leading-relaxed font-sans mb-10 text-balance"
        >
          B.Tech Computer Science student building clean, production-grade applications.
          <br className="hidden sm:inline" /> Focusing on the convergence of secure systems architecture, intelligent AI automation, and user-first modern web engineering.
        </motion.p>

        {/* Trust Signals Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-charcoal/50 mb-12"
        >
          <span className="text-subtle-gold">✓ Open to Internships</span>
          <span className="text-charcoal/20 select-none">•</span>
          <span>AI & Cybersecurity</span>
          <span className="text-charcoal/20 select-none">•</span>
          <span>Based in Ahmedabad</span>
          <span className="text-charcoal/20 select-none">•</span>
          <span>Building Since 2023</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <motion.button
            ref={viewProjectsRef}
            onClick={() => scrollTo("projects")}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-warm-beige bg-charcoal hover:bg-muted-brown rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-none"
          >
            Explore Projects
            <ArrowDown className="w-4 h-4" />
          </motion.button>
          
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            ref={resumeRef}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-charcoal bg-warm-white hover:bg-soft-cream border border-muted-brown/10 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-none"
          >
            View Resume
            <FileText className="w-4 h-4 text-charcoal/80" />
          </motion.a>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-charcoal/40 cursor-none"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-6 rounded-full bg-charcoal/30 flex justify-center p-0.5"
        >
          <span className="w-0.5 h-1.5 rounded-full bg-charcoal/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
