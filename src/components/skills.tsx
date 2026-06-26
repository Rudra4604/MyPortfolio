"use client";

import { motion } from "framer-motion";
import { Brain, ShieldAlert, Code2, Cpu, Database, MonitorPlay, Settings, Sparkles } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Logistic Regression", "Feature Engineering", "Dataset Preparation", "scikit-learn", "AI Chatbot Orchestration"],
      description: "Training predictive classifiers for URL intent modeling and parsing context payloads into Groq LLaMA models.",
      highlight: true,
    },
    {
      title: "Cybersecurity",
      icon: ShieldAlert,
      skills: ["SSL/TLS Socket Handshakes", "Security Headers Audit", "CSP & HSTS Compliance", "Vulnerability Scanner Heuristics"],
      description: "Conducting active audits against server compliance parameters and identifying signature scripts exploits.",
      highlight: true,
    },
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["TypeScript", "Python", "C++", "SQL", "JavaScript", "HTML5 & CSS3"],
      description: "Writing expressive, robust code across object-oriented patterns and statically typed runtimes.",
      highlight: false,
    },
    {
      title: "Backend Development",
      icon: Cpu,
      skills: ["Next.js (App Router)", "Flask (Python)", "Node.js", "RESTful APIs", "Asynchronous Tasks"],
      description: "Building responsive routing systems, custom session controllers, and non-blocking worker threads.",
      highlight: false,
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "SQL Database Design", "Data Normalization"],
      description: "Designing structured database schemas, scaling indexes, and orchestrating CRUD pipelines.",
      highlight: false,
    },
    {
      title: "Frontend Development",
      icon: MonitorPlay,
      skills: ["React 19", "Tailwind CSS v4", "Framer Motion", "Responsive Layouts"],
      description: "Creating responsive landing layouts, fluid modal transitions, and lagging mouse animations.",
      highlight: false,
    },
    {
      title: "Developer Tools",
      icon: Settings,
      skills: ["Git & GitHub", "Vercel Deployments", "Docker", "ESLint & npm"],
      description: "Managing project versioning, continuous deployments, and static container setups.",
      highlight: false,
    },
  ];

  return (
    <section id="skills" className="py-24 bg-soft-cream/15 border-b border-muted-brown/10 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-subtle-gold font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-charcoal">
            Professional skillset & toolkit.
          </h2>
          <p className="text-sm text-charcoal/60 leading-relaxed font-sans">
            Curated specializations prioritizing intelligent systems and cybersecurity audits.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`p-8 bg-warm-white border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                  category.highlight 
                    ? "border-subtle-gold/40 md:col-span-2 lg:col-span-1 ring-1 ring-subtle-gold/15" 
                    : "border-muted-brown/10"
                }`}
              >
                {/* Highlight background gradient */}
                {category.highlight && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-subtle-gold/5 to-transparent rounded-full pointer-events-none" />
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`p-2.5 rounded-xl border flex items-center justify-center ${
                      category.highlight
                        ? "bg-subtle-gold/10 border-subtle-gold/20 text-subtle-gold"
                        : "bg-soft-cream/60 border-muted-brown/5 text-muted-brown"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      {category.highlight && (
                        <span className="text-[9px] uppercase tracking-wider text-subtle-gold font-bold block">
                          Core Specialization
                        </span>
                      )}
                      <h3 className="text-base font-bold text-charcoal leading-none">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-charcoal/70 leading-relaxed mb-6 font-sans">
                    {category.description}
                  </p>
                </div>

                {/* Skill tag list */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-muted-brown/5 mt-4">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-2.5 py-1 text-xs rounded-md font-medium font-sans ${
                        category.highlight
                          ? "bg-subtle-gold/10 border-subtle-gold/10 text-muted-brown"
                          : "bg-soft-cream/45 border-muted-brown/5 text-charcoal/80"
                      } border`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
