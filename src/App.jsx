import React from 'react';
import Hero from './components/Hero';
import About from "./components/About";
import './styles.css';
import Features from "./components/Features";
import Steps from "./components/Steps";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import FinalSection from "./components/FinalSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Steps />
      <Testimonials />
      <FAQ />
      <FinalSection />
      <Footer />
    </div>
  );
}

export default App;
