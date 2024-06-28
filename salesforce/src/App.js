import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
// import About from "./components/About";
// import Services from "./components/Services";
// import Cta from "./components/Cta";
// import Team from "./components/Team";
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
    <div>
      <Header />
      <HeroBanner />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Cta />
      <Team />
      <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
