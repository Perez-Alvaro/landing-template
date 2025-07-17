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
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Steps />
      <Experience />
      <Education />
      <Testimonials />
      <FAQ />
      <FinalSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;