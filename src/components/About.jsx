import React from "react";
import aboutData from "../data/about.json";
import "../styles.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Columna izquierda: texto */}
        <div className="about-content">
          <span className="about-tag">{aboutData.tag}</span>
          <h2 className="about-title">{aboutData.title}</h2>
          <p className="about-description">{aboutData.description}</p>

          <a href={aboutData.button.link} className="btn">
            {aboutData.button.text}

          </a>
        </div>

        {/* Columna derecha: imagen */}
        <div className="about-image">
          <img src="/assets/about-illustration.png" alt="About Illustration" />
        </div>
      </div>
    </section>
  );
};

export default About;
