import React from "react";
import "./ExpEdu.css";
const ExpEdu = (props) => {
  return (
    <>
      <div className="expeduSection">
        <div className="yearsSec">
          <h6>{props.years}</h6>
        </div>
        <h1>
          {props.title} &#x2015; <span>{props.titleSpan}</span>
        </h1>
        <p>
          {props.about}
        </p>
        <div className="expeduIcon">
          {props.icon}
        </div>
      </div>
    </>
  );
};

export default ExpEdu;
