import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/Logos_SCS_W-01.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="header" className="fixed w-full z-20 bg-black bg-opacity-70">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img src={Logo} width={90} height={90} alt="Logo" />
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex w-full md:w-auto absolute md:relative bg-black bg-opacity-70 md:bg-transparent right-0 top-full md:top-auto`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
            {["Home", "About", "Services", "Team", "Contact"].map((item) => (
              <li key={item} className="md:ml-4">
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={`cursor-pointer py-2 px-4 font-semibold text-white transition duration-400 hover:text-blue-500`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Link
            smooth={true}
            duration={500}
            offset={-100}
            to="cta"
            className="bg-transparent hover:bg-blue-500 text-white hover:text-gray-800 border-2 border-blue-500 rounded-md py-2 px-6 text-sm transition duration-300 focus:bg-transparent focus:text-white cursor-pointer"
          >
            Get Started
          </Link>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="text-white text-3xl md:hidden"
        >
          {isMobileMenuOpen ? "\u00D7" : "\u2630"}
        </button>
      </div>
    </header>
  );
}
