import React from "react";
import { FaArrowRight } from "react-icons/fa";
import style from "./Button.module.css";
import { Link } from "react-router-dom";
const Button = (props) => {
  return (
    <>
      <Link to={props.link} data-aos="zoom-in">
        <button className={style.moreAboutme}>
          <div style={{ zIndex: "5" }} data-aos="fade-left">
            {props.innerText}
            <div className={style.hoverEffect}>{props.icon}</div>
          </div>
          <span></span>
        </button>
      </Link>
    </>
  );
};

export default Button;
