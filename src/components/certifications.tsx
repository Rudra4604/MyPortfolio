"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ExternalLink, Calendar, Award } from "lucide-react";

export default function Certifications() {
  const [verifiedCard, setVerifiedCard] = useState<number | null>(null);

  const certifications = [
    {
      title: "Software Engineering Job Simulation",
      issuer: "JPMorgan Chase & Co.",
      date: "2024",
      skills: ["Git", "Python", "React", "TypeScript", "Data Analysis", "Financial Systems"],
      description: "Completed simulated engineering tasks involving data feeds visualization, repository patch merges, and components development using perspective charts libraries.",
      credentialUrl: "https://www.theforage.com",
    },
    {
      title: "Technology Job Simulation",
      issuer: "Deloitte",
      date: "2024",
      skills: ["Cybersecurity", "Risk Assessment", "Network Auditing", "Compliance Heuristics", "Threat Defense"],
      description: "Simulated advisory tasks checking system architecture vulnerability, evaluating cloud firewall compliance parameters, and drafting remediation frameworks.",
      credentialUrl: "https://www.theforage.com",
    },
  ];

  const handleVerify = (index: number) => {
    setVerifiedCard(index);
    setTimeout(() => {
      setVerifiedCard(null);
    }, 2000);
  };

  return (
    <section id="certifications" className="py-24 bg-warm-beige">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-subtle-gold font-semibold">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-charcoal">
            Professional certifications & simulations.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-warm-white border border-muted-brown/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between overflow-hidden group"
            >
              {/* Decorative top strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-muted-brown/20 to-subtle-gold/20" />

              <div>
                {/* Header: Title & Seal */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="space-y-1">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-subtle-gold">
                      {cert.issuer}
                    </span>
                    <h3 className="text-lg font-bold text-charcoal leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="text-muted-brown p-2.5 rounded-full bg-soft-cream/40 border border-muted-brown/5 flex items-center justify-center">
                    <Award className="w-6 h-6 text-subtle-gold" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-charcoal/70 leading-relaxed font-sans mb-6">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 text-xs rounded bg-soft-cream/45 border border-muted-brown/5 text-charcoal/80 font-sans"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Metadata and interactive validation */}
              <div className="pt-6 border-t border-muted-brown/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-charcoal/50 font-sans font-medium">
                  <Calendar className="w-4 h-4 text-muted-brown" />
                  Completed {cert.date}
                </div>

                <div className="flex items-center gap-4">
                  {/* Validate Badge Action */}
                  <button
                    onClick={() => handleVerify(index)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-brown hover:text-charcoal cursor-none select-none"
                  >
                    {verifiedCard === index ? (
                      <motion.span
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-1 text-green-600"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        Verified Active
                      </motion.span>
                    ) : (
                      <span className="flex items-center gap-1 text-[#6D5F54]/80 hover:text-charcoal">
                        <CheckCircle2 className="w-4 h-4 text-[#6D5F54]/50" />
                        Verify Credential
                      </span>
                    )}
                  </button>

                  {/* External Link */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal/40 hover:text-charcoal cursor-none"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
