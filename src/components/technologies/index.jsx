import React from "react";
import CardStacks from "../stack-cards";
import stacks from "../../utils/stacks.json";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import "./styles.css";

SwiperCore.use([Navigation, Autoplay]);

const TechnologiesSection = () => {
  return (
    <section className="stacks" id="Techs">
      <div className="text-tittle">
        <h1>SKILLS</h1>
      </div>
      <div className="stacks-div">
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
