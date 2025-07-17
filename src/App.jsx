import React from 'react';
import Hero from './components/Hero';
import About from "./components/About";
import './styles.css';
import Skills from "./components/Skills";
import Steps from "./components/Steps";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import FinalSection from "./components/FinalSection";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import data from './data';

function App() {
  return (
    <div className="App">
      <Navbar data={data.navbar} />
      <Hero data={data.hero} />
      <About data={data.about} />
      <Projects data={data.projects} />
      <Skills data={data.skills} />
      <Steps data={data.steps} />
      <Experience data={data.experience} />
      <Education data={data.education} />
      <Testimonials data={data.testimonials} />
      <FAQ data={data.faq} />
      <FinalSection data={data.finalSection} />
      <Footer data={data.footer} />
    </div>
  );
}

export default App;