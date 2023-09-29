import React from "react";

import "./styles.css";

const CardStacks = ({ image, name }) => {
  return (
    <div className="card">
      <div className="container">
        <img loading="lazy" src={image} alt={name + "Logo"} />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default CardStacks;
