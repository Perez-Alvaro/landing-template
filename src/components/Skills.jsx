import React from "react";
import defaultData from "../data/skills.json";
import "../styles.css";

const titleStyle = {
  textAlign: "center",
  marginBottom: "24px",
  color: "var(--color-text)",
};

const subtitleStyle = {
  margin: "32px 0 16px",
  textAlign: "center",
  color: "var(--color-text)",
};

const Skills = ({ data = defaultData }) => {
  const habilidades = data.filter((item) => item.type === "habilidad");
  const herramientas = data.filter((item) => item.type === "herramienta");

  const renderItems = (items) => (
    <div className="stack-container">
      {items.map((skill, index) => (
        <div key={index} className="stack-item">
          <div className="stack-icon">{skill.icon}</div>
          <div className="stack-name">{skill.title}</div>
          <div className="stack-category">{skill.category}</div>
          <div className={`stack-level level-${skill.level.toLowerCase()}`}>{skill.level}</div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="stack-section fade-in" id="skills">
      <h2 style={titleStyle}>Competencias principales</h2>
      <h3 style={subtitleStyle}>Habilidades</h3>
      {renderItems(habilidades)}
      <h3 style={subtitleStyle}>Herramientas</h3>
      {renderItems(herramientas)}
    </section>
  );
};

export default Skills;
