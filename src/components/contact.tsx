"use client";

import { useState } from "react";

import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/brand-icons";
import { useMagnetic } from "@/hooks/use-magnetic";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const sendRef = useMagnetic<HTMLButtonElement>(0.25);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 2500);
  };

  const contactInfo = [
    {
      label: "Email Directly",
      value: "rudracprajapati@gmail.com",
      href: "mailto:rudracprajapati@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn Professional",
      value: "rudra-prajapati-874277254",
      href: "https://www.linkedin.com/in/rudra-prajapati-874277254",
      icon: Linkedin,
    },
    {
      label: "GitHub Profile",
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
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-subtle-gold font-semibold">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-charcoal">
                Let&apos;s discuss internship opportunities.
              </h2>
              <p className="text-sm text-charcoal/70 leading-relaxed font-sans pt-2">
                I am actively seeking Software Engineering or AI/ML internship positions. 
                Fill out the form or reach out directly via email or LinkedIn—I will reply within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.href}
                    target={info.icon === MapPin ? "_blank" : undefined}
                    rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="p-5 bg-warm-white border border-muted-brown/10 rounded-xl flex items-center gap-4 hover:border-subtle-gold transition-colors duration-300 shadow-sm cursor-none"
                  >
                    <div className="p-2.5 rounded-lg bg-soft-cream/60 border border-muted-brown/5 text-subtle-gold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-charcoal/50 font-sans block uppercase tracking-wider">
                        {info.label}
                      </span>
                      <strong className="text-sm font-semibold text-charcoal hover:text-muted-brown transition-colors block">
                        {info.value}
                      </strong>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-warm-white border border-muted-brown/15 rounded-3xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-charcoal/60 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 bg-soft-cream/35 border border-muted-brown/15 rounded-xl text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-subtle-gold focus:ring-1 focus:ring-subtle-gold transition-all duration-300 font-sans cursor-none"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-charcoal/60 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 bg-soft-cream/35 border border-muted-brown/15 rounded-xl text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-subtle-gold focus:ring-1 focus:ring-subtle-gold transition-all duration-300 font-sans cursor-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-charcoal/60 uppercase tracking-wide">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your team or internship role..."
                  className="w-full px-4 py-3 bg-soft-cream/35 border border-muted-brown/15 rounded-xl text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-subtle-gold focus:ring-1 focus:ring-subtle-gold transition-all duration-300 font-sans cursor-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                ref={sendRef}
                type="submit"
                disabled={submitted}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-warm-beige bg-charcoal hover:bg-muted-brown rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-none select-none"
              >
                {submitted ? (
                  <span>Message Sent Successfully</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
