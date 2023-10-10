import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectCoverflow, Pagination } from "swiper";
import CardProjects from "../projects-card";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

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
            modules={[Navigation, Autoplay, EffectCoverflow, Pagination]}
            effect={'coverflow'}
            grabCursor={true}
            spaceBetween={10}
            pagination={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,

              pauseOnMouseEnter: true,
              reverseDirection: true
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
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
