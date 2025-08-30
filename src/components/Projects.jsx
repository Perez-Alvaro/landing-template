import React, { useState } from "react";
import defaultData from "../data/projects.json";
import ProjectModal from "./ProjectModal";
import "../styles.css";

const Projects = ({ data = defaultData }) => {
  const [selected, setSelected] = useState(null);

  const handleOpen = (project) => setSelected(project);
  const handleClose = () => setSelected(null);

  const handleImgError = (e) => {
    e.target.style.display = "none";
    e.target.parentNode.classList.add("image-placeholder");
  };

  return (
    <section className="projects-section fade-in" id="projects">
      <div className="projects-container">
        {data.map((project, index) => {
          const hasLinks = project.links && (project.links.deploy || project.links.repo || project.links.drive);
          return (
            <div key={index} className="project-card">
              <img
                src={project.coverImage.url}
                alt={project.coverImage.alt}
                className="project-image"
                loading="lazy"
                onError={handleImgError}
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.summary}</p>
              <button
                className="btn-project project-link"
                onClick={() => handleOpen(project)}
                disabled={!hasLinks}
                title={!hasLinks ? "Próximamente" : undefined}
              >
                Ver proyecto
              </button>
            </div>
          );
        })}
      </div>
      {selected && <ProjectModal project={selected} onClose={handleClose} />}
    </section>
  );
};

export default Projects;

