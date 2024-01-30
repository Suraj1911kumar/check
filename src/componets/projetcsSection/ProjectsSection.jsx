import React from "react";
import Button from "../../componets/Button/Button.jsx";
import { GoProjectSymlink } from "react-icons/go";
import "./ProjectsSection.css";

const projectDataWeb = [
  {
    id: "1",
    name: "Radee8",
    Image:
      "https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "A social media platform for sharing and discovering music. Built using react js Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas dolore quam officiis quas molestias quia nam, nostrum deserunt soluta repellat sint maiores ea voluptates veniam sit pariatur, architecto eaque libero iusto totam non omnis. Dignissimos quasi doloribus, dolor molestiae iure quidem ad commodi sint enim eveniet iste, officiis perspiciatis. Iusto in impedit dolore quas, rem officia beatae alias n",
    languageUse: "React Js",
  },
  {
    id: "2",
    name: "Radee8",
    Image:
      "https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "A social media platform for sharing and discovering music. Built using react js Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas dolore quam officiis quas molestias quia nam, nostrum deserunt soluta repellat sint maiores ea voluptates veniam sit pariatur, architecto eaque libero iusto totam non omnis. Dignissimos quasi doloribus, dolor molestiae iure quidem ad commodi sint enim eveniet iste, officiis perspiciatis. Iusto in impedit dolore quas, rem officia beatae alias n",
    languageUse: "React Js",
  },
];
const projectDataApp = [];
const projectDataOther = [];


const ProjectsSection = () => {
  return (
    <>
      <h1> Websites & Web Applications : -</h1>

      {projectDataWeb.map((i) => {
        return (
          <div className="projectsSection" key={i.id}>
            <h1>{i.id}.</h1>
            <div className="projects-image">
              <img src={i.Image} alt="not found" />
              <h2>Radee 8</h2>
            </div>
            <div className="info-projects">
              <span>
                <h2>Project Name : </h2>
                <h3>{i.name}</h3>
              </span>
              <span>
                <h2>Language Use : </h2>
                <h3>{i.languageUse}</h3>
              </span>
              <span>
                <h2>Description :</h2>
                <p>{i.description}</p>
              </span>
              <div style={{ margin: "20px 0" }}>
                <Button
                  innerText="More About This"
                  icon={<GoProjectSymlink />}
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* ----------------------------------------------- */}
      <br />
      <hr />
      <br />

      <h1> App Development : -</h1>

      {projectDataApp.map((i) => {
        return (
          <div className="projectsSection" key={i.id}>
            <h1>{i.id}.</h1>
            <div className="projects-image">
              <img src={i.Image} alt="not found" />
              <h2>Radee 8</h2>
            </div>
            <div className="info-projects">
              <span>
                <h2>Project Name : </h2>
                <h3>{i.name}</h3>
              </span>
              <span>
                <h2>Language Use : </h2>
                <h3>{i.languageUse}</h3>
              </span>
              <span>
                <h2>Description :</h2>
                <p>{i.description}</p>
              </span>
              <div style={{ margin: "20px 0" }}>
                <Button
                  innerText="More About This"
                  icon={<GoProjectSymlink />}
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* ----------------------------------------------- */}
      <br />
      <hr />
      <br />

      <h1> Others : -</h1>

      {projectDataOther.map((i) => {
        return (
          <div className="projectsSection" key={i.id}>
            <h1>{i.id}.</h1>
            <div className="projects-image">
              <img src={i.Image} alt="not found" />
              <h2>Radee 8</h2>
            </div>
            <div className="info-projects">
              <span>
                <h2>Project Name : </h2>
                <h3>{i.name}</h3>
              </span>
              <span>
                <h2>Language Use : </h2>
                <h3>{i.languageUse}</h3>
              </span>
              <span>
                <h2>Description :</h2>
                <p>{i.description}</p>
              </span>
              <div style={{ margin: "20px 0" }}>
                <Button
                  innerText="More About This"
                  icon={<GoProjectSymlink />}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectsSection;
