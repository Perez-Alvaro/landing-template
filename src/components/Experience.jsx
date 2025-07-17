import React from "react";
import defaultData from "../data/experience.json";
import "../styles.css";

const Experience = ({ data = defaultData }) => (
  <section className="experience-section fade-in" id="experience">
    <div className="experience-container">
      {data.map((item, index) => (
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
