import "./App.css";
import React, { useState } from "react";
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
      <Header />
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
        <ContactMe />
      </Slide>
      <Footer />

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
