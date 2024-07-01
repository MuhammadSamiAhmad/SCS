import React from "react";

import AboutImg from "../assets/images/About_SCS_1.jpg";

const featuresData = [
  {
    title: "Expertise",
    description: "Extensive experience in Salesforce solutions.",
    delay: 150,
  },
  {
    title: "Customized Solutions",
    description: "Tailored services to meet your specific needs.",
    delay: 150,
  },
  {
    title: "Commitment to Non-Profits",
    description: "A strong focus on supporting non-profit organizations.",
    delay: 150,
  },
  {
    title: "Proven Track Record",
    description: "Numerous satisfied clients and successful projects",
    delay: 150,
  },
];

export default function WhyUs() {
  return (
    <div className="contain" style={{ maxWidth: "80%", margin: "auto" }}>
      <section id="whyUs" className="whyUs pt-5">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="section-title mb-7" data-aos="fade-right">
            <div className="flex flex-row items-center mt-3">
              <h2 className="text-xs font-semibold tracking-wider uppercase text-gray-600">
                Why Us
              </h2>
              <div className="h-0.5 color bg-blue-500 w-20 ml-3 mt-1"></div>
            </div>
            <h4
              className="text-4xl font-bold uppercase text-gray-800"
              style={{ fontFamily: "Righteous" }}
            >
              REASONS TO CHOOSE US
            </h4>
          </div>
          <div className="flex flex-wrap flex-row items-center justify-between">
            <img
              src={AboutImg}
              className="w-full lg:w-5/12 rounded-lg shadow-2xl"
              alt="WhyUs Img"
            />
            <div
              className="w-full lg:w-1/2 flex flex-col justify-center"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              {featuresData.map((feature, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={feature.delay}
                >
                  <h4
                    className="text-xl mt-5"
                    style={{ fontFamily: "Righteous" }}
                  >
                    {feature.title}
                  </h4>
                  <p className="text-base text-gray-500">
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
