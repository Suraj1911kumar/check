import React from "react";
import "./MainHead.css";
const MainHead = (props) => {
  return (
    <>
      <div className="mainRes" data-aos="zoom-in-up">
        <h1 data-aos-duration="100">{props.backText}</h1>
        <h2 data-aos-duration="500">
          {props.upperText} <span>{props.upTextSpan}</span>
        </h2>
      </div>
    </>
  );
};

export default MainHead;
