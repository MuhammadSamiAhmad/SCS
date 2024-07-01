import React from "react";
import ValuesImg from "../assets/images/About_SCS_8.jpg.png";

const valuesData = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of integrity in all our actions.",
    delay: 150,
  },
  {
    title: "Innovation",
    description:
      "We strive to innovate and find new ways to solve our clients' challenges.",
    delay: 150,
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnership.",
    delay: 150,
  },
  {
    title: "Customer Focus",
    description: "Our clients' success is our top priority.",
    delay: 150,
  },
];

const Values = () => {
  return (
    <div className="contain" style={{ maxWidth: "80%", margin: "auto" }}>
      <section id="values" className="values pt-5">
        <div className="mx-auto" data-aos="fade-up">
          <div className="flex flex-wrap flex-row-reverse items-center justify-between">
            <img
              src={ValuesImg}
              className="w-full lg:w-5/12 rounded-lg shadow-2xl"
              alt="Values Img"
            />
            <div
              className="w-full lg:w-1/2 flex flex-col justify-center"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              {valuesData.map((feature, index) => (
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

export default Values;
