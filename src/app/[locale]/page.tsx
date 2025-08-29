"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

// Registrar plugins do GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="relative overflow-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen relative bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-purple-950/85"
      >
        <HeroSection />
      </section>

      <section
        id="projects"
        className="min-h-screen bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-indigo-950/85 border-t border-white/5"
      >
        <ProjectsSection />
      </section>

      <section
        id="skills"
        className=" min-h-screen relative bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-indigo-950/85 border-t border-white/5"
      >
        <SkillsSection />
      </section>

      <section
        id="experience"
        className=" min-h-screen relative bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-indigo-950/85 border-t border-white/5"
      >
        <ExperienceSection />
      </section>

      <section
        className=" min-h-screen relative bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-purple-950/85 border-t border-white/5 overflow-hidden"
        id="about"
      >
        <AboutSection />
      </section>

      <section
        id="contact"
        className=" min-h-screen relative bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-purple-950/85 border-t border-white/5"
      >
        <ContactSection />
      </section>

      {/* Elementos de fundo para parallax */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="parallax-element absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="parallax-element absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="parallax-element absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
    </main>
  );
}
