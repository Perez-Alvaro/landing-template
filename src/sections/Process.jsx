import React from "react";
import defaultData from "../data/process.json";

const Process = ({ data = defaultData }) => (
  <section id="proceso" className="scroll-mt-20 py-12">
    <h2 className="text-2xl font-bold text-center mb-2">{data.title}</h2> {/* UX: section title */}
    <p className="text-center text-gray-600 mb-8">{data.subtitle}</p>
    <div className="grid grid-cols-12 gap-6">
      {data.steps.map((step) => (
        <div
          key={step.n}
          className="col-span-12 md:col-span-4 min-h-[220px] p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7FB00]" /* UX: simetría */
          tabIndex={0}
        >
          <span className="text-3xl font-bold text-[#D7FB00]">{step.n}</span>
          <h3 className="font-semibold">{step.title}</h3>
          <p className="text-sm text-gray-600 flex-grow">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Process;
