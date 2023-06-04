import React from "react";
import "./styles.css";

const CardProjects = ({ name, image, openModal }) => {
  return (
    <div className="card-projects">
      <div className="card-image">
        <div className="card-gradient"></div>
        <img loading="lazy" src={image} alt="Project" />
      </div>
      <div className="card-content">
        <h1>{name}</h1>
        <button className="btn-saiba-mais" onClick={openModal}>
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default CardProjects;
