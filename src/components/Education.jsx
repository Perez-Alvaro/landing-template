import React from "react";
import defaultData from "../data/education.json";
import "../styles.css";

const Education = ({ data = defaultData }) => (
    <section className="experience-section fade-in" id="education">
        <div className="experience-container">
            {data.map((item, index) => (
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