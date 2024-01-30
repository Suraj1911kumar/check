import React from "react";
import MainHead from "../../componets/MainHeadTitle/MainHead";
import "./Services.css";
import webImage from "../../../public/images/webdevelopment.jpeg";
import Button from "../../componets/Button/Button";

import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Web Development",
    description:
      "We offer a wide range of web development services, including custom website design and development,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, itaque cumque odio natus facilis quia modi fuga quibusdam vitae sequi sed quisquam necessitatibus ea, qui alias consequatur. Architecto vero error tempora recusandae facilis enim libero, laboriosam asperiores distinctio. Nulla quas consequatur molestiae velit consectetur aliquid commodi id illo laborum impedit?",
  },
  {
    id: "2",
    image:
      "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Web Development",
    description:
      "We offer a wide range of web development services, including custom website design and development,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, itaque cumque odio natus facilis quia modi fuga quibusdam vitae sequi sed quisquam necessitatibus ea, qui alias consequatur. Architecto vero error tempora recusandae facilis enim libero, laboriosam asperiores distinctio. Nulla quas consequatur molestiae velit consectetur aliquid commodi id illo laborum impedit?",
  },
  {
    id: "3",
    image:
      "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Web Development",
    description:
      "We offer a wide range of web development services, including custom website design and development,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, itaque cumque odio natus facilis quia modi fuga quibusdam vitae sequi sed quisquam necessitatibus ea, qui alias consequatur. Architecto vero error tempora recusandae facilis enim libero, laboriosam asperiores distinctio. Nulla quas consequatur molestiae velit consectetur aliquid commodi id illo laborum impedit?",
  },
  {
    id: "4",
    image:
      "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Web Development",
    description:
      "We offer a wide range of web development services, including custom website design and development,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, itaque cumque odio natus facilis quia modi fuga quibusdam vitae sequi sed quisquam necessitatibus ea, qui alias consequatur. Architecto vero error tempora recusandae facilis enim libero, laboriosam asperiores distinctio. Nulla quas consequatur molestiae velit consectetur aliquid commodi id illo laborum impedit?",
  },
];

const Services = () => {
  return (
    <div className="servicesPage">
      <MainHead backText="Resume" upperText="My" upTextSpan="Services" />

      {services.map((i) => {
        return (
          <div className="serviceContainer" key={i.id}>
            <h1 className="mobileShow">{i.title}</h1>

            <div className="upService">
              <img src={i.image} alt="web development" />
            </div>
            <div className="downService">
              <div>
                <h1>{i.title}</h1>
                <p>{i.description}</p>
              </div>
              <div>
                <Button innerText="Know More" icon={<FaArrowRight />} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
