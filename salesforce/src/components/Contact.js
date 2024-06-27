import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>

          <div className="Form">
            <div className="info">
              <div className="address">
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>

            <div className="inputs">
              <form action="" method="post" className="email-form">
                <div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
