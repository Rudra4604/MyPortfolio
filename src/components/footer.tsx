"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-warm-beige border-t border-muted-brown/10 text-center text-xs text-charcoal/40 font-sans tracking-wide">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>&copy; {currentYear} Rudra Prajapati. All rights reserved.</span>
        <div className="flex gap-6">
          <a
            href="https://github.com/Rudra4604"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal transition-colors cursor-none"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rudra-prajapati-874277254"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal transition-colors cursor-none"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
