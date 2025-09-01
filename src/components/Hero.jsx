import React, { useEffect, useState } from "react";
import defaultData from "../data/hero.json";
import "../styles.css";

// Minimal centered hero with night mode toggle
// Inspired by typographic layouts
const Hero = ({ data = defaultData }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <section
      role="banner"
      className="relative flex min-h-screen flex-col items-center justify-center bg-white text-gray-900 transition-colors duration-300 dark:bg-[#111111] dark:text-white"
    >
      {/* Night mode toggle */}
      <button
        onClick={toggleTheme}
        role="switch"
        aria-label={
          theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
        }
        aria-checked={theme === "dark"}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-xl shadow backdrop-blur-sm transition hover:shadow-md focus:outline-none dark:bg-[#222] dark:text-gray-100"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      {/* Centered content */}
      <div className="flex flex-col items-center justify-center space-y-3 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl">
          {data.title}
        </h1>
        <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">
          {data.name}
        </h2>
        <h3 className="text-xl text-gray-500 dark:text-gray-400">
          {data.role}
        </h3>
        {data.buttonText && (
          <a
            href={data.buttonLink}
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-zinc-200 to-zinc-300 px-6 py-2 text-sm font-medium text-gray-900 shadow transition hover:-translate-y-0.5 hover:shadow-lg active:scale-95 dark:from-zinc-700 dark:to-zinc-600 dark:text-gray-100"
          >
            {data.buttonText}
          </a>
        )}
      </div>

      {/* Bottom gradient connector */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-white/0 via-zinc-100/70 to-zinc-200 blur-2xl dark:from-[#11111100] dark:via-[#111111b3] dark:to-[#111111]" />
    </section>
  );
};

export default Hero;
