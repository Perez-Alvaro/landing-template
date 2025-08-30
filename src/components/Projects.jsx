import React, { useState } from "react";
import defaultData from "../data/projects.json";
import ProjectModal from "./ProjectModal";
import "../styles.css";

const Projects = ({ data = defaultData }) => {
  const [selected, setSelected] = useState(null);

  const hasLinks = (links) => links.deploy || links.repo || links.drive;

  return (
    <section className="projects-section fade-in" id="projects">
      <div className="projects-container">
        {data.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.coverImage.url}
              alt={project.coverImage.alt}
              className="project-image"
              loading="lazy"
              onError={(e) => (e.currentTarget.src = "/about-default.png")}
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.summary}</p>

            <button
              className="btn-project"
              onClick={() => setSelected(project)}
              disabled={!hasLinks(project.links)}
              title={!hasLinks(project.links) ? "Próximamente" : undefined}
            >
              Ver proyecto
            </button>
          </div>
        ))}
      </div>
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Projects;
