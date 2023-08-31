import "./App.css";
import React, { useEffect, useState } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Slide } from "react-awesome-reveal";
import Modal from "./components/modalProjects";

const HeroSection = React.lazy(() => import("./components/heroSection"));
const AboutSection = React.lazy(() => import("./components/AboutSection"));
const TechnologiesSection = React.lazy(() =>
  import("./components/TechnologiesSection")
);
const ProjectsSection = React.lazy(() =>
  import("./components/ProjectsSection")
);
const ContactMe = React.lazy(() => import("./components/ContactMe"));
const ExperienceSection = React.lazy(() =>
  import("./components/experienceSection")
);

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const h1Elements = document?.querySelectorAll("h1");

    if (isDark) {
      document.body.classList.add("dark");
      h1Elements?.forEach((h1) => {
        h1.classList.add("dark");
      });
    } else {
      document.body.classList.remove("dark");
      h1Elements?.forEach((h1) => {
        h1.classList.remove("dark");
      });
    }
  }, [isDark]);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="App">
      <Header setIsDark={setIsDark} isDark={isDark} />
      <main className="main">
        <HeroSection />
        <Slide>
          <AboutSection />
        </Slide>
        <Slide>
          <TechnologiesSection />
        </Slide>

        <Slide>
          <ExperienceSection />
        </Slide>
        <Slide>
          <ProjectsSection openModal={openModal} />
        </Slide>
      </main>
      <Slide>
        <ContactMe isDark={isDark} />
      </Slide>
      <Footer isDark={isDark} />

      {modalOpen && (
        <Modal
          project={selectedProject}
          closeModal={closeModal}
          modalOpen={modalOpen}
        />
      )}
    </div>
  );
}

export default App;
