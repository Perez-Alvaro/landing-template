import React from "react";
import skillsData from "../data/skills.json";
import "../styles.css";

const Skills = () => (

    <section className="section features-section fade-in" id="skills">
        <div className="features-container">

            {skillsData.map((skill, index) => (
                <div key={index} className="stack-item">
                    <div className="stack-icon">{skill.icon}</div>
                    <div className="stack-name">{skill.title}</div>
                    <div className="stack-category">{skill.category}</div>
                    <div className={`stack-level level-${skill.level.toLowerCase()}`}>
                        {skill.level}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;
