import React from "react";
import { FaArrowRight, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import "./socialicons.css";

const SocialIcons = () => {
  return (
    <>
      <div className="social-icons">
        <ul>
          <li data-aos="fade-left">
            <a href="">
              <CiLinkedin />
            </a>
          </li>
          <li data-aos="fade-left">
            <a href="" >
              <SiGmail />
            </a>
          </li>
          <li data-aos="fade-right">
            <a href="" >
              <FaInstagram />
            </a>
          </li>
          <li data-aos="fade-right">
            <a href="" >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialIcons;
