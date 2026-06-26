"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/use-magnetic";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const talkRef = useMagnetic<HTMLButtonElement>(0.2);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection observer behavior for active navigation item
      const sections = ["hero", "about", "skills", "projects", "certifications", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Credentials", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "py-3 bg-warm-beige/80 backdrop-blur-md border-b border-muted-brown/10 shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="text-charcoal font-sans text-sm tracking-widest font-semibold hover:opacity-80 transition-opacity uppercase cursor-none"
        >
          RUDRA.DEV
        </button>

        {/* Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "relative py-1 text-charcoal/70 hover:text-charcoal transition-colors cursor-none",
                activeSection === item.id && "text-charcoal font-medium"
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-subtle-gold rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div>
          <button
            ref={talkRef}
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 text-xs font-medium uppercase tracking-wider text-warm-beige bg-charcoal hover:bg-muted-brown rounded-full transition-colors cursor-none shadow-sm"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </header>
  );
}
