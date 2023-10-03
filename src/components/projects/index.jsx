import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import CardProjects from "../projects-card";
import "swiper/swiper.min.css";
import "./styles.css";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation, Autoplay]);

const ProjectsSection = ({ openModal }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className="Projects" id="Projects">
        <div className="text-projects">
          <h1>{t("projectsTitle")}</h1>
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
            {t("projects", { returnObjects: true }).map((project) => {
              return (
                <SwiperSlide key={project.name}>
                  <CardProjects
                    name={project.name}
                    description={t("project.description")}
                    image={project.image}
                    live={project.live}
                    liveText={t("project.liveText")}
                    repoText={t("project.repo")}
                    repo={project.repository}
                    openModal={() => openModal(project)}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
