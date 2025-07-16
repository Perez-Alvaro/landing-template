import React from "react";
import stackData from "../data/stack.json";
import "../styles.css";

const Stack = () => (
  <section className="stack-section fade-in" id="stack">
    <div className="stack-container">
      {stackData.map((item, index) => (
        <div key={index} className="stack-item">
          <div className="stack-icon">{item.icon}</div>
          <div className="stack-name">{item.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Stack;
