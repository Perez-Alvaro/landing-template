import React from "react";
import defaultData from "../data/about.json";
import "../styles.css";

const About = ({ data = defaultData }) => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Columna izquierda: texto */}
        <div className="about-content">
          <span className="about-tag">{data.tag}</span>
          <h2 className="about-title">{data.title}</h2>
          <p className="about-description">{data.description}</p>
          <a href={data.buttonLink} className="about-button">
            {data.buttonText}
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
