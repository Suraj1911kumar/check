import React from "react";
import "./personalStatCard.css";
import { FaGripLines } from "react-icons/fa";
const PersonalStatCard = (props) => {
  return (
    <>
      <div className="personalStatCard">
        <h1>{props.years}+</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <h2 style={{ fontSize: "30px" }}>&#x2015;</h2>
          <span>{props.title} </span>
        </div>
      </div>
    </>
  );
};

export default PersonalStatCard;
