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
              During my time at Direção Concursos, I worked as a Junior T2
              Front-End developer with a special focus on Next.js and SEO, and
              occasionally ventured into the Back-End. I worked with
              technologies such as ReactJS and Next.js to create captivating web
              experiences that were optimized for SEO. In the Back-End, I used
              Node.js to improve our API and performed database queries to
              ensure that our applications had fast and secure access to the
              necessary information. Additionally, I created attractive Landing
              Pages in Webflow, adding value to our customer acquisition
              strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
