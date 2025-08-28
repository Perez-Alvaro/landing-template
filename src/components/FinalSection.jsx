import React from "react";
import defaultData from "../data/finalSection.json";
import "../styles.css";

const FinalSection = ({ data = defaultData }) => {
  return (

    <section className="final-section fade-in relative" id="contact">
      <div className="absolute inset-0 bg-white/80" /> {/* mejora contraste del texto */}
      <div className="final-container relative z-10">
        <h2 className="final-title">{data.title}</h2>
        <p className="final-description">{data.description}</p>
        <a href={data.buttonLink} className="btn final-button">
          {data.buttonText}
        </a>
      </div>
    </section>
  );
};

export default FinalSection;
