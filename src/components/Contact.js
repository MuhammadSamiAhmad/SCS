import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { getDatabase, ref, push } from "firebase/database";
import { app } from "../firebaseConfig"; 
function Contact() {
  const db = getDatabase(app);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    const contactRef = ref(db, "contacts");
    push(contactRef, formData)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Error posting data: ", error);
        setStatus("error");
      });
  };

  return (
    <div className="contain" style={{ maxWidth: "80%", margin: "auto" }}>
      <section
        id="contact"
        className="pb-20"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <div className="container mx-auto">
          <div className="section-title mb-5">
            <div className="flex flex-row items-center">
              <h2 className="text-xs font-semibold tracking-wider uppercase text-gray-600">
                Contact
              </h2>
              <div className="h-0.5 color bg-blue-500 w-20 ml-3 mt-1"></div>
            </div>
            <h4
              className="text-4xl font-bold uppercase text-gray-900"
              style={{ fontFamily: "Righteous" }}
            >
              CONTACT US
            </h4>
          </div>
          <div className="mb-8">
            <iframe
              title="Google Maps Location"
              style={{ border: 0, width: "100%", height: "270px" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d863.2816546999263!2d31.327739221933243!3d30.061904855687917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1719736272104!5m2!1sen!2seg"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="info space-y-8 lg:col-span-1 text-left">
              <div className="address flex items-start">
                <FaMapMarkerAlt className="text-blue-500 text-2xl" />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">Location:</h4>
                  <p>
                    Wahran St., branched from Tayaran St., <br />
                    Nasr City, Cairo, EGYPT
                  </p>
                </div>
              </div>
              <div className="email flex items-start">
                <FaEnvelope className="text-blue-500 text-2xl" />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">Email:</h4>
                  <p>
                    Info@saharacloudsolutions.com <br />
                    Meetus@saharacloudsolutions.com
                  </p>
                </div>
              </div>
              <div className="phone flex items-start">
                <FaPhone className="text-blue-500 text-2xl" />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">Call:</h4>
                  <p>+20011 5000 0430</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 mt-5 lg:mt-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control w-full p-2 border border-gray-300 rounded"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control w-full p-2 border border-gray-300 rounded"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control w-full p-2 border border-gray-300 rounded"
                  placeholder="Subject"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="form-control w-full p-2 border border-gray-300 rounded"
                  placeholder="Message"
                  required
                ></textarea>
                <div className="my-3">
                  {status === "loading" && (
                    <div className="loading text-center py-2">Loading...</div>
                  )}
                  {status === "error" && (
                    <div className="error-message text-center py-2 bg-red-600 text-white">
                      An error occurred
                    </div>
                  )}
                  {status === "success" && (
                    <div className="sent-message text-center py-2 bg-green-600 text-white">
                      Your message has been sent. Thank you!
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white hover:text-gray-800 px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-300 border-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
