import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animation.json";
import "./styles.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <div>
          <h1>Hey, I'm Rian</h1>
          <p>Front end developer focused on React</p>
          <div className="hero-buttons">
            <a
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1hFqkKBPQU65HmDMExd5_94RTrBpc9BOw/view?usp=share_link"
              download="Cv Rian moraes"
            >
              <button className="cv-button">Download CV</button>
            </a>
            <a href="#Contact-me">
              <button className="contact-button">Contact me</button>
            </a>
          </div>
        </div>

        <div className="Lottie">
          <Lottie
            width={"100%"}
            height={"100%"}
            options={defaultOptions}
            isClickToPauseDisabled={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
