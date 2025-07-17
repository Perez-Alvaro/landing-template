import React from "react";
import defaultData from "../data/hero.json";
import "../styles.css";
import heroImage from "/assets/Grey_Minimalist_Business_Linkedin_Banner_1.jpeg"; // asegúrate que la imagen esté allí

const Hero = ({ data = defaultData }) => {
  return (
    <section className="hero-split">
      <div
        className="hero-bg-image"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero-card">
        <div className="hero-tag">{data.name}</div>
        <h1 className="hero-title">{data.profession}</h1>
        <p className="hero-description">{data.description}</p>
        <a href={data.buttonLink} className="btn hero-button">
          {data.buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
