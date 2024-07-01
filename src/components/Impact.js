import React from "react";
import ImpactImg from "../assets/about.jpg";

const featuresData = [
  {
    title: "Est labore ad",
    description:
      "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
    delay: 150,
  },
  {
    title: "Harum esse qui",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    delay: 150,
  },
  {
    title: "Aut occaecati",
    description:
      "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
    delay: 150,
  },
  {
    title: "Beatae veritatis",
    description:
      "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
    delay: 150,
  },
];

export default function Impact() {
  return (
    <div className="contain" style={{ maxWidth: "80%", margin: "auto" }}>
      <section id="features" className="features pt-5">
        <div className="mx-auto" data-aos="fade-up">
          <div className="flex flex-wrap flex-row-reverse items-center justify-between">
            <img
              src={ImpactImg}
              className="w-full lg:w-5/12 rounded-lg shadow-2xl"
              alt="Impact Img"
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
