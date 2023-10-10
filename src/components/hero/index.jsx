import React from "react";

import "./styles.css";
import { useTranslation } from "react-i18next";
import { AiOutlineDown } from "react-icons/ai";

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
      </div>
      <a href="#About" className="down">    <AiOutlineDown size={30} /></a>

    </section>
  );
};

export default HeroSection;
