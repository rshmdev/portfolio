import React from "react";
import "./styles.css";

const Modal = ({ project, closeModal }) => {
  const { name, image, description, live, repo } = project;

  return (
    <div className={`modal-overlay`}>
      <div className={`modal-content`}>
        <div className="modal-header">
          <h2>{name}</h2>
          <button className="btn-close" onClick={closeModal}>
            Fechar
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-image">
            <img src={image} alt="projectImage" />
          </div>
          <div className="modal-description">
            <p>{description}</p>
          </div>
          <div className="modal-links">
            <a target="_blank" rel="noreferrer" href={live}>
              Live view
            </a>
            <a target="_blank" rel="noreferrer" href={repo}>
              Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
