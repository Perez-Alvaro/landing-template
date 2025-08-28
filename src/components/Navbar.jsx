import React from "react";
import defaultData from "../data/navbar.json";

const buttonClass = "inline-block px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"; // unifica estilo de botones

const Navbar = ({ data = defaultData }) => {
  const handleClick = (e, url) => {
    if (url.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(url);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50"> {/* mejora contraste y fija el navbar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex space-x-4">
          {data.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-gray-800 hover:text-blue-600 transition-colors"
              onClick={(e) => handleClick(e, link.url)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="mailto:perezalvarozul24@gmail.com" className={buttonClass}>
          Escribime
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
