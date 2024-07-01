import React from "react";
import "aos/dist/aos.css";
import HeroBg from "../assets/hero-bg.jpg";

export default function HeroBanner() {
  return (
    <div
      id="home"
      className="w-full bg-cover bg-center min-h-screen relative bg-fixed"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div
        className="HeroContainer absolute inset-0 flex flex-col items-center justify-center z-10"
        data-aos="fade-up"
        style={{ paddingTop: "74px", textAlign: "center" }}
      >
        <div>
          <h1 className="text-white  lg:text-7xl font-bold mt-15 lg:mt-30 font-poppins">
            Sahara Cloud Solutions
          </h1>
          <h2 className="text-white text-xl lg:text-5xl mt-4 lg:mt-2">
            Empowering Non-Profits and Businesses with Salesforce Solutions
          </h2>
        </div>
      </div>
    </div>
  );
}
