import React, { useState } from "react";
import { Link } from "react-scroll";

import Logo from "../assets/Logos_SCS_W-01.png";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <header id="header">
        <div className="container">
          <img src={Logo} width={"100"} height={"100px"} alt="Logo" />
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className={`navbar-link ${active === "Home" ? "active" : ""}`}
                  onClick={() => setActive("Home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`navbar-link ${
                    active === "About" ? "active" : ""
                  }`}
                  onClick={() => setActive("About")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`navbar-link ${
                    active === "Services" ? "active" : ""
                  }`}
                  onClick={() => setActive("Services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="team"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`navbar-link ${active === "Team" ? "active" : ""}`}
                  onClick={() => setActive("Team")}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={`navbar-link ${
                    active === "Contact" ? "active" : ""
                  }`}
                  onClick={() => setActive("Contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <span></span>
        </div>
      </header>
    </>
  );
}
