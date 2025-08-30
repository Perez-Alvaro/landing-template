import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Página de proyectos estilo Bento 2025
const ProjectsPage = () => {
  const projects = data.projects;

  const bentoSpan = (index) => {
    const classes = [
      "col-span-12 md:col-span-6",
      "col-span-12 md:col-span-6",
      "col-span-12 md:col-span-8",
      "col-span-12 md:col-span-4",
      "col-span-12 md:col-span-4",
      "col-span-12 md:col-span-4"
    ];
    return classes[index % classes.length];
  };

  return (
    <div>
      <Navbar data={data.navbar} />
      {/* Header/Hero breve */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Proyectos</h1>
        <p className="max-w-2xl mx-auto text-gray-600">Un vistazo a trabajos recientes y experimentos personales.</p>
      </header>

      {/* Filtros/Tags opcionales */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-2 mb-8"> {/* filtros simples */}
          {["Todos"].map((tag) => (
            <span key={tag} className="bg-[#D7FB00] text-black text-xs font-bold px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>

        {/* Grid estilo Bento */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[200px] md:auto-rows-[260px]">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-xl shadow transition-transform hover:-translate-y-1 hover:shadow-xl ${bentoSpan(idx)}`}
            >
              <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="relative z-10 p-6 flex flex-col h-full bg-white/60 backdrop-blur">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags && project.tags.map((t) => (
                    <span key={t} className="bg-[#D7FB00] text-black text-xs font-bold px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm mb-4 text-gray-700">{project.summary}</p>
                {project.link && (
                  <Link to={project.link} className="btn w-max mt-auto">Ver proyecto</Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <div className="text-center py-12">
        <Link to="/contact" className="btn">Hablemos</Link>
      </div>
      <Footer data={data.footer} />
    </div>
  );
};

export default ProjectsPage;
