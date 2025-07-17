import React from "react";
import heroData from "../data/hero.json";
import "../styles.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-tag">{heroData.name}</div>
        <h1 className="hero-title">{heroData.profession}</h1>
        <p className="hero-description">{heroData.description}</p>
        <a href={heroData.buttonLink} className="btn hero-button">
          {heroData.buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
