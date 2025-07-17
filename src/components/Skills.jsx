import React from "react";
import defaultData from "../data/skills.json";
import "../styles.css";

const Skills = ({ data = defaultData }) => (
    <section className="stack-section fade-in" id="skills">
        <div className="stack-container">
            {data.map((skill, index) => (
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
