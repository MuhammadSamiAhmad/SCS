import React from "react";
import "aos/dist/aos.css";
import AboutValues from "../assets/features.jpg";
import Einstien from "../assets/EINSTEIN_Coat_Point2HeadRight_SFS20_sRGB.png";
export default function Impact() {
  return (
    <div className="AboutContainer">
      <div className="einstien" data-aos="fade-up">
        <div className="WhyUs">
          <h1>Why Us</h1>
        </div>
        <img src={Einstien} alt="Einstien" />
      </div>
      <div className="values" data-aos="fade-left">
        <img src={AboutValues} alt="Values" />
        <div className="values-content">
          <h1>Why Choose Sahara Cloud Solutions?</h1>
          <p>
            <strong>Expertise:</strong> Extensive experience in Salesforce
            solutions.
          </p>
          <br />
          <p>
            <strong>Customized Solutions:</strong> Tailored services to meet
            your specific needs.
          </p>
          <br />
          <p>
            <strong>Commitment to Non-Profits:</strong>A strong focus on
            supporting non-profit organizations.
          </p>
          <br />
          <p>
            <strong>Proven Track Record:</strong> Numerous satisfied clients and
            successful projects
          </p>
        </div>
      </div>
      <div className="OurImpact" data-aos="fade-up">
        <h1>Our Impact</h1>
        <p>
          We are proud to have helped numerous non-profits and businesses
          optimize their operations and achieve their missions. Here are some of
          our success stories.
        </p>
      </div>
    </div>
  );
}
