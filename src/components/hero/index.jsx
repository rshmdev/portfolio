import React from "react";
import Lottie from "react-lottie-player";
import * as animationData from "../../assets/animation.json";
import "./styles.css";
import { useTranslation } from "react-i18next";

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
              href={t("resume")}
              download="Resume"
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
            style={{ width: "100%", height: "100%" }}
            play
            loop
            animationData={animationData}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
