import React from "react";
import defaultData from "../data/navbar.json";
import "../styles.css";

const Navbar = ({ data = defaultData }) => {
  return (
    <nav className="navbar glassy-navbar fade-in">
      <div className="nav-container">
        <div className="nav-links">
          {data.links.map((link, index) => (
            <a key={index} href={link.url} className="nav-pill">
              {link.label}
            </a>
          ))}
        </div>
        <a href="mailto:perezalvarozul24@gmail.com" className="nav-cta">
          Escribime
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
