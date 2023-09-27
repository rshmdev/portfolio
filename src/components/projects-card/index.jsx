import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";

const CardProjects = ({ name, image, openModal }) => {
  const { t } = useTranslation();

  return (
    <div className="card-projects">
      <div className="card-image">
        <div className="card-gradient"></div>
        <img loading="lazy" src={image} alt="Project" />
      </div>
      <div className="card-content">
        <h1>{name}</h1>
        <button className="btn-saiba-mais" onClick={openModal}>
          {t("projectsInfo")}
        </button>
      </div>
    </div>
  );
};

export default CardProjects;
