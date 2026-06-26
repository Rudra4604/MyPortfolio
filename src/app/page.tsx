import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import GitHubSection from "@/components/github";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
