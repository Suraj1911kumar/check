import React, { useState } from "react";
import { FaHome, FaPen } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { BsBagDashFill } from "react-icons/bs";
import { SlEnvolope } from "react-icons/sl";
import "../componets/sidenav.css";
import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const links = [
  {
    id:"1",
    name: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    id:"2",
    name: "About",
    path: "about",
    icon: <IoPersonOutline />,
  },
  {
    id:"3",
    name: "Services",
    path: "services",
    icon: <BsBagDashFill />,
  },
  {
    id:"4",
    name: "Portfolio",
    path: "projects",
    icon: <SlEnvolope />,
  },
  {
    id:"5",
    name: "Contacts",
    path: "contacts",
    icon: <FaPen />,
  },
];
const SideNav = () => {
  const [menu, SetMenu] = useState(false);

  return (
    <>
      <ul className={!menu ? "ul" : "ulMobile"}>
        {links.map((li, k) => (
          <NavLink to={li.path} key={li.id} >
            <li className="li" data-aos="fade-down">
              <div className="listName">{li.name}</div>
              <div>{li.icon}</div>
            </li>
          </NavLink>
        ))}
      </ul>
      <div className="hamburgerMenu" onClick={() => SetMenu(!menu)}>
        {menu ? <IoClose /> : <GiHamburgerMenu />}
      </div>
    </>
  );
};

export default SideNav;
