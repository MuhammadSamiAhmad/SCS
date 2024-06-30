import React from "react";
import Logo from "../assets/Logos_SCS_W-01.png";
import { Link } from "react-scroll";
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import NewsletterForm from "./NewsletterForm";

function Footer() {
  // const MAILCHIMP_URL =
  //   "https://saharacloudsolutions.us14.list-manage.com/subscribe/post?u=2e438cf31587ada9ec1bcb98f&amp;id=6d8f994041&amp;f_id=00d628e1f0";
  const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";
  return (
    <footer className="bg-black text-white py-4">
      <div className="footer-top">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
              <div className="footer-info">
                <h3 className="text-2xl font-bold text-white">
                  <img src={Logo} width={100} height={100} alt="Logo" />
                </h3>
                <p className="mt-4">
                  Wahran St., branched from Tayaran St., <br />
                  Nasr City, Cairo, EGYPT
                  <br />
                  <br />
                  <strong>Phone:</strong> +2010 6621 5017
                  <br />
                  <strong>Email:</strong> Info@saharacloudsolutions.com
                  <br />
                  Meetus@saharacloudsolutions.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a href="#home" className="text-gray-400 hover:text-white">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/6 px-4 mb-8 md:mb-0">
              <h4 className="text-xl font-bold mb-4">Useful Links</h4>
              <ul className="list-none p-0">
                {["Home", "About", "Services", "Team"].map((item) => (
                  <li key={item} className="mb-2">
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className={`text-gray-400 hover:text-white cursor-pointer`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
              <h4 className="text-xl font-bold mb-4">Our Services</h4>
              <ul className="list-none p-0">
                <li className="mb-2 cursor-pointer">
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`text-gray-400 hover:text-white`}
                  >
                    Non-Profit Consultation
                  </Link>
                </li>
                <li className="mb-2 cursor-pointer">
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`text-gray-400 hover:text-white`}
                  >
                    Consultation B2B
                  </Link>
                </li>
                <li className="mb-2 cursor-pointer">
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`text-gray-400 hover:text-white`}
                  >
                    Experience Cloud
                  </Link>
                </li>
                <li className="mb-2 cursor-pointer">
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`text-gray-400 hover:text-white`}
                  >
                    Sales Cloud
                  </Link>
                </li>
                <li className="mb-2 cursor-pointer">
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`text-gray-400 hover:text-white`}
                  >
                    Service Cloud
                  </Link>
                </li>
                <li className="mb-2 cursor-pointer">
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`text-gray-400 hover:text-white`}
                  >
                    Declarative Integrations
                  </Link>
                </li>
                <li className="mb-2 cursor-pointer">
                  {" "}
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`text-gray-400 hover:text-white`}
                  >
                    Declarative Automations
                  </Link>
                </li>
              </ul>
            </div>

            {/* <MailchimpSubscribe
              url={MAILCHIMP_URL}
              render={(props) => {
                const { subscribe, status, message } = props || {};
                return (
                  <NewsletterForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                );
              }} */}
            {/* /> */}
            <MailchimpSubscribe url={url} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center text-gray-400">
          <div className="container mx-auto text-center">
            <p>
              &copy; Copyrights 2024 Sahara Cloud Solutions. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
