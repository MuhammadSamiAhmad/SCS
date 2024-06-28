import React from "react";

const About = () => {
  return (
    <div className="contain" style={{ maxWidth: "80%", margin: "auto" }}>
      <section id="about" className="py-16 overflow-hidden">
        <div className="container mx-auto" data-aos="fade-up">
          <div className="flex flex-wrap">
            <div
              className="w-full pt-4 lg:pt-0 order-2 lg:order-1 content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="flex flex-row items-center">
                <h2 className="text-xs font-semibold tracking-wider uppercase text-gray-600">
                  About Us
                </h2>
                <div className="h-0.5 color bg-blue-500 w-20 ml-3 mt-1"></div>
              </div>
              <h4 className="text-4xl font-bold uppercase text-gray-900">
                WHAT SETS US APART
              </h4>
              <p className="italic text-gray-600">
                At Sahara Cloud Solutions, we specialize in transforming the way
                non-profits and businesses leverage technology. Based in Egypt,
                our team of Salesforce experts is dedicated to delivering
                tailored solutions that drive efficiency, growth, and impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
