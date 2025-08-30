import React from "react";
import expData from "../data/experience.json";
import eduData from "../data/education.json";

// Sección combinada de experiencia y educación con acentos verde flúor
// grid bento
const ExperienceEducation = ({ experience = expData, education = eduData }) => (
  <section className="w-full max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8" id="career">
    <section id="experiencia" className="space-y-6 scroll-mt-24">
      <h2 className="text-2xl font-bold mb-4">Experiencia</h2>
      {experience.map((item, index) => (
        <div
          key={index}
          className="relative bg-white/5 backdrop-blur rounded-xl p-6 shadow transition hover:shadow-lg hover:ring-2 hover:ring-[#D7FB00]"
        >
          {/* ticks laterales */}
          <span
            className="absolute -left-4 top-6 w-3 h-3 rounded-full bg-[#D7FB00]"
            aria-hidden="true"
          />
          <span
            className="absolute -left-[2px] top-6 bottom-6 w-1 bg-[#D7FB00]"
            aria-hidden="true"
          />
          {/* micro-badge de año */}
          <span className="absolute top-4 right-4 bg-[#D7FB00] text-black text-xs font-bold px-2 py-0.5 rounded">
            {item.year}
          </span>
          <h3 className="text-lg font-semibold">{item.role}</h3>
          <p className="text-sm mt-1 text-gray-700">{item.description}</p>
        </div>
      ))}
    </section>
    <section id="educacion" className="space-y-6 scroll-mt-24">
      <h2 className="text-2xl font-bold mb-4">Educación</h2>
      {education.map((item, index) => (
        <div
          key={index}
          className="relative bg-white/5 backdrop-blur rounded-xl p-6 shadow transition hover:shadow-lg hover:ring-2 hover:ring-[#D7FB00]"
        >
          <span
            className="absolute -left-4 top-6 w-3 h-3 rounded-full bg-[#D7FB00]"
            aria-hidden="true"
          />
          <span
            className="absolute -left-[2px] top-6 bottom-6 w-1 bg-[#D7FB00]"
            aria-hidden="true"
          />
          <span className="absolute top-4 right-4 bg-[#D7FB00] text-black text-xs font-bold px-2 py-0.5 rounded">
            {item.year}
          </span>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm mt-1 text-gray-700">{item.institution}</p>
        </div>
      ))}
    </section>
  </section>
);

export default ExperienceEducation;

