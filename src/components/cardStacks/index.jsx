import React from "react";

import "./styles.css";

const CardStacks = ({ image, name, description, handleHover, handleLeave }) => {
  return (
    <div
      className="card"
      onMouseEnter={() => handleHover(description, name, image)}
      onMouseLeave={handleLeave}
    >
      <div className="container">
        <img loading="lazy" src={image} alt="stack" />
      </div>
    </div>
  );
};

export default CardStacks;
