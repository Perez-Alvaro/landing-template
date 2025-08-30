import React from "react";
import expDefault from "../data/experience.json";
import eduDefault from "../data/education.json";

const ExperienceEducation = ({ experience = expDefault, education = eduDefault }) => (
  <section className="py-12">
    <div className="grid md:grid-cols-2 gap-10">
      <div id="experiencia" className="relative pl-8 scroll-mt-20">
        <h2 className="text-xl font-bold mb-6 text-center md:text-left">Experiencia</h2> {/* UX: section title */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-[#D7FB00]" aria-hidden="true" /> {/* UX: timeline highlight */}
        {experience.items.map((item, idx) => (
          <div key={idx} className="relative mb-8 pl-8 flex flex-col gap-1">
            <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#D7FB00] ring-2 ring-white" aria-hidden="true" /> {/* UX: timeline highlight */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#D7FB00] text-black">{item.year}</span>
              {item.icon && (
                <span role="img" aria-label={item.title} className="text-lg">{item.icon}</span>
              )}
              <h3 className="font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{item.org}</p>
            {item.desc && <p className="text-sm">{item.desc}</p>}
          </div>
        ))}
      </div>
      <div id="educacion" className="relative pl-8 scroll-mt-20">
        <h2 className="text-xl font-bold mb-6 text-center md:text-left">Educación</h2> {/* UX: section title */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-[#D7FB00]" aria-hidden="true" /> {/* UX: timeline highlight */}
        {education.items.map((item, idx) => (
          <div key={idx} className="relative mb-8 pl-8 flex flex-col gap-1">
            <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#D7FB00] ring-2 ring-white" aria-hidden="true" /> {/* UX: timeline highlight */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#D7FB00] text-black">{item.year}</span>
              {item.icon && (
                <span role="img" aria-label={item.title} className="text-lg">{item.icon}</span>
              )}
              <h3 className="font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{item.org}</p>
            {item.desc && <p className="text-sm">{item.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceEducation;
