import React from "react";
import defaultData from "../data/hero.json";
import heroImage from "/assets/Grey_Minimalist_Business_Linkedin_Banner_1.jpeg"; // asegúrate que la imagen esté allí

const buttonClass = "inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"; // unifica estilo de botones

const Hero = ({ data = defaultData }) => {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <div
        className="md:flex-1 h-64 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="md:flex-1 flex items-center justify-center p-6 bg-white">
        <div className="max-w-md text-center md:text-left">
          <span className="block text-sm font-semibold uppercase text-blue-600 mb-2">{data.name}</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.profession}</h1> {/* mejora contraste del texto */}
          <p className="text-lg text-gray-700 mb-6">{data.description}</p>
          <a href={data.buttonLink} className={buttonClass}>
            {data.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
