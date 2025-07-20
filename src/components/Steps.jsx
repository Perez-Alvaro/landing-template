import React from "react";
import defaultData from "../data/steps.json";

const Steps = ({ data = defaultData }) => {
  return (
    <section className="steps-section" id="steps">
      <div className="steps-container">
        {data.map((step, index) => (
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
