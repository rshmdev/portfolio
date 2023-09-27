import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animation.json";
import "./styles.css";
import { useTranslation } from "react-i18next";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-text">
        <div>
          <h1>{t("heroTitle")}</h1>
          <p>{t("heroP")}</p>
          <div className="hero-buttons">
            <a
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1oNdwPq4VzF3CgXRXROq-D-ADhjs8UY5J/view?usp=sharing"
              download="Resume Rian Moraes"
            >
              <button className="cv-button">{t("heroResume")}</button>
            </a>
            <a href="#Contact-me">
              <button className="contact-button">{t("heroContact")}</button>
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
