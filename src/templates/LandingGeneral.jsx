import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Steps from "../components/Steps";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function LandingGeneral({ data }) {
  return (
    <div>
      <Hero data={data} />
      <About data={data} />
      <Features data={data} />
      <Steps data={data} />
      <FAQ data={data} />
      <Footer data={data} />
    </div>
  );
}