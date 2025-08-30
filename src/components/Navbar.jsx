import React from "react";
import { Link } from "react-router-dom";
import defaultData from "../data/navbar.json";
import "../styles.css";

const Navbar = ({ data = defaultData }) => {
  const handleClick = (e, url) => {
    if (url.startsWith('#')) {
      if (window.location.pathname !== '/') {
        e.preventDefault();
        window.location.href = `/${url}`; // fix: navegar a home antes de scroll
      } else {
        e.preventDefault();
        const target = document.querySelector(url);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className="navbar glassy-navbar fade-in">
      <div className="nav-container">
        <div className="nav-links">
          {data.links.map((link, index) => (
            link.url.startsWith('#') ? (
              <a
                key={index}
                href={link.url}
                className="nav-pill"
                onClick={(e) => handleClick(e, link.url)}
              >
                {link.label}
              </a>
            ) : (
              <Link key={index} to={link.url} className="nav-pill">
                {link.label}
              </Link>
            )
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
