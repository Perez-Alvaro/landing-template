import React from "react";
import defaultData from "../data/finalSection.json";
import "../styles.css";

const FinalSection = ({ data = defaultData }) => {
  return (

    <section className="final-section fade-in">

      <div className="final-container">
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
