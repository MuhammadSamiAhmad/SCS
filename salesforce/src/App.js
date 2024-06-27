import { useEffect } from "react";
//Components
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

//Animation
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      <section id="hero">
        <HeroBanner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <Impact />
      <section id="team">
        <Team />
      </section>
      <Testimonials />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
