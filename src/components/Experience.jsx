import React from "react";
import experienceData from "../data/experience.json";
import "../styles.css";

const Experience = () => (
  <section className="experience-section fade-in" id="experience">
    <div className="experience-container">
      {experienceData.map((item, index) => (
        <div key={index} className="experience-item">
          <div className="experience-year">{item.year}</div>
          <div className="experience-role">{item.role}</div>
          <p className="experience-description">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
