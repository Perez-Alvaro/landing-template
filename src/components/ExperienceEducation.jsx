import React from "react";
import expData from "../data/experience.json";
import eduData from "../data/education.json";

// fix: sección en dos columnas con timeline vertical
const ExperienceEducation = ({ experience = expData, education = eduData }) => (
  <section className="w-full max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Experiencia */}
    <div id="experiencia" className="scroll-mt-24">
      <h2 className="text-2xl font-bold mb-6">Experiencia</h2>
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[#D7FB00]" />
        <div className="space-y-6">
          {experience.map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-[6px] top-5 w-3 h-3 rounded-full bg-[#D7FB00]" />
              <div className="relative bg-white/5 backdrop-blur rounded-xl p-6 shadow min-h-[120px]">
                <span className="absolute top-4 right-4 bg-[#D7FB00] text-black text-xs font-bold px-2 py-0.5 rounded">
                  {item.year}
                </span>
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-sm mt-1 text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Educación */}
    <div id="educacion" className="scroll-mt-24">
      <h2 className="text-2xl font-bold mb-6">Educación</h2>
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[#D7FB00]" />
        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-[6px] top-5 w-3 h-3 rounded-full bg-[#D7FB00]" />
              <div className="relative bg-white/5 backdrop-blur rounded-xl p-6 shadow min-h-[120px]">
                <span className="absolute top-4 right-4 bg-[#D7FB00] text-black text-xs font-bold px-2 py-0.5 rounded">
                  {item.year}
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm mt-1 text-gray-700">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceEducation;
