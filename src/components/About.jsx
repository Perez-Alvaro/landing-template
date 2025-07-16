import React from "react";
import aboutData from "../data/about.json";
import "../styles.css";

const About = () => {
  return (
    <section className="section about-section">
      <div className="about-grid">
        <div className="about-content">
          <span className="badge">{aboutData.badge}</span>
          <h2 className="about-title">{aboutData.title}</h2>
          <p className="about-description">{aboutData.description}</p>
          <a href={aboutData.button.link} className="btn">
            {aboutData.button.text}
          </a>
        </div>

        <div className="about-image-wrapper">
          <img
            src="/about-default.png"
            alt="About illustration"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
