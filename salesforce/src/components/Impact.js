import React from "react";

import AboutImg from "../assets/about.jpg";

const featuresData = [
  {
    icon: "bx bx-receipt",
    title: "Est labore ad",
    description:
      "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
    delay: 150,
  },
  {
    icon: "bx bx-cube-alt",
    title: "Harum esse qui",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    delay: 150,
  },
  {
    icon: "bx bx-images",
    title: "Aut occaecati",
    description:
      "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
    delay: 150,
  },
  {
    icon: "bx bx-shield",
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
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="flex flex-wrap flex-row-reverse">
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
