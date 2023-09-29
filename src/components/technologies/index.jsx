import React from "react";
import CardStacks from "../stack-cards";
import stacks from "../../utils/stacks.json";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import "./styles.css";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation, Autoplay]);

const TechnologiesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="stacks" id="Techs">
      <div className="text-tittle">
        <h1>{t("skillsTitle")}</h1>
      </div>
      <div className="stacks-div">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          autoplay
          navigation
          breakpoints={{
            560: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {stacks.map((stack, index) => (
            <SwiperSlide key={stack.name}>
              <CardStacks
                key={index}
                image={stack.image}
                name={stack.name}
                description={stack.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TechnologiesSection;
