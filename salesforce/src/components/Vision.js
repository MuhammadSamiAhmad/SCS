import React from "react";
import AboutImg from "../assets/about.jpg";

const featuresData = [
  {
    icon: "bx bx-receipt",
    title: "Mission",
    description:
      "Our mission is to empower non-profit organizations and businesses by providing innovative Salesforce solutions that enhance their operational capabilities and enable them to achieve their goals.",
    delay: 150,
  },
  {
    icon: "bx bx-cube-alt",
    title: "Vision",
    description:
      "Our vision is to be the leading provider of Salesforce consulting services in the region, known for our commitment to excellence, innovation, and social impact.",
    delay: 150,
  },
];

const Features = () => {
  return (
    <div className="contain" style={{ maxWidth: "80%", margin: "auto" }}>
      <section id="features" className="features pt-5">
        <div className="container mx-auto px-4" data-aos="fade-up">
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
};

export default Features;
