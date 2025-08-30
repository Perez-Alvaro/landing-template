import React from "react";
import defaultData from "../data/tools.json";

const Tools = ({ data = defaultData }) => (
  <section id="herramientas" className="scroll-mt-20 py-12">
    <h2 className="text-2xl font-bold mb-6 text-center">Herramientas</h2> {/* UX: section title */}
    <div className="grid grid-cols-12 gap-6">
      {data.map((tool, idx) => (
        <div
          key={idx}
          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 min-h-[220px] p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-start gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7FB00]" /* UX: simetría */
          tabIndex={0}
        >
          <span role="img" aria-label={tool.title} className="text-3xl">
            {tool.icon}
          </span>
          <h3 className="font-semibold">{tool.title}</h3>
          <p className="text-sm text-gray-500">{tool.tag}</p>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
            {tool.level}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Tools;
