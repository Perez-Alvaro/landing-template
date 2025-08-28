import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Steps from "../components/Steps";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import FinalSection from "../components/FinalSection";
import Career from "../components/Career"; // nueva estructura en columnas

export default function LandingGeneral({ data }) {
  return (
    <div>
      <Navbar data={data} />
      <Hero data={data} />
      <About data={data} />
      <Skills data={data} />
      <Steps data={data} />
      <Testimonials data={data} />
      <Career experience={data.experience} education={data.education} />
      <FinalSection data={data} />
      <Footer data={data} />
    </div>
  );
}