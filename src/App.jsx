import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Slide } from "react-awesome-reveal";
import HeroSection from "./components/heroSection";
import AboutSection from "./components/AboutSection";
import TechnologiesSection from "./components/TechnologiesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMe from "./components/ContactMe";
import { useState } from "react";
import Modal from "./components/modalProjects";

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
