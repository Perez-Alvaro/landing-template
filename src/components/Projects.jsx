import React from "react";
import defaultData from "../data/projects.json";

const buttonClass = "inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"; // unifica estilo de botones

const Projects = ({ data = defaultData }) => (
  <section id="projects" className="py-16 bg-gradient-to-r from-sky-100 to-sky-200"> {/* mejora contraste del texto */}
    <div className="max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> {/* alinea cards */}
      {data.map((project, index) => (
        <div key={index} className="flex flex-col bg-white rounded-xl shadow overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-6 flex flex-col flex-1 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-700 flex-1 mb-4">{project.description}</p>
            <a href={project.url} className={`${buttonClass} mt-auto mx-auto`}>
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
