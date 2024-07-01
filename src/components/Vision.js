import React from "react";
import VisionImg from "../assets/images/About_SCS_9.png.jpg";

const visionData = [
  {
    title: "Mission",
    description:
      "Our mission is to empower non-profit organizations and businesses by providing innovative Salesforce solutions that enhance their operational capabilities and enable them to achieve their goals.",
    delay: 150,
  },
  {
    title: "Vision",
    description:
      "Our vision is to be the leading provider of Salesforce consulting services in the region, known for our commitment to excellence, innovation, and social impact.",
    delay: 150,
  },
];

const Vision = () => {
  return (
    <div className="contain" style={{ maxWidth: "80%", margin: "auto" }}>
      <section id="vision" className="vision pt-5">
        <div className="mx-auto" data-aos="fade-up">
          <div className="flex flex-wrap flex-row items-center justify-between">
            <img
              src={VisionImg}
              className="w-full lg:w-5/12 rounded-lg shadow-2xl"
              alt="Mission Img"
            />
            <div
              className="w-full lg:w-1/2 flex flex-col justify-center"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              {visionData.map((feature, index) => (
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
};

export default Vision;
