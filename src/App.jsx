// CSS IMPORTS
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

//REACT HOOKS
import React, { useEffect, useState } from "react";

//COMPONENTS WITHOUT LAZY
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import Modal from "./components/projects-modal";
import { Slide } from "react-awesome-reveal";
import ScrollUp from "./components/scroll-up";

//COMPONENTS WITH LAZY
const HeroSection = React.lazy(() => import("./components/hero"));
const AboutSection = React.lazy(() => import("./components/about"));
const TechnologiesSection = React.lazy(() =>
  import("./components/technologies")
);
const ProjectsSection = React.lazy(() => import("./components/projects"));
const ContactMe = React.lazy(() => import("./components/contact"));
const ExperienceSection = React.lazy(() => import("./components/experience"));

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

  function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
      // iPad on iOS 13 detection
      || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

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
      <div className={iOS() ? "background-ios" : "background"}>
        <div className="background-opacity"></div>
      </div>
      <main className="main">
        <HeroSection />


        <Slide triggerOnce={true}>
          <AboutSection />
        </Slide>

        <Slide triggerOnce={true}>
          <TechnologiesSection />
        </Slide>

        <Slide triggerOnce={true}>
          <ExperienceSection />
        </Slide>
        <Slide triggerOnce={true}>
          <ProjectsSection openModal={openModal} />
        </Slide>
        <Slide triggerOnce={true}>
          <ContactMe isDark={isDark} />
        </Slide>
      </main>

      <Footer isDark={isDark} />

      {modalOpen && (
        <Modal
          project={selectedProject}
          closeModal={closeModal}
          modalOpen={modalOpen}
        />
      )}

      <ScrollUp />
    </div>
  );
}

export default App;
