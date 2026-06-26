"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Search, Sparkles } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "2023 - Present",
      title: "Bachelor of Technology in Computer Science & Engineering",
      institution: "GLS University, Ahmedabad",
      description: "Building core engineering fundamentals in Data Structures, OOPs, Database Systems, Operating Systems, and Cybersecurity. Maintaining a current SGPA of 7.30.",
      icon: GraduationCap,
    },
    {
      year: "2024",
      title: "Deep Dive into Artificial Intelligence & Web Architectures",
      institution: "Self-Guided & University Projects",
      description: "Began training custom classification models (Logistic Regression) and building asynchronous API pipelines using Flask and TypeScript. Developed a passion for combining software systems with intelligent models.",
      icon: Sparkles,
    },
    {
      year: "2025 - 2026",
      title: "Building Real-World Platforms",
      institution: "Active Project Development",
      description: "Designed and engineered SecureU, a network security header and compliance scanner, and AuraBeauty AI, a beauty advisor recommendations engine. Focused on premium product design and microinteractions.",
      icon: Award,
    },
    {
      year: "2026 & Beyond",
      title: "Seeking Software Engineering / AI Internships",
      institution: "Industry Opportunities",
      description: "Looking to deploy skills in full-stack architecture, machine learning models, and system audits to build premium products at scale in a fast-paced team environment.",
      icon: Search,
    },
  ];

  return (
    <section id="about" className="py-24 bg-soft-cream/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-widest text-subtle-gold font-semibold"
            >
              My Story
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-charcoal"
            >
              Handcrafting applications with code and intelligence.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-charcoal/70 leading-relaxed font-sans"
            >
              I am a Software Engineer and AI/ML enthusiast based in Ahmedabad, Gujarat. 
              As a Computer Science and Engineering student at GLS University, I dedicate my time to understanding the overlap between secure systems architecture and intelligent machine learning applications.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-charcoal/70 leading-relaxed font-sans"
            >
              I love building polished products from the ground up, ensuring every page loads instantly, is completely responsive, and feels satisfying to interact with. Whether constructing async scanning engines or training data classifiers, I aim for clean code and recruiter-friendly, premium designs.
            </motion.p>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7 relative pl-4 sm:pl-8">
            {/* Timeline Line indicator */}
            <div className="absolute left-4 sm:left-8 top-2 bottom-2 w-[1px] bg-muted-brown/15" />

            <div className="space-y-12">
              {milestones.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-8 sm:pl-12 group"
                  >
                    {/* Circle Node on Timeline */}
                    <div className="absolute left-[-13px] sm:left-[-13px] top-1.5 w-6 h-6 rounded-full border border-muted-brown/20 bg-warm-white flex items-center justify-center group-hover:border-subtle-gold transition-colors duration-300">
                      <Icon className="w-3.5 h-3.5 text-muted-brown group-hover:text-subtle-gold transition-colors duration-300" />
                    </div>

                    <div className="space-y-2">
                      <span className="inline-block text-xs font-semibold tracking-wider uppercase text-subtle-gold">
                        {item.year}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-charcoal group-hover:text-muted-brown transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs text-charcoal/50 font-medium font-sans">
                        {item.institution}
                      </p>
                      <p className="text-sm text-charcoal/60 leading-relaxed font-sans pt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
