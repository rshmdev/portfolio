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
          <div className="infos">
            <p>Front-end Engineer T2</p>
            <p>Jan/2023 - Present</p>
          </div>
        </div>
        <div className="activities">
          <h3>Responsibilities</h3>
          <div>
            <p>
              I make dailys, discoverys, planning, I work on four different
              projects on a daily basis, among them, api using node, ecommerce
              using next.js and redux, admin using react with craco and fuse,
              and student area using react, I also access the database made with
              mongodb daily for queries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
