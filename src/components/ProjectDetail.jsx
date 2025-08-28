import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data";
import Navbar from "./Navbar";
import "../styles.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = data.projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-8 text-center">Proyecto no encontrado</div>;
  }

  return (
    <div>
      <Navbar data={data.navbar} />
      <section className="project-detail-section fade-in">
        <div className="project-detail-container">
          <img src={project.image} alt={project.title} className="project-detail-image" />
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-description">{project.description}</p>
          <Link to="/" className="btn project-detail-button">Volver</Link> {/* botón unificado */}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
