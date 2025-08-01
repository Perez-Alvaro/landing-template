import React from "react";
import defaultData from "../data/projects.json";
import "../styles.css";

const Projects = ({ data = defaultData }) => (
  <section className="projects-section fade-in" id="projects">
    <div className="projects-container">
      {data.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <a href={project.url} className="project-link">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
