import React from "react";
import skillsData from "../data/skills.json";
import "../styles.css";

const Skills = () => (
  <section className="features-section fade-in" id="skills">
    <div className="features-container">
      {skillsData.map((skill, index) => (
        <div key={index} className="feature-card">
          <h3 className="feature-title">{skill.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
