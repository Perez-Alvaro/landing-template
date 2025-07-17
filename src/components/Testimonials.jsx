import React from "react";
import defaultData from "../data/testimonials.json";
import "../styles.css";

const Testimonials = ({ data = defaultData }) => {
  return (
    <section className="testimonials-section fade-in">
      <div className="testimonials-container">
        {data.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={item.avatar}
              alt={item.name}
              className="testimonial-avatar"
            />
            <p className="testimonial-text">“{item.text}”</p>
            <p className="testimonial-name">— {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
