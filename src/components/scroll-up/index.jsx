import React, { useState, useEffect } from "react";
import arrow from "../../assets/up-arrow.svg";
import "./styles.css";

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollPosition = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollPosition} className="top-button">
          <img
            loading="lazy"
            width={18}
            height={18}
            src={arrow}
            alt="Arrow up"
          />
        </button>
      )}
    </>
  );
};

export default ScrollUp;
