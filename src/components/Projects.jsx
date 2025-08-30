import React from "react";
import { Link } from "react-router-dom";
import defaultData from "../data/projects.json";
import "../styles.css";

// template: listado de proyectos en la home
const Projects = ({ data = defaultData }) => (
  <section className="projects-section fade-in" id="projects">
    <div className="projects-container">
      {data.map((project, index) => (
        <div
          key={index}
          className="project-card hover:shadow-lg hover:outline hover:outline-[#D7FB00]/50"
        >
          <img
            src={project.thumbnail || project.images[0]}
            alt={project.title}
            className="project-image object-cover"
          />
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.summary}</p>
          <Link
            to={`/projects/${project.slug}`}
            className="btn project-link"
          >
            Ver proyecto
          </Link>{/* fix: ruta a plantilla */}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
