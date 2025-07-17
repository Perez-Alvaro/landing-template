import React from "react";
import footerData from "../data/footer.json";

const icons = {
  LinkedIn: "/assets/linkedin.svg",
  GitHub: "/assets/github.svg",
  Email: "/assets/mail.svg",
};

const Footer = () => {
  return (
    <footer className="footer-section fade-in">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-company">{footerData.companyName}</h3>
          <p className="footer-description">{footerData.description}</p>
        </div>
        <div className="footer-links">
          {footerData.links.map((link, index) => (
            <a key={index} href={link.url} className="footer-link">
              <img src={icons[link.label]} alt={link.label + " icon"} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>{footerData.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
