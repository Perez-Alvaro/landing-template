import React, { useState } from "react";
import faqData from "../data/faq.json";
import "../styles.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section fade-in">
      <div className="faq-container">
        <h2 className="faq-title">Preguntas frecuentes</h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggle(index)}
          >
            <h3 className="faq-question">
              {item.question}
              <span className={`faq-icon ${openIndex === index ? "rotate" : ""}`}>
                ▼
              </span>
            </h3>
            <div
              className="faq-answer-wrapper"
              style={{
                maxHeight: openIndex === index ? "300px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
            >
              <p className="faq-answer">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
