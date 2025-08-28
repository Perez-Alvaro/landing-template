import React from "react";
import defaultData from "../data/about.json";
import "../styles.css";

const About = ({ data = defaultData }) => {
  return (
    <section className="about-section relative" id="about">
      <div className="absolute inset-0 bg-white/80" /> {/* mejora contraste del texto */}
      <div className="about-container relative z-10">
        {/* Columna izquierda: texto */}
        <div className="about-content">
          <span className="about-tag">{data.tag}</span>
          <h2 className="about-title">{data.title}</h2>
          <p className="about-description">{data.description}</p>
          <a href={data.buttonLink} className="btn about-button"> {/* botones unificados */}
            {data.buttonText}
          </a>
        </div>

        {/* Columna derecha: imagen */}
        <div className="about-image">
          <img src="/assets/about-illustration.png" alt="About Illustration" className="w-64 h-64 rounded-full object-cover" /> {/* recorta la foto */}
        </div>
      </div>
    </section>
  );
};

export default About;
