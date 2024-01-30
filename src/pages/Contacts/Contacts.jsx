import React from "react";
import "./contacts.css";
import MainHead from "../../componets/MainHeadTitle/MainHead";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";

import {
  TiSocialFacebookCircular,
  TiSocialLinkedin,
  TiSocialSkype,
} from "react-icons/ti";
import { PiTelegramLogo } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";
import Button from "../../componets/Button/Button";
import SocialIcons from "../../componets/Socialicons/SocialIcons";
const Contacts = () => {
  return (
    <>
      <div className="contactFull">
        <MainHead backText="Contact" upperText="GetIn " upTextSpan="Touch" />

        <div className="contactSection">
          <div className="contact-info">
            <div>
              <h1>Don't be Shy!</h1>
              <p>
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
            </div>
            <SocialIcons />
            <div>
              <div className="miniInfo">
                <div>
                  <HiOutlineMailOpen />
                </div>
                <h2>
                  Mail Me : <span>s.k.kh1911@gmail.com</span>
                </h2>
              </div>
              <div className="miniInfo">
                <div>
                  <IoMdCall />
                </div>
                <h2>
                  Call Me : <span>7706948354</span>
                </h2>
              </div>
              <div></div>
              
            </div>
          </div>
          <div className="message-me">
            <div className="message-form">
              <div>
                <input type="text" placeholder=" Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea
                name="message"
                id="message"
                cols="10"
                rows="5"
                placeholder="Your messages"
              ></textarea>
            </div>
            <div>
              <button type="submit">
                <Button innerText="submit" icon={<PiTelegramLogo />} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
