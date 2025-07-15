import React from 'react';
import Hero from './components/Hero';
import About from "./components/About";
import './styles.css';
import Features from "./components/Features";
import Steps from "./components/Steps";
import FAQ from "./components/FAQ";


function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Features />
      <Steps />
      <FAQ />
    </div>
  );
}

export default App;
