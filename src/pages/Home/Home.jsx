import React from "react";
import "./Home.css";
import image from "../../../public/images/my.jpg";
import Button from "../../componets/Button/Button.jsx";
import { FaArrowRight, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import SocialIcons from "../../componets/Socialicons/SocialIcons.jsx";
const Home = () => {
  return (
    <>
      <div className="mainHome" >
        <div className="imageF" data-aos="fade-up" data-aos-duration="0">
          <img src={image} alt="My image" data-aos="fade-down" data-aos-duration="1000"/>
        </div>
        <div>
          <div className="aboutMeShort">
            <h1 data-aos="fade-right"> - I'M SURAJ KUMAR.</h1>
            <h2 data-aos="fade-left">Web Developer</h2>
            <p data-aos="zoom-in"> 
              I'm a front‑end developer focused on crafting clean &
              user‑friendly experiences, I am passionate about building
              excellent software that improves the lives of those around me.
            </p>
            <SocialIcons/>
            <Button  innerText="More about me " link="/about" icon={<FaArrowRight />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
