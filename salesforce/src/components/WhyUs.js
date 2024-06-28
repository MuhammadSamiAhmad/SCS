import React from "react";

import AboutImg from "../assets/about.jpg";
import Einstein from "../assets/EINSTEIN_Coat_Point2HeadRight_SFS20_sRGB.png";

const featuresData = [
  {
    icon: "bx bx-receipt",
    title: "Expertise",
    description: "Extensive experience in Salesforce solutions.",
    delay: 150,
  },
  {
    icon: "bx bx-cube-alt",
    title: "Customized Solutions",
    description: "Tailored services to meet your specific needs.",
    delay: 150,
  },
  {
    icon: "bx bx-images",
    title: "Commitment to Non-Profits",
    description: "A strong focus on supporting non-profit organizations.",
    delay: 150,
  },
  {
    icon: "bx bx-shield",
    title: "Proven Track Record",
    description: "Numerous satisfied clients and successful projects",
    delay: 150,
  },
];

export default function WhyUs() {
  return (
    <div className="contain" style={{ maxWidth: "80%", margin: "auto" }}>
      <section id="features" className="features pt-5">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="flex flex-row items-center mb-10 justify-center">
            <img
              src={Einstein}
              style={{ height: "250px", width: "250px" }}
              alt=""
            />
            <h1 className="text-4xl font-bold mt-1 ml-16">Why Us</h1>
          </div>
          <div className="flex flex-wrap">
            <div
              className="image w-full lg:w-1/2 bg-cover bg-center min-h-[400px]"
              style={{ backgroundImage: `url(${AboutImg})` }}
              data-aos="fade-right"
            ></div>
            <div
              className="w-full lg:w-1/2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              {featuresData.map((feature, index) => (
                <div
                  key={index}
                  className="icon-box mt-5"
                  data-aos="zoom-in"
                  data-aos-delay={feature.delay}
                >
                  <i
                    className={`${feature.icon} text-yellow-500 text-6xl float-left`}
                  ></i>
                  <h4 className="text-xl font-bold mt-1 ml-16">
                    {feature.title}
                  </h4>
                  <p className="text-base text-gray-500 ml-16">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
