import React from "react";
import navbarData from "../data/navbar.json";
import "../styles.css";

const Navbar = () => {
  return (

    <nav className="navbar fade-in">

      <div className="nav-container">
        <a href={navbarData.logoLink} className="nav-logo">
          {navbarData.logo}
        </a>
        <div className="nav-links">
          {navbarData.links.map((link, index) => (
            <a key={index} href={link.url} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
