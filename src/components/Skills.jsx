import React from "react";
import defaultData from "../data/skills.json";

const Skills = ({ data = defaultData }) => (
  <section id="skills" className="py-16 bg-gradient-to-r from-sky-100 to-sky-200">
    <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> {/* centra y alinea seccion */}
      {data.map((skill, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6 text-center flex flex-col">
          <div className="text-3xl mb-2">{skill.icon}</div>
          <div className="font-semibold text-gray-900">{skill.title}</div> {/* mejora contraste del texto */}
          <div className="text-sm text-gray-600">{skill.category}</div>
          <div className="mt-2 text-sm font-medium text-blue-600">{skill.level}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
