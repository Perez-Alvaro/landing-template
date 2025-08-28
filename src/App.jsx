import React from 'react';
import Hero from './components/Hero';
import About from "./components/About";
import './styles.css';
import Skills from "./components/Skills";
import Steps from "./components/Steps";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import FinalSection from "./components/FinalSection";
import Projects from "./components/Projects";
import Career from "./components/Career"; // nueva estructura en columnas para educación y experiencia
import AnimatedSection from "./components/AnimatedSection";
import data from './data';

function App() {
  return (
    <div className="App">
      <Navbar data={data.navbar} />
      <AnimatedSection>
        <Hero data={data.hero} />
      </AnimatedSection>
      <AnimatedSection>
        <About data={data.about} />
      </AnimatedSection>
      <AnimatedSection>
        <Projects data={data.projects} />
      </AnimatedSection>
      <AnimatedSection>
        <Skills data={data.skills} />
      </AnimatedSection>
      <AnimatedSection>
        <Steps data={data.steps} />
      </AnimatedSection>
      <AnimatedSection>
        <Career experience={data.experience} education={data.education} />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials data={data.testimonials} />
      </AnimatedSection>
      <AnimatedSection>
        <FinalSection data={data.finalSection} />
      </AnimatedSection>
      <AnimatedSection as="footer">
        <Footer data={data.footer} />
      </AnimatedSection>
    </div>
  );
}

export default App;
