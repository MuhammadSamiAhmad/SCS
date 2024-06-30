import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/Logos_SCS_W-01.png";

export default function Navbar() {
  return (
    <header id="header" className="fixed w-full z-20 bg-black bg-opacity-70 ">
      <div className="container mx-auto flex justify-between items-center p-4">
        <img src={Logo} width={100} height={100} alt="Logo" />
        <nav className="flex">
          <ul className="flex space-x-4 flex-wrap">
            {["Home", "About", "Services", "Team", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={`cursor-pointer py-2 px-4 font-semibold text-white transition duration-400  hover:text-blue-500`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="button">
          <a
            href="#team"
            className="bg-transparent hover:bg-blue-500 text-white hover:text-gray-800 border-2 border-blue-500 rounded-md py-2 px-6 text-sm transition duration-300 whitespace-nowrap hidden md:inline-block lg:inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
