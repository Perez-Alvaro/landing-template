import React from "react";
import contactData from "../data/contact.json";
import "../styles.css";

const Contact = () => (
  <section className="contact-section fade-in" id="contact">
    <div className="contact-container">
      <p className="contact-item">{contactData.email}</p>
      <p className="contact-item">{contactData.phone}</p>
      <p className="contact-item">{contactData.location}</p>
      <div className="contact-links">
        {contactData.social.map((item, index) => (
          <a key={index} href={item.url} className="contact-link">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
