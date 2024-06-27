import React from "react";
import ServiceCard from "./ServiceCard";
import "aos/dist/aos.css";

export default function Services() {
  const services = [
    {
      title: "Non-Profit Consultation",
      description:
        "Tailored Salesforce solutions to help non-profits manage donor relationships, fundraising efforts, and program management more effectively.",
      benefits: [
        "Streamlined operations",
        "Enhanced donor engagement",
        "Improved impact tracking",
      ],
    },
    {
      title: "Consultation B2B",
      description:
        "Customized Salesforce strategies for B2B companies to enhance sales processes, customer service, and business operations.",
      benefits: [
        "Increased sales efficiency",
        "Better customer insights",
        "Streamlined processes",
      ],
    },
    {
      title: "Experience Cloud",
      description:
        "Create branded communities and portals to enhance customer engagement and collaboration.",
      benefits: [
        "Improved customer satisfaction",
        "Enhanced collaboration",
        "Increased engagement",
      ],
    },
    {
      title: "Sales Cloud",
      description:
        "Optimize your sales processes with Salesforce Sales Cloud, from lead management to sales forecasting.",
      benefits: [
        "Improved lead conversion",
        "Better sales insights",
        "Increased revenue",
      ],
    },
    {
      title: "Service Cloud",
      description:
        "Elevate your customer service with Salesforce Service Cloud, providing faster and more efficient support.",
      benefits: [
        "Enhanced customer satisfaction",
        "Quicker issue resolution",
        "Improved service efficiency",
      ],
    },
    {
      title: "Pardot",
      description:
        "Automate your marketing efforts with Pardot, Salesforce's marketing automation tool, to drive engagement and growth.",
      benefits: [
        "Improved marketing ROI",
        "Streamlined campaign management",
        "Better lead nurturing",
      ],
    },
    {
      title: "Declarative Integrations",
      description:
        "Integrate Salesforce with other systems seamlessly using declarative tools, ensuring data consistency and process efficiency.",
      benefits: [
        "Improved data accuracy",
        "Enhanced process efficiency",
        "Reduced manual work",
      ],
    },
    {
      title: "Declarative Automations (Flows)",
      description:
        "Automate your business processes with Salesforce Flows, creating efficient and error-free workflows.",
      benefits: [
        "Increased productivity",
        "Reduced errors",
        "Streamlined operations",
      ],
    },
  ];
  return (
    <>
      <div className="services" data-aos="fade-up" data-aos-delay="100">
        <h1>Our Services</h1>
        <h3>
          Comprehensive Salesforce Solutions for Non-Profits and Businesses
        </h3>
        <p>
          At Sahara Cloud Solutions, we offer a wide range of Salesforce
          services designed to meet the unique needs of non-profits and
          businesses. Explore our services to see how we can help you harness
          the power of Salesforce.
        </p>
      </div>
      <div className="section-title" data-aos="fade-right">
        <h2>Service Categories</h2>
        <p>We specialize in the following areas</p>
      </div>
      <div className="ServiceCategory" data-aos="fade-down">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            benefits={service.benefits}
          />
        ))}
      </div>
      <div className="cta">
        <div className="CTAContainer" data-aos="zoom-in">
          <div className="text-center">
            <h3>Call To Action</h3>
            <h4>Ready to Get Started?</h4>
            <p>
              Contact us today to discuss how our Salesforce solutions can help
              your organization thrive. Whether you’re a non-profit looking to
              enhance your impact or a business seeking to improve operations,
              Sahara Cloud Solutions is here to help.
            </p>
            <a className="cta-btn" href="about">
              Call To Action
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
