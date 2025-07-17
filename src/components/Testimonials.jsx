import React from "react";
import testimonialsData from "../data/testimonials.json";
import "../styles.css";

const Testimonials = () => {
  return (

    <section className="section testimonials-section fade-in">

      <div className="testimonials-container">
        {testimonialsData.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={item.avatar}
              alt={item.name}
              className="testimonial-avatar"
            />
            <p className="testimonial-text">{item.text}</p>
            <p className="testimonial-name">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
