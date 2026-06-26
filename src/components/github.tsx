"use client";

import { motion } from "framer-motion";
import { GitPullRequest, GitFork, Star } from "lucide-react";
import { GithubIcon as Github } from "@/components/brand-icons";

export default function GitHubSection() {
  // Generate simulated 12 weeks of contribution values (7 days each)
  const weeks = 18;
  const daysPerWeek = 7;
  const contribGrid = Array.from({ length: weeks }, () =>
    Array.from({ length: daysPerWeek }, () => {
      const rand = Math.random();
      if (rand < 0.4) return 0; // Empty
      if (rand < 0.7) return 1; // Light beige
      if (rand < 0.9) return 2; // Medium brown
      return 3; // Highlight gold
    })
  );

  const getIntensityColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-soft-cream/35 border-muted-brown/5";
      case 1:
        return "bg-[#6D5F54]/20 border-muted-brown/10";
      case 2:
        return "bg-[#6D5F54]/50 border-muted-brown/15";
      case 3:
        return "bg-subtle-gold border-subtle-gold/20";
      default:
        return "bg-soft-cream/35";
    }
  };

  const gitStats = [
    { label: "Public Repositories", value: "7", icon: GitPullRequest },
    { label: "Account Stars Received", value: "8", icon: Star },
    { label: "Commits in 2026", value: "248", icon: GitFork },
  ];

  return (
    <section id="github" className="py-24 bg-soft-cream/20 border-b border-muted-brown/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-subtle-gold font-semibold">
            Activity
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-charcoal">
            Open-source contribution metrics.
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left stats */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-charcoal flex items-center gap-2">
                <Github className="w-6 h-6 text-subtle-gold" /> @Rudra4604
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed font-sans">
                Reviewing commit intervals, active pull requests, and scripting templates on GitHub. 
                Constantly pushing repository cleanups and ML dataset configurations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {gitStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-warm-white border border-muted-brown/10 rounded-xl flex items-center gap-4 shadow-sm"
                  >
                    <div className="p-2.5 rounded-lg bg-soft-cream/60 border border-muted-brown/5 text-subtle-gold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs text-charcoal/50 font-sans block">{stat.label}</span>
                      <strong className="text-lg font-bold text-charcoal block">{stat.value}</strong>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Contribution Grid */}
          <div className="lg:col-span-8 p-8 bg-warm-white border border-muted-brown/10 rounded-2xl shadow-sm flex flex-col justify-between overflow-x-auto min-w-[320px]">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-semibold text-charcoal/50 uppercase tracking-widest font-sans">
                  Contributions Calendar Grid
                </span>
                <a
                  href="https://github.com/Rudra4604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 text-xs font-semibold text-warm-beige bg-charcoal hover:bg-muted-brown rounded-full transition-colors cursor-none inline-flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5" />
                  Visit GitHub Profile
                </a>
              </div>

              {/* Grid block */}
              <div className="flex gap-[3px] select-none justify-start overflow-x-auto pb-4">
                {contribGrid.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px] flex-shrink-0">
                    {week.map((level, dIdx) => (
                      <motion.div
                        key={dIdx}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (wIdx * 7 + dIdx) * 0.005, duration: 0.3 }}
                        whileHover={{ scale: 1.25 }}
                        className={`w-[12px] h-[12px] rounded-sm border ${getIntensityColor(level)} transition-colors duration-200`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Legend */}
            <div className="flex items-center justify-between text-[10px] text-charcoal/50 font-sans border-t border-muted-brown/5 pt-6 mt-4">
              <span>Simulated commit pattern for 2026</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-[10px] h-[10px] rounded-sm border border-muted-brown/5 bg-soft-cream/35" />
                <div className="w-[10px] h-[10px] rounded-sm border border-muted-brown/10 bg-[#6D5F54]/20" />
                <div className="w-[10px] h-[10px] rounded-sm border border-muted-brown/15 bg-[#6D5F54]/50" />
                <div className="w-[10px] h-[10px] rounded-sm border border-subtle-gold/20 bg-subtle-gold" />
                <span>More</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
