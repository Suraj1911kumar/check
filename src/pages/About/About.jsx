import React from "react";
import "./About.css";
import Button from "../../componets/Button/Button";
import { FaFile } from "react-icons/fa6";
import PersonalStatCard from "../../componets/personalStat/PersonalStatCard";
import Skills from "../../componets/skillsRoundedsection/Skills";
import ExpEdu from "../../componets/ExpEdu/ExpEdu";
import { BsFileEarmarkPerson } from "react-icons/bs";
import MainHead from "../../componets/MainHeadTitle/MainHead";

const detailsEduc = [
  {
    id: "1",
    years: "2023-present",
    title: "Web Developer",
    titleSpan: "Frontend",
    about: "This is me",
  },
  {
    id: "2",
    years: "2022-2023",
    title: "Web Developer",
    titleSpan: "Frontend",
    about: "This is me",
  },
];
const detailsExp = [
  {
    id: "1",
    years: "2023-present",
    title: "Web Developer",
    titleSpan: "Frontend",
    about: "This is me",
  },
  {
    id: "2",
    years: "2022-2023",
    title: "Web Developer",
    titleSpan: "Frontend",
    about: "This is me",
  },
];
const skillsRoundedsection = [
  {
    id: "1",
    percentage: "60",
    skillsName: "HTML",
  },
  {
    id: "2",
    percentage: "55",
    skillsName: "CSS",
  },
  {
    id: "1",
    percentage: "60",
    skillsName: "HTML",
  },
  {
    id: "2",
    percentage: "55",
    skillsName: "CSS",
  },
  {
    id: "1",
    percentage: "60",
    skillsName: "HTML",
  },
  {
    id: "2",
    percentage: "55",
    skillsName: "CSS",
  },
];
const About = () => {
  return (
    <>
      <div className="aboutPage">
        <MainHead backText="Resume" upperText="ABout" upTextSpan="ME" />
        <div className="aboutFirst">
          <div className="personalInfo">
            <h2 data-aos="fade-left">Personal Info : </h2>
            <div className="my-info" data-aos="fade-right">
              <h1>
                First Name : <span>Suraj</span>
              </h1>
              <h1>
                Last Name : <span>Kumar</span>
              </h1>
              <h1>
                Email : <span>s.k.kh1911@gmail.com</span>
              </h1>
              <h1>
                Phone No : <span>7706948354</span>
              </h1>
              <h1>
                Address : <span>Lorem ipsum </span>
              </h1>

              <h1>
                Nationality : <span>Indian</span>
              </h1>
              <h1>
                Age : <span>23</span>
              </h1>
              <h1>
                Languages : <span>Hindi, English</span>
              </h1>
            </div>
            <div>
              <Button innerText="Download CV" icon={<FaFile />} />
            </div>
          </div>
          <div className="personalStats">
            <PersonalStatCard years="0" title="Years of Experience" />
            <PersonalStatCard years="0" title="Completed Projects" />
            <PersonalStatCard years="0" title="Happy Customers" />
            <PersonalStatCard years="0" title="Award Won" />
          </div>
        </div>
        <hr className="h-row" />
        <div className="skillsSection">
          <h1> My Skills</h1>
          <div className="skills" data-aos="fade-down">
            {skillsRoundedsection.map((i) => {
              return (
                <div key={i.id}>
                  <Skills percentage={i.percentage} name={i.skillsName} />
                </div>
              );
            })}
          </div>
        </div>
        <hr className="h-row" />
        <div className="aboutLast">
          <h1>EXPERIENCE & EDUCATION</h1>
          <div className="expEdu">
            <div className="exp">
              <h2 style={{ color: "rgba(19, 18, 18, 0.959)" }}>Experience</h2>
              <div className="content-section">
                {detailsExp.map((i, k) => {
                  return (
                    <ExpEdu
                      years={i.years}
                      title="Web Developer"
                      titleSpan="Frontend"
                      about="this is me"
                      icon={<BsFileEarmarkPerson />}
                    />
                  );
                })}
              </div>
            </div>
            <div className="exp">
              <h2 style={{ color: "rgba(255, 231, 0, 1)" }}>Education</h2>
              <div className="content-section">
                {detailsEduc.map((i, k) => {
                  return (
                    <ExpEdu
                      years={i.years}
                      title="Web Developer"
                      titleSpan="Frontend"
                      about="this is me"
                      icon={<FaFile />}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
