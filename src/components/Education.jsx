import React from "react";
import educationData from "../data/education.json";
import "../styles.css";

const Education = () => (
    <section className="section experience-section fade-in" id="education">
        <div className="experience-container">
            {educationData.map((item, index) => (
                <div key={index} className="experience-item">
                    <div className="experience-year">{item.year}</div>
                    <div className="experience-role">{item.title}</div>
                    <p className="experience-description">{item.institution}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Education;