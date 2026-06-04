import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <HeroSection />
      </section>

      {/* Work first — the whole point of the site */}
      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
