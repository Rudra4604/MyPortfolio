"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Shield, Brain, Sparkles, Database, FileCode, Check } from "lucide-react";
import CaseStudy from "./case-study";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<"secureu" | "aurabeauty" | null>(null);

  const categories = [
    { label: "All", id: "all" },
    { label: "AI/ML", id: "ai" },
    { label: "Cybersecurity", id: "security" },
    { label: "Web Apps", id: "web" },
  ];

  const projects = [
    {
      id: "secureu",
      title: "SecureU — Cybersecurity Scanner & AI Threat Assistant",
      tag: "Featured Case Study",
      valueProp: "A production-ready compliance scanner and AI-powered vulnerability assistant.",
      categories: ["security", "ai", "web"],
      description: "A production-ready web security compliance audit platform. Combines SSL socket handshake validation and passive heuristic script crawling with a Logistic Regression classifier to detect threat vectors. Features a context-aware LLaMA 3.3 chatbot via Groq API for remediation help.",
      tech: ["Python", "Flask", "Scikit-Learn", "Groq LLaMA 3.3", "Bootstrap 5"],
      metrics: [
        "ML-powered threat detection",
        "SSL/TLS socket auditing",
        "AI security assistant integration",
        "Automated compliance scanning"
      ],
      icon: Shield,
      featured: true,
      image: "/secureu_screenshot.png"
    },
    {
      id: "aurabeauty",
      title: "AuraBeauty AI — Salon Discovery & Advisor",
      tag: "Featured Case Study",
      valueProp: "Intelligent salon marketplace and bridal planner optimizing client booking journeys.",
      categories: ["ai", "web"],
      description: "A premium marketplace providing personalized salon discovery in Ahmedabad. Leverages skin/hair parameter AI advice, a proprietary hygiene-evaluation algorithm (Aura Score), dynamic bridal treatments scheduling calendars, and admin charts dashboards.",
      tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
      metrics: [
        "AI beauty advisor profiling",
        "Personalized recommendations",
        "Aura Score marketplace trust",
        "Dynamic booking workflows"
      ],
      icon: Sparkles,
      featured: true,
      image: "/aurabeauty_screenshot.png"
    },
    {
      id: "satellite",
      title: "Satellite Image Classifier",
      tag: "AI / ML Project",
      categories: ["ai"],
      description: "Machine learning classifier designed to analyze multi-spectral satellite image data. Segmented image datasets to categorize regions into forest canopy, agricultural plots, urban developments, and water bodies.",
      tech: ["Python", "Neural Networks", "NumPy", "OpenCV"],
      icon: Brain,
      featured: false,
    },
    {
      id: "electricity",
      title: "Electricity Unit Generator & Predictor",
      tag: "Python Tool",
      categories: ["ai"],
      description: "Data processing script analyzing seasonal power usage patterns, generating synthetic datasets, and running regression checks to estimate home utility unit consumptions.",
      tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
      icon: Database,
      featured: false,
    },
    {
      id: "solar",
      title: "Solar Position & Efficiency Modeler",
      tag: "Data Analysis",
      categories: ["ai"],
      description: "Mathematical modeling scripts calculating panel azimuth angles and analyzing solar radiance variables to compute potential efficiency returns based on geographical variables.",
      tech: ["Python", "SciPy", "Matplotlib"],
      icon: FileCode,
      featured: false,
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.categories.includes(activeCategory)
  );

  const getCategoryLabel = (catId: string) => {
    switch (catId) {
      case "security": return "Cybersecurity";
      case "ai": return "AI & ML";
      case "web": return "Web Architecture";
      default: return catId;
    }
  };

  return (
    <section id="projects" className="py-24 bg-soft-cream/30 border-t border-b border-muted-brown/10 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-lg">
            <span className="text-xs uppercase tracking-widest text-subtle-gold font-semibold">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-charcoal">
              Case studies & developer repositories.
            </h2>
          </div>

          {/* Filtering */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-300 cursor-none ${
                  activeCategory === cat.id
                    ? "bg-charcoal border-charcoal text-warm-beige shadow-sm"
                    : "bg-warm-white border-muted-brown/15 text-charcoal/70 hover:border-muted-brown/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 gap-16 mb-16">
          {filteredProjects
            .filter((p) => p.featured)
            .map((project) => {
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 bg-warm-white border border-muted-brown/15 rounded-3xl shadow-sm hover:shadow-md hover:border-muted-brown/25 transition-all duration-300 overflow-hidden"
                >
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-subtle-gold bg-soft-cream/60 px-3 py-1 rounded">
                          {project.tag}
                        </span>
                        {project.categories.map((cat) => (
                          <span key={cat} className="text-[10px] uppercase font-semibold text-charcoal/40 border border-muted-brown/10 px-2 py-0.5 rounded font-sans">
                            {getCategoryLabel(cat)}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-charcoal leading-tight group-hover:text-muted-brown transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm font-semibold text-muted-brown/90 italic font-sans leading-relaxed">
                        &ldquo;{project.valueProp}&rdquo;
                      </p>
                      
                      <p className="text-sm text-charcoal/70 leading-relaxed font-sans">
                        {project.description}
                      </p>

                      {/* Quick Metrics Section */}
                      <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-muted-brown/5">
                        {project.metrics?.map((metric, mIdx) => (
                          <div key={mIdx} className="flex items-center gap-2 text-xs text-charcoal/75 font-sans font-medium">
                            <div className="p-0.5 rounded-full bg-subtle-gold/10 text-subtle-gold">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech & Action */}
                    <div className="space-y-4 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs rounded-md bg-soft-cream/45 border border-muted-brown/5 text-charcoal/80 font-sans font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedCaseStudy(project.id as "secureu" | "aurabeauty")}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-charcoal hover:text-muted-brown cursor-none pt-2"
                      >
                        Read Full Case Study
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </button>
                    </div>
                  </div>

                  {/* Right Side Visual Block: Real Image Screenshot */}
                  <div className="lg:col-span-5 relative rounded-2xl border border-muted-brown/10 overflow-hidden shadow-sm aspect-video sm:aspect-auto min-h-[260px] group-hover:border-muted-brown/20 transition-all duration-300">
                    <Image
                      src={project.image || ""}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Mini Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects
            .filter((p) => !p.featured)
            .map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-warm-white border border-muted-brown/10 rounded-2xl shadow-sm hover:shadow-md hover:border-muted-brown/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-soft-cream/40 border border-muted-brown/5 text-subtle-gold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-charcoal/40 uppercase tracking-widest font-sans">
                        {project.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-charcoal">
                      {project.title}
                    </h3>
                    <p className="text-xs text-charcoal/60 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-muted-brown/5 mt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] rounded bg-soft-cream/45 border border-muted-brown/5 text-charcoal/70 font-sans font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href="https://github.com/Rudra4604"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-charcoal/70 hover:text-charcoal cursor-none"
                    >
                      View Repository
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>

      {/* Case Study Panel (dynamic overlay) */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <CaseStudy
            project={selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
