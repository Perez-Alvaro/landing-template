import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectTemplate from "../templates/ProjectTemplate";

// template: página de detalle de proyecto
const ProjectDetail = () => {
  const { slug } = useParams();
  const project = data.projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-8 text-center">Proyecto no encontrado</div>;
  }

  return (
    <div>
      <Navbar data={data.navbar} />
      <ProjectTemplate project={project} />
      <Footer data={data.footer} />
    </div>
  );
};

export default ProjectDetail;
