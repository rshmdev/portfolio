import React from "react";
import Close from "../../assets/close.svg";
import "./styles.css";

const Modal = ({ project, closeModal }) => {
  const { name, image, description, live, repository, repo, liveText } =
    project;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{name}</h2>
          <button className="btn-close" onClick={closeModal}>
            <img src={Close} alt="Close button" width={30} height={30} />
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-image">
            <img loading="lazy" src={image} alt="projectImage" />
          </div>
          <div className="modal-description">
            <p>{description}</p>
          </div>
        </div>
        <div className="modal-links">
          <a target="_blank" rel="noreferrer" href={live} className="live-link">
            {liveText}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={repository}
            className="repo-link"
          >
            {repo}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
