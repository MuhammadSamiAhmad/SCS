import React from "react";
import CTAbg from "../assets/cta-bg.jpg";

const Cta = () => {
  return (
    <div className="contain" style={{ maxWidth: "100%", margin: "auto" }}>
      <section
        id="cta"
        className="cta bg-cover bg-center bg-fixed py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.5)), url(${CTAbg})`,
        }}
      >
        <div className="container mx-auto px-4" data-aos="zoom-in">
          <div className="text-center">
            <h3 className="text-white text-2xl font-bold">Call To Action</h3>
            <p className="text-white mt-4">
              Ready to transform your organization with Salesforce? Contact us
              today to learn more about how we can help you achieve your goals.
            </p>
            <a
              className="cta-btn mt-4 inline-block px-7 py-2 text-white font-semibold text-sm tracking-wider border-2 border-white rounded transition duration-500 hover:bg-blue-500 hover:border-blue-500 hover:text-gray-900"
              href="#home"
            >
              Call To Action
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
