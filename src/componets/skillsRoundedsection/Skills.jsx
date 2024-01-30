import React from "react";

import "./Skills.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Skills = (props) => {
  const percentage = props.percentage;

  return (
    <>
      <div className="skillGraph">
        <CircularProgressbar
          className="progressBar"
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: "rgba(255, 231, 0, 1)",
            textColor: "#ffffff",
          })}
        />

        <h1>{props.name}</h1>
      </div>
    </>
  );
};

export default Skills;
