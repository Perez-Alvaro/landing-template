import React from "react";
import heroData from "../data/hero.json";
import "../styles.css";
import heroImage from "/assets/Grey_Minimalist_Business_Linkedin_Banner_1.jpeg"; // asegúrate que la imagen esté allí

const Hero = () => {
  return (
    <section className="hero-split">
      <div
        className="hero-bg-image"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero-card">
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
