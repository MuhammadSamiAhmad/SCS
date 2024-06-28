import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl mb-6">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
