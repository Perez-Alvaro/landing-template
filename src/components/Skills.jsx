import React from "react";
import defaultData from "../data/skills.json";
import "../styles.css";

// template: sección de habilidades simétrica basada en categorías
const Skills = ({ data = defaultData }) => (
  <section className="stack-section fade-in" id="skills">
    {Object.entries(data).map(([category, items]) => (
      <div key={category} className="mb-12">
        <h3 className="text-xl font-bold mb-4">{category}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur rounded-2xl p-4 shadow min-h-[90px] flex items-center"
            >
              <span
                className="absolute left-0 top-0 bottom-0 w-1 bg-[#D7FB00] rounded-l-2xl"
                aria-hidden="true"
              />
              <span className="ml-4 text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Skills;
