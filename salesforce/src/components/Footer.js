import React from "react";
import NewsletterSignup from './NewsletterSignup';

function Footer() {
  return (
    <footer className="bg-black text-white py-4">

     <div className="footer-top">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
              <div className="footer-info">
                <h3 className="text-2xl font-bold text-white">Gp<span className="text-yellow-500">.</span></h3>
                <p className="mt-4">
                  Wahran St., branched from Tayaran St., <br />
                  Nasr City, Cairo, EGYPT<br /><br />
                  <strong>Phone:</strong> +2010 6621 5017<br />
                  <strong>Email:</strong> Info@saharacloudsolutions.com<br />
                                          Meetus@saharacloudsolutions.com<br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="text-gray-400 hover:text-white"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/6 px-4 mb-8 md:mb-0">
              <h4 className="text-xl font-bold mb-4">Useful Links</h4>
              <ul className="list-none p-0">
                <li className="mb-2"><i className="bx bx-chevron-right mr-2"></i><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li className="mb-2"><i className="bx bx-chevron-right mr-2"></i><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
                <li className="mb-2"><i className="bx bx-chevron-right mr-2"></i><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
              <h4 className="text-xl font-bold mb-4">Our Services</h4>
              <ul className="list-none p-0">
                <li className="mb-2"><i className="bx bx-chevron-right mr-2"></i><a href="#" className="text-gray-400 hover:text-white">Non-Profit Consultation</a></li>
                <li className="mb-2"><i className="bx bx-chevron-right mr-2"></i><a href="#" className="text-gray-400 hover:text-white">Consultation B2B</a></li>
                <li className="mb-2"><i className="bx bx-chevron-right mr-2"></i><a href="#" className="text-gray-400 hover:text-white">Experience Cloud</a></li>
                <li className="mb-2"><i className="bx bx-chevron-right mr-2"></i><a href="#" className="text-gray-400 hover:text-white">Sales Cloud</a></li>
                <li className="mb-2"><i className="bx bx-chevron-right mr-2"></i><a href="#" className="text-gray-400 hover:text-white">Service Cloud</a></li>
                <li className="mb-2"><i className="bx bx-chevron-right mr-2"></i><a href="#" className="text-gray-400 hover:text-white">Declarative Integrations</a></li>
                <li><i className="bx bx-chevron-right mr-2"></i><a href="#" className="text-gray-400 hover:text-white">Declarative Automations</a></li>

              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
              <h4 className="text-xl font-bold mb-4">Our Newsletter</h4>
              <p className="mb-4">Subscribe to keep yourself updated with new features in the Salesforce Ecosystem!</p>
              <form action="" method="post" className="flex">
                <input type="email" name="email" className="p-2 w-full text-black" placeholder="Your Email" />
                <input type="submit" value="Subscribe" className="p-2 bg-blue-500 text-white cursor-pointer" />
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center text-gray-400">
          <div className="container mx-auto text-center">
            <p>
            &copy; Copyrights{new Date().getFullYear()} <strong><span>Gp</span></strong>. All Rights Reserved
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
