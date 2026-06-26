"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { ArrowDown, ArrowUpRight, Shield, Brain, Cpu, Code } from "lucide-react";

const roles = [
  { text: "Software Engineer", icon: Code, color: "text-muted-brown" },
  { text: "AI/ML Engineer", icon: Brain, color: "text-subtle-gold" },
  { text: "Full Stack Developer", icon: Cpu, color: "text-charcoal" },
  { text: "Cybersecurity Enthusiast", icon: Shield, color: "text-muted-brown" },
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const viewProjectsRef = useMagnetic<HTMLButtonElement>(0.2);
  const contactRef = useMagnetic<HTMLAnchorElement>(0.2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const ActiveIcon = roles[currentRoleIndex].icon;

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-center items-center px-6 pt-24 text-center overflow-hidden"
    >
      {/* Abstract floating design blobs (Premium background detail) */}
      <div className="absolute top-[20%] left-[15%] w-72 h-72 rounded-full bg-[#6D5F54]/5 filter blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-[#C5A880]/5 filter blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Subtle top indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-muted-brown/10 bg-warm-white/60 text-xs text-charcoal/70 mb-8 uppercase tracking-widest"
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

        {/* Animated role switcher */}
        <div className="h-12 sm:h-16 flex items-center justify-center mb-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 text-lg sm:text-2xl font-medium tracking-wide text-charcoal/80"
            >
              <ActiveIcon className="w-6 h-6 text-subtle-gold" />
              <span className={roles[currentRoleIndex].color}>
                {roles[currentRoleIndex].text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bio summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl text-sm sm:text-base text-charcoal/70 leading-relaxed font-sans mb-12 text-balance"
        >
          Crafting production-grade software scanning systems and intelligent marketplaces. 
          B.Tech CSE student (2027) combining active cybersecurity compliance tools with machine learning threat modeling.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <button
            ref={viewProjectsRef}
            onClick={() => scrollTo("projects")}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-warm-beige bg-charcoal hover:bg-muted-brown rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-none"
          >
            Explore Projects
            <ArrowDown className="w-4 h-4" />
          </button>
          
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            ref={contactRef}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-charcoal bg-warm-white hover:bg-soft-cream border border-muted-brown/10 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-none"
          >
            Get In Touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-charcoal/40"
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
