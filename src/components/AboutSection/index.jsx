import React from "react";
import myPhoto from "../../assets/myPhoto.webp";
import "./styles.css";

const AboutSection = () => {
  return (
    <section id="About" className="About-me">
      <div className="text-tittle">
        <h1>ABOUT ME</h1>
      </div>
      <div className="text-about">
        <p>
          My passion for technology started at a young age, and as time went by
          I became more and more interested in the area and its possibilities. I
          had my first experience in Brazilian Air Force that made my mind
          change and follow my dream of being a Front-end Developer and seek an
          opportunity within the programming area.
        </p>
        <img src={myPhoto} alt="myPicture" />
      </div>
    </section>
  );
};

export default AboutSection;
