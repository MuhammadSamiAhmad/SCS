import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Vision from "./components/Vision";
import Values from "./components/Values";
import Services from "./components/Services";
import Cta from "./components/Cta";
import WhyUs from "./components/WhyUs";
// import Impact from "./components/Impact";
import Team from "./components/Team";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // You can adjust the animation duration
    });
  }, []);
  return (
    <div className="w-full">
      <div style={{ width: "60%" }}></div>
      <Header />
      <HeroBanner />
      <About />
      <Vision />
      <Values />
      <Services />
      <Cta />
      <WhyUs />
      {/* <Impact /> */}
      <Team />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
