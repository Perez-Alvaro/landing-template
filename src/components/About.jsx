import React from "react";
import defaultData from "../data/about.json";

const buttonClass = "inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"; // unifica estilo de botones

const About = ({ data = defaultData }) => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-green-200 via-yellow-200 to-sky-200"> {/* mejora contraste del texto */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8"> {/* centra y alinea seccion */}
        <div className="flex-1 text-center md:text-left">
          <span className="block uppercase text-sm font-semibold text-gray-800 mb-2">{data.tag}</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.title}</h2>
          <p className="text-gray-800 mb-6">{data.description}</p>
          <a href={data.buttonLink} className={buttonClass}>
            {data.buttonText}
          </a>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img src="/assets/about-illustration.png" alt="About Illustration" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover" /> {/* recorta foto en círculo */}
        </div>
      </div>
    </section>
  );
};

export default About;
