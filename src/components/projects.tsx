"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Brain, Sparkles, Database, FileCode, ArrowUpRight } from "lucide-react";
import CaseStudy from "./case-study";
import ProjectCard from "./project-card";

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
      description: "AI-powered cybersecurity auditing platform that scans websites for SSL, compliance, and security vulnerabilities while providing intelligent remediation through an integrated AI assistant.",
      tech: ["Python", "Flask", "Scikit-Learn", "Groq", "Bootstrap", "MySQL"],
      metrics: [
        "AI Threat Detection",
        "SSL/TLS Validation",
        "AI Assistant",
        "Compliance Scanner"
      ],
      icon: Shield,
      featured: true,
      image: "/projects/secureu.webp",
      githubUrl: "https://github.com/Rudra4604/SecureU",
      websiteUrl: "https://secure-u.vercel.app/",
      projectUrl: "/projects/secureu"
    },
    {
      id: "aurabeauty",
      title: "AuraBeauty AI — Salon Discovery & Advisor",
      tag: "Featured Case Study",
      valueProp: "Intelligent salon marketplace and bridal planner optimizing client booking journeys.",
      categories: ["ai", "web"],
      description: "AI-powered beauty advisor and salon booking platform optimizing client booking journeys. Leverages a proprietary hygiene-evaluation algorithm (Aura Score) and skin/hair profiling to provide personalized discovery and scheduling.",
      tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
      metrics: [
        "AI Beauty Advisor",
        "Personalized Profiling",
        "Aura Score Trust System",
        "Dynamic Booking Engine"
      ],
      icon: Sparkles,
      featured: true,
      image: "/projects/aurabeautyai.webp",
      githubUrl: "https://github.com/Rudra4604/AuraBeautyAI",
      websiteUrl: "https://aurabeauty.demo",
      projectUrl: "/projects/aurabeauty-ai"
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
      githubUrl: "https://github.com/Rudra4604/Satellite-Image-Classifier",
      websiteUrl: "https://github.com/Rudra4604",
      projectUrl: "/projects/satellite"
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
      githubUrl: "https://github.com/Rudra4604/Electricity-Unit-Generator-Predictor",
      websiteUrl: "https://github.com/Rudra4604",
      projectUrl: "/projects/electricity"
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
      githubUrl: "https://github.com/Rudra4604/Solar-Position-Efficiency-Modeler",
      websiteUrl: "https://github.com/Rudra4604",
      projectUrl: "/projects/solar"
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
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  features={project.metrics || []}
                  technologies={project.tech || []}
                  githubUrl={project.githubUrl || "https://github.com/Rudra4604"}
                  websiteUrl={project.websiteUrl}
                  onViewProject={() => setSelectedCaseStudy(project.id as "secureu" | "aurabeauty")}
                  image={project.image}
                />
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
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-charcoal/70 hover:text-charcoal cursor-none"
                      >
                        View Repository
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
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
