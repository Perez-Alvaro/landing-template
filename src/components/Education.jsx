import React from "react";
import defaultData from "../data/education.json";

const Education = ({ data = defaultData }) => (
  <section id="education" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 space-y-6"> {/* centra y alinea seccion */}
      {data.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-50 rounded-lg p-4 shadow">
          <div className="text-blue-600 font-semibold">{item.year}</div>
          <div className="md:flex-1 md:mx-4 font-medium text-gray-900">{item.title}</div> {/* mejora contraste del texto */}
          <p className="text-gray-700">{item.institution}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
