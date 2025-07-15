import React from "react";
import stepsData from "../data/steps.json";

const Steps = () => {
  return (
    <section className="steps-section">
      <div className="steps-container">
        {stepsData.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-number">{step.step}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
