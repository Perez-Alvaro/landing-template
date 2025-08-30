import React, { useState } from "react";

// template: detalle de proyecto reutilizable
const ProjectTemplate = ({ project }) => {
  const [selected, setSelected] = useState(null);

  if (!project) return null;

  return (
    <div className="project-template">
      {/* Hero */}
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="max-w-2xl mx-auto mb-4 text-gray-700">{project.summary}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {project.stack && project.stack.map((tech) => (
            <span
              key={tech}
              className="bg-[#D7FB00] text-black text-xs font-bold px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.images && project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} ${idx + 1}`}
              className="w-full h-48 object-cover rounded-2xl cursor-pointer"
              onClick={() => setSelected(img)}
            />
          ))}
        </div>
        {selected && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" 
            onClick={() => setSelected(null)}
          >
            <img src={selected} alt="preview" className="max-h-full max-w-full rounded" />
          </div>
        )}
      </section>

      {/* Secciones descriptivas */}
      <section className="max-w-3xl mx-auto px-4 py-8 space-y-8 text-left">
        <div>
          <h2 className="text-xl font-bold mb-2">Objetivo</h2>
          <p>{project.objective}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Rol y responsabilidades</h2>
          <p>{project.role}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Tecnologías</h2>
          <p>{project.technologies}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Desafíos y soluciones</h2>
          <p>{project.challenges}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Resultados</h2>
          <p>{project.results}</p>
        </div>
        {project.moreUrl && (
          <a
            href={project.moreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-block"
          >
            Más información
          </a>
        )}
      </section>
    </div>
  );
};

export default ProjectTemplate;
