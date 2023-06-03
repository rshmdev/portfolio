import React from "react";
import Lottie from "react-lottie";
import { CardStacks } from "../cardStacks";
import * as SwipeData from "../../assets/swipe.json";
import stacks from "../../utils/stacks.json";
import "./styles.css";

const TechnologiesSection = () => {
  const SwipeOptions = {
    loop: true,
    autoplay: true,
    animationData: SwipeData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="stacks" id="Techs">
      <div className="text-tittle">
        <h1>TECHNOLOGIES</h1>
      </div>
      <div className="swipe-techs">
        <Lottie width={80} height={80} options={SwipeOptions} />
      </div>
      <div className="stacks-div">
        {stacks.map((stack, index) => (
          <CardStacks key={index} image={stack.image} name={stack.name} />
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
