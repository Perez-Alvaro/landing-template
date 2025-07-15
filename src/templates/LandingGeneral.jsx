import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Steps from "../components/Steps";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import FinalSection from "../components/FinalSection";

export default function LandingGeneral({ data }) {
  return (
    <div>
      <Navbar data={data} />
      <Hero data={data} />
      <About data={data} />
      <Features data={data} />
      <Steps data={data} />
      <Testimonials data={data} />
      <FAQ data={data} />
      <FinalSection data={data} />
      <Footer data={data} />
    </div>
  );
}