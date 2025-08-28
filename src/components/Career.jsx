import React from "react";
import expData from "../data/experience.json";
import eduData from "../data/education.json";
import "../styles.css";

const Career = ({ experience = expData, education = eduData }) => (
  <section className="career-section fade-in" id="career">
    <div className="career-container">
      <div className="career-column">
        <h2 className="career-title">Experiencia</h2> {/* título de sección */}
        {experience.map((item, index) => (
          <div key={index} className="career-item">
            <div className="career-year">{item.year}</div>
            <div className="career-role">{item.role}</div>
            <p className="career-description">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="career-column">
        <h2 className="career-title">Educación</h2> {/* título de sección */}
        {education.map((item, index) => (
          <div key={index} className="career-item">
            <div className="career-year">{item.year}</div>
            <div className="career-role">{item.title}</div>
            <p className="career-description">{item.institution}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Career;
