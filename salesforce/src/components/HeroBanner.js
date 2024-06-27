import React from "react";
import "aos/dist/aos.css";

export default function HeroBanner() {
  return (
    <div id="hero">
      <div className="HeroContainer" data-aos="fade-up">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Sahara Cloud Solutions</h1>
          <h2>
            Empowering Non-Profits and Businesses with Salesforce Solutions
          </h2>
        </div>
      </div>
    </div>
  );
}
