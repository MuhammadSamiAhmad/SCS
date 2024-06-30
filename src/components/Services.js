import React from "react";
import {
  FaHandsHelping,
  FaBusinessTime,
  FaUsers,
  FaChartLine,
  FaHeadset,
  FaChartPie,
  FaSync,
  FaCog,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaHandsHelping className="mt-2 text-3xl text-white" />,
      title: "Non-Profit Consultation",
      description:
        "Tailored Salesforce solutions to help non-profits manage donor relationships, fundraising efforts, and program management more effectively. Benefits: Streamlined operations, enhanced donor engagement, improved impact tracking.",
      delay: 100,
    },
    {
      icon: <FaBusinessTime className="mt-2 text-3xl text-white" />,
      title: "Consultation B2B",
      description:
        "Customized Salesforce strategies for B2B companies to enhance sales processes, customer service, and business operations. Benefits: Increased sales efficiency, better customer insights, streamlined processes.",
      delay: 200,
    },
    {
      icon: <FaUsers className="mt-2 text-3xl text-white" />,
      title: "Experience Cloud",
      description:
        "Create branded communities and portals to enhance customer engagement and collaboration. Benefits: Improved customer satisfaction, enhanced collaboration, increased engagement.",
      delay: 300,
    },
    {
      icon: <FaChartLine className="mt-2 text-3xl text-white" />,
      title: "Sales Cloud",
      description:
        "Optimize your sales processes with Salesforce Sales Cloud, from lead management to sales forecasting. Benefits: Improved lead conversion, better sales insights, increased revenue.",
      delay: 100,
    },
    {
      icon: <FaHeadset className="mt-2 text-3xl text-white" />,
      title: "Service Cloud",
      description:
        "Elevate your customer service with Salesforce Service Cloud, providing faster and more efficient support. Benefits: Enhanced customer satisfaction, quicker issue resolution, improved service efficiency.",
      delay: 200,
    },
    {
      icon: <FaChartPie className="mt-2 text-3xl text-white" />,
      title: "Pardot",
      description:
        "Automate your marketing efforts with Pardot, Salesforce's marketing automation tool, to drive engagement and growth. Benefits: Improved marketing ROI, streamlined campaign management, better lead nurturing.",
      delay: 300,
    },
    {
      icon: <FaSync className="mt-2 text-3xl text-white" />,
      title: "Declarative Integrations",
      description:
        "Integrate Salesforce with other systems seamlessly using declarative tools, ensuring data consistency and process efficiency. Benefits: Improved data accuracy, enhanced process efficiency, reduced manual work.",
      delay: 100,
    },
    {
      icon: <FaCog className="mt-2 text-3xl text-white" />,
      title: "Declarative Automations (Flows)",
      description:
        "Automate your business processes with Salesforce Flows, creating efficient and error-free workflows. Benefits: Increased productivity, reduced errors, streamlined operations.",
      delay: 200,
    },
  ];

  return (
    <div className="contain" style={{ maxWidth: "80%", margin: "auto" }}>
      <section id="services" className="py-16 overflow-hidden">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="section-title mb-5" data-aos="fade-right">
            <div className="flex flex-row items-center">
              <h2 className="text-xs font-semibold tracking-wider uppercase text-gray-600">
                Services
              </h2>
              <div className="h-0.5 color bg-blue-500 w-20 ml-3 mt-1"></div>
            </div>
            <h4
              className="text-4xl font-bold uppercase text-gray-800"
              style={{ fontFamily: "Righteous" }}
            >
              CHECK OUR SERVICES
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 1255px:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex justify-center"
                data-aos="zoom-in"
                data-aos-delay={service.delay}
              >
                <div className="icon-box rounded-lg text-center border border-gray-200 p-8 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                  <div className="icon mx-auto mb-4 w-16 h-16 bg-blue-500 rounded flex items-center justify-center transition-all duration-300">
                    <div className="icon mx-auto mb-4 w-16 h-16 bg-blue-500 rounded flex items-center justify-center transition-all duration-300 ">
                      {service.icon}
                    </div>
                  </div>
                  <h4 className="text-xl  mb-2">
                    <h1
                      href="#home"
                      className="text-gray-900 transition-all duration-300"
                      style={{ fontFamily: "Righteous" }}
                    >
                      {service.title}
                    </h1>
                  </h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
