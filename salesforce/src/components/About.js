import React from "react";
import "aos/dist/aos.css";
import AboutVision from "../assets/about.jpg";
import AboutValues from "../assets/features.jpg";
export default function About() {
  return (
    <div className="AboutContainer">
      <div className="AboutUs" data-aos="fade-up">
        <h1>About Us</h1>
        <p>
          At Sahara Cloud Solutions, we specialize in transforming the way
          non-profits and businesses leverage technology. Based in Egypt, our
          team of Salesforce experts is dedicated to delivering tailored
          solutions that drive efficiency, growth, and impact.
        </p>
      </div>
      <div className="vision" data-aos="fade-right">
        <div className="vision-content">
          <h1>Our Mission and Vision</h1>
          <p>
            <strong>Mission Statement:</strong> Our mission is to empower
            non-profit organizations and businesses by providing innovative
            Salesforce solutions that enhance their operational capabilities and
            enable them to achieve their goals.
          </p>{" "}
          <br />
          <p>
            <strong>Vision Statement:</strong> Our vision is to be the leading
            provider of Salesforce consulting services in the region, known for
            our commitment to excellence, innovation, and social impact.
          </p>
        </div>
        <img src={AboutVision} alt="Vision" />
      </div>
      <div className="values" data-aos="fade-left">
        <img src={AboutValues} alt="Values" />
        <div className="values-content">
          <h1>Our Core Values</h1>
          <p>
            <strong>Integrity:</strong> We uphold the highest standards of
            integrity in all our actions.
          </p>
          <br />
          <p>
            <strong>Innovation:</strong> We strive to innovate and find new ways
            to solve our clients' challenges.
          </p>
          <br />
          <p>
            <strong>Collaboration:</strong> We believe in the power of teamwork
            and partnership.
          </p>{" "}
          <br />
          <p>
            <strong>Customer Focus:</strong> Our clients' success is our top
            priority.
          </p>
        </div>
      </div>
    </div>
  );
}
