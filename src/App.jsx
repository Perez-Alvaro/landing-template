import React from 'react';
import Hero from './components/Hero';
import About from "./components/About";
import './styles.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import FinalSection from "./components/FinalSection";
import Projects from "./components/Projects";
import AnimatedSection from "./components/AnimatedSection";
import Skills from "./sections/Skills";
import Tools from "./sections/Tools";
import ExperienceEducation from "./sections/ExperienceEducation";
import Process from "./sections/Process";
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
        <Tools data={data.tools} />
      </AnimatedSection>
      <AnimatedSection>
        <ExperienceEducation experience={data.experience} education={data.education} />
      </AnimatedSection>
      <AnimatedSection>
        <Process data={data.process} />
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
