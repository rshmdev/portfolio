import React, { useState } from "react";
import CardStacks from "../cardStacks";
import stacks from "../../utils/stacks.json";
import "./styles.css";

const TechnologiesSection = () => {
  const [currentDescription, setCurrentDescription] = useState(
    "Hover the mouse over the card to see the description*."
  );
  const [currentTitle, setCurrentTitle] = useState("Tech name");
  const [currentImage, setCurrentImage] = useState(null);

  const handleCardHover = (description, title, image) => {
    setCurrentDescription(description);
    setCurrentTitle(title);
    setCurrentImage(image);
  };

  const handleCardLeave = () => {
    setCurrentDescription(
      "Hover the mouse over the card to see the description*."
    );
    setCurrentTitle("Tech name");
    setCurrentImage(null);
  };

  return (
    <section className="stacks" id="Techs">
      <div className="text-tittle">
        <h1>TECHNOLOGIES</h1>
      </div>
      <div className={`container-techs`}>
        <div className="container-texts">
          <h1 className="title ">{currentTitle}</h1>
          <div className="description">
            <p>{currentDescription}</p>
            {currentImage && (
              <img
                loading="lazy"
                src={currentImage}
                alt="Technologie front end"
                width={200}
              />
            )}
          </div>
        </div>

        <div className="stacks-div">
          {stacks.map((stack, index) => (
            <CardStacks
              key={index}
              image={stack.image}
              name={stack.name}
              description={stack.description}
              handleHover={handleCardHover}
              handleLeave={handleCardLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
