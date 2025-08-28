import React from "react";
import defaultData from "../data/finalSection.json";

const buttonClass = "inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"; // unifica estilo de botones

const FinalSection = ({ data = defaultData }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-sky-100 to-indigo-100 text-center" id="contact">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.title}</h2> {/* mejora contraste del texto */}
        <p className="text-gray-700 mb-6">{data.description}</p>
        <a href={data.buttonLink} className={buttonClass}>
          {data.buttonText}
        </a>
      </div>
    </section>
  );
};

export default FinalSection;
