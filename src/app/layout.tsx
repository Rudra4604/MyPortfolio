import type { Metadata } from "next";
import { Geist } from "next/font/google";
import CustomCursor from "@/components/custom-cursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rudra Prajapati | Software & AI/ML Engineer",
  description: "Personal portfolio of Rudra Prajapati, a Software Engineer, AI/ML Engineer, and Full Stack Developer based in Ahmedabad, Gujarat, India. Dedicated to crafting elegant security scanning systems and intelligent AI marketplaces.",
  keywords: ["Rudra Prajapati", "Software Engineer", "AI ML Engineer", "Full Stack Developer", "Cybersecurity", "Next.js Portfolio", "Ahmedabad Developer"],
  authors: [{ name: "Rudra Prajapati" }],
  openGraph: {
    title: "Rudra Prajapati | Software & AI/ML Engineer",
    description: "Personal portfolio of Rudra Prajapati. Dedicated to crafting elegant security scanning systems and intelligent AI marketplaces.",
    url: "https://rudraprajapati.dev",
    siteName: "Rudra Prajapati Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Prajapati | Software & AI/ML Engineer",
    description: "Personal portfolio of Rudra Prajapati. Dedicated to crafting elegant security scanning systems and intelligent AI marketplaces.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-warm-beige text-charcoal noise-bg min-h-screen">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
