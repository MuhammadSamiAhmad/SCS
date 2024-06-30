import React from "react";
import AboutImg from "../assets/images/About_SCS_8.jpg.png";

const featuresData = [
  {
    icon: "bx bx-receipt",
    title: "Integrity",
    description:
      "We uphold the highest standards of integrity in all our actions.",
    delay: 150,
  },
  {
    icon: "bx bx-cube-alt",
    title: "Innovation",
    description:
      "We strive to innovate and find new ways to solve our clients' challenges.",
    delay: 150,
  },
  {
    icon: "bx bx-images",
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnership.",
    delay: 150,
  },
  {
    icon: "bx bx-shield",
    title: "Customer Focus",
    description: "Our clients' success is our top priority.",
    delay: 150,
  },
];

const Features = () => {
  return (
    <div className="contain" style={{ maxWidth: "80%", margin: "auto" }}>
      <section id="features" className="features pt-5">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="flex flex-wrap flex-row-reverse">
            <div
              className="image w-full lg:w-1/2 bg-cover bg-center min-h-[400px] rounded-lg"
              style={{ backgroundImage: `url(${AboutImg})` }}
              data-aos="fade-right"
            ></div>
            <div
              className="w-full lg:w-1/2 flex flex-col justify-center"
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
                  <h4
                    className="text-xl mt-1 ml-16"
                    style={{ fontFamily: "Righteous" }}
                  >
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
