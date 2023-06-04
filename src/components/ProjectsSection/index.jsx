import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import CardProjects from "../cardProjects";
import projects from "../../utils/projectsData";
import "swiper/swiper.min.css";
import "./styles.css";

// Carregue o módulo Swiper Navigation
SwiperCore.use([Navigation, Autoplay]);

const ProjectsSection = ({ openModal }) => {
  return (
    <>
      <section className="Projects" id="Projects">
        <div className="text-projects">
          <h1>PROJECTS</h1>
        </div>
        <div className="div-grid-projects">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.name}>
                <CardProjects
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  live={project.live}
                  repo={project.repository}
                  openModal={() => openModal(project)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
