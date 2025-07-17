import React from "react";
import finalData from "../data/finalSection.json";
import "../styles.css";

const FinalSection = () => {
  return (

    <section className="section final-section fade-in">

      <div className="final-container">
        <h2 className="final-title">{finalData.title}</h2>
        <p className="final-description">{finalData.description}</p>
        <a href={finalData.buttonLink} className="btn final-button">
          {finalData.buttonText}
        </a>
      </div>
    </section>
  );
};

export default FinalSection;
