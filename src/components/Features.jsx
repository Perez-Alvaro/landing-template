import React from "react";
import defaultData from "../data/features.json";

const Features = ({ data = defaultData }) => {
  return (
    <section className="features-section">
      <div className="features-container">
        {data.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
