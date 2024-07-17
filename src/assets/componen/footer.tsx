import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-row w-full justify-between px-5 py-4 shadow-md bg-gray-800 text-white">
      <h2 className="text-base font-extrabold">FAQ</h2>
      <div className="flex flex-row gap-5">
        <a href="#" onClick={scrollToTop} className="hover:text-gray-300">
          Home
        </a>
        <a
          href="https://wa.me/08889255485"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          href="https://www.instagram.com/readone.ma/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="mailto:ridwanmaulana0861@gmail.com"
          className="hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/ridwan-maulana-543b0122b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
