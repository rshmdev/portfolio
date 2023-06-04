import React from "react";
import "./styles.css";

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="text-tittle">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="experience-card">
        <div className="company-info">
          <h2>Direção Concursos</h2>
          <p>Front-end Engineer</p>
          <p>Jan/2023 - Present</p>
        </div>
        <div className="activities">
          <h3>Responsibilities:</h3>
          <ul>
            <li>Resolving daily bugs</li>
            <li>Creating new features</li>
            <li>Participating in discovery meetings</li>
            <li>and more...</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
