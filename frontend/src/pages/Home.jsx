import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Statistics from "../components/home/Statistics";
import HowItWorks from "../components/home/HowItWorks";
import WhyChoose from "../components/home/WhyChoose";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import CTA from "../components/home/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Statistics />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

export default Home;