import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="experience-section">
      <div className="text-tittle">
        <h1>{t("experienceTitle")}</h1>
      </div>

      <div className="experience-container">
        <div className="timeline">
          <div className="line"></div>
        </div>
        <div className="experience-card">
          <div className="company-info">
            <h1>{t("experienceDate")}</h1>
            <h2>{t("experienceInfo")}</h2>
          </div>

          <div className="activities">
            <div>
              <p>{t("experienceP")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
