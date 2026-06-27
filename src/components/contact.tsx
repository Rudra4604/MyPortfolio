"use client";

import { useState } from "react";
import { Mail, MapPin, Copy, Check } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/brand-icons";
import { useMagnetic } from "@/hooks/use-magnetic";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailButtonRef = useMagnetic<HTMLAnchorElement>(0.25);

  const emailAddress = "rudracprajapati@gmail.com";
  const mailtoUrl = `mailto:${emailAddress}?subject=Portfolio%20Inquiry`;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      label: "Email",
      value: emailAddress,
      href: `mailto:${emailAddress}`,
      icon: Mail,
      isEmail: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/rudra-prajapati-874277254",
      href: "https://www.linkedin.com/in/rudra-prajapati-874277254",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/Rudra4604",
      href: "https://github.com/Rudra4604",
      icon: Github,
    },
    {
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      href: "https://maps.google.com/?q=Ahmedabad",
      icon: MapPin,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-warm-beige relative">
      <div className="max-w-3xl mx-auto px-6">
        {/* Centered Premium Contact Card */}
        <div className="p-8 sm:p-12 bg-warm-white border border-muted-brown/15 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 space-y-8 sm:space-y-10 text-center flex flex-col items-center">
          
          {/* Header Info */}
          <div className="space-y-3 sm:space-y-4 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-subtle-gold font-semibold">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-charcoal">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-sans pt-1">
              I&apos;m currently open to internships, freelance opportunities, and collaborations. 
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              const isExternal = info.icon !== Mail && info.icon !== MapPin;
              
              return (
                <div
                  key={idx}
                  className="p-4 bg-soft-cream/30 border border-muted-brown/10 rounded-2xl flex items-center justify-between gap-4 hover:border-subtle-gold hover:bg-warm-white transition-all duration-300 group"
                >
                  <a
                    href={info.href}
                    target={isExternal || info.icon === MapPin ? "_blank" : undefined}
                    rel={isExternal || info.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3.5 cursor-none flex-1 min-w-0"
                  >
                    <div className="p-2.5 rounded-xl bg-soft-cream border border-muted-brown/5 text-subtle-gold flex-shrink-0 group-hover:bg-subtle-gold/10 transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="text-[10px] text-charcoal/40 font-sans block uppercase tracking-wider">
                        {info.label}
                      </span>
                      <strong className="text-xs sm:text-sm font-semibold text-charcoal hover:text-muted-brown transition-colors block truncate">
                        {info.value}
                      </strong>
                    </div>
                  </a>

                  {/* Copy Button for Email */}
                  {info.isEmail && (
                    <button
                      onClick={handleCopyEmail}
                      title="Copy Email"
                      className="p-2 text-charcoal/40 hover:text-subtle-gold rounded-lg transition-colors cursor-none hover:bg-soft-cream/50 z-10"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Primary CTA Button */}
          <div className="pt-4 w-full sm:w-auto">
            <a
              ref={emailButtonRef}
              href={mailtoUrl}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-warm-beige bg-charcoal hover:bg-muted-brown rounded-full transition-all duration-300 shadow-md cursor-none select-none w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
