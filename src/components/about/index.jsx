import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="About" className="About-me">
      <div className="text-tittle">
        <h1>{t("aboutTitle")}</h1>
      </div>
      <div className="text-about">
        <p>{t("aboutP")}</p>
      </div>
    </section>
  );
};

export default AboutSection;
