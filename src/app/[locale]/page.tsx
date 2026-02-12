"use client";

import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero is pinned with z-1, rest slides over it */}
      <div id="hero">
        <HeroSection />
      </div>

      <div id="about" className="relative" style={{ zIndex: 2, background: 'var(--bg-primary)' }}>
        <AboutSection />
      </div>

      <div id="skills" className="relative" style={{ zIndex: 2, background: 'var(--bg-primary)' }}>
        <SkillsSection />
      </div>

      <div id="experience" className="relative" style={{ zIndex: 2, background: 'var(--bg-primary)' }}>
        <ExperienceSection />
      </div>

      <div id="projects" className="relative" style={{ zIndex: 2, background: 'var(--bg-primary)' }}>
        <ProjectsSection />
      </div>

      <div id="contact" className="relative" style={{ zIndex: 2, background: 'var(--bg-primary)' }}>
        <ContactSection />
      </div>
    </main>
  );
}
