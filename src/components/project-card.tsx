"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  websiteUrl?: string;
  projectUrl?: string;
  onViewProject?: () => void;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  features = [],
  technologies = [],
  githubUrl,
  websiteUrl,
  onViewProject,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 bg-warm-white border border-muted-brown/15 rounded-3xl shadow-sm hover:shadow-md hover:border-muted-brown/25 transition-all duration-300 overflow-hidden"
    >
      {/* Left Column: Project Information */}
      <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-between space-y-6 sm:space-y-8">
        <div className="space-y-4 sm:space-y-6">
          {/* Project Title */}
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-charcoal leading-tight group-hover:text-muted-brown transition-colors">
            {title}
          </h3>

          {/* Short Description */}
          <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-sans line-clamp-3">
            {description}
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-muted-brown/10 w-full">
            {features.slice(0, 4).map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs sm:text-sm text-charcoal/75 font-sans font-medium"
              >
                <div className="p-0.5 rounded-full bg-subtle-gold/15 text-subtle-gold flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs rounded-md bg-soft-cream/45 border border-muted-brown/5 text-charcoal/80 font-sans font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 w-full">
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-charcoal text-warm-beige border border-charcoal hover:bg-muted-brown hover:border-muted-brown transition-all duration-300 shadow-sm cursor-none"
            >
              <span>🌐</span> Visit Website
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl border border-muted-brown/20 bg-warm-white text-charcoal hover:bg-soft-cream/35 hover:border-muted-brown/30 transition-all duration-300 shadow-xs cursor-none"
            >
              <span>📂</span> GitHub
            </a>
          )}
          {onViewProject && (
            <button
              onClick={onViewProject}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-soft-cream/40 border border-muted-brown/10 text-charcoal hover:bg-soft-cream/80 transition-all duration-300 cursor-none"
            >
              <span>📖</span> Project Details
            </button>
          )}
        </div>
      </div>

      {/* Right Column: Premium Showcase with Browser Mockup */}
      <div className="lg:col-span-5 order-1 lg:order-2 p-4 lg:p-6 rounded-2xl bg-soft-cream/35 border border-muted-brown/10 flex items-center justify-center shadow-xs group-hover:border-muted-brown/20 transition-all duration-300 w-full">
        {image ? (
          /* Minimal Browser Frame */
          <div className="relative w-full aspect-[16/10] rounded-xl border border-charcoal/10 bg-warm-white shadow-lg overflow-hidden flex flex-col will-change-transform group-hover:shadow-xl transition-all duration-500">
            {/* Browser Header Bar */}
            <div className="h-6 bg-soft-cream/70 border-b border-charcoal/5 px-3 flex items-center gap-1.5 flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-charcoal/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-charcoal/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-charcoal/20" />
              <div className="mx-auto w-32 h-3 rounded bg-charcoal/5" />
            </div>
            {/* Viewport content */}
            <div className="relative flex-1 w-full bg-soft-cream/25 p-3 sm:p-4 overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain object-center opacity-95 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-charcoal/30 py-8 aspect-[16/10] w-full bg-soft-cream/15 rounded-xl border border-dashed border-muted-brown/10">
            <span className="text-[10px] uppercase tracking-widest font-semibold font-sans">Screenshot Placeholder</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
