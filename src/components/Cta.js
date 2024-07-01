import React, { useState } from "react";
import CTAbg from "../assets/cta-bg.jpg";
import { PopupModal } from "react-calendly";

const Cta = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage modal open/close
  // const calendlyUrl = process.env.REACT_APP_CALENDLY_URL;

  return (
    <div
      id="cta"
      className="contain"
      style={{ maxWidth: "100%", margin: "auto" }}
    >
      <section
        className="cta bg-cover bg-center bg-fixed py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.5)), url(${CTAbg})`,
        }}
      >
        <div className="container mx-auto px-4" data-aos="zoom-in">
          <div className="text-center">
            <h3 className="text-white text-4xl font-bold">Call To Action</h3>
            <p className="text-white mt-4 italic text-lg">
              Ready to transform your organization with Salesforce? Contact us
              today to learn more about how we can help you achieve your goals.
            </p>
            <button
              className="cta-btn mt-7 inline-block px-7 py-2 text-white font-semibold text-lg tracking-wider border-2 border-white rounded transition duration-500 hover:bg-blue-500 hover:border-blue-500 hover:text-gray-900"
              onClick={() => setIsOpen(true)}
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
      <PopupModal
        url="https://calendly.com/saharacloudsolutions/30min"
        onModalClose={() => setIsOpen(false)} // Close modal function
        open={isOpen} // Modal open state
        rootElement={document.getElementById("root")}
      />
    </div>
  );
};

export default Cta;
