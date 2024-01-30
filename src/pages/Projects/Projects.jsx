import React from "react";
import MainHead from "../../componets/MainHeadTitle/MainHead";
import "./projects.css";
import ProjectsSection from "../../componets/projetcsSection/ProjectsSection";

const Projects = () => {
  return (
    <div className="projectsPage">
      <MainHead backText="Portfolio" upperText="MY" upTextSpan="Projetcs" />
      <div className="firstSectionProjects">
        <ProjectsSection/>
      </div>
    </div>
  );
};

export default Projects; 
