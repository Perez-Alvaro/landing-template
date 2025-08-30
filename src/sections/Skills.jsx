import React from "react";
import defaultData from "../data/skills.json";

const Skills = ({ data = defaultData }) => (
  <section id="habilidades" className="scroll-mt-20 py-12">
    <h2 className="text-2xl font-bold mb-6 text-center">Habilidades</h2> {/* UX: section title */}
    <div className="grid grid-cols-12 gap-6">
      {data.map((skill, idx) => (
        <div
          key={idx}
          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 min-h-[220px] p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-start gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7FB00]" /* UX: simetría */
          tabIndex={0}
        >
          <span role="img" aria-label={skill.title} className="text-3xl">
            {skill.icon}
          </span>
          <h3 className="font-semibold">{skill.title}</h3>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
            {skill.level}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
