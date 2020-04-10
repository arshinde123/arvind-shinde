import React, { useState, useEffect } from "react";
import _ from "lodash";

import Arvind from "../../assets/img/arvind.jpg";

import "./style.scss";

const titles = ['Software Engineer', 'Web Developer', 'Fronend Developer', 'UI Developer', 'NodeJS Developer'];

const Sidebar = () => {
  const [title, setTitle] = useState("Software Engineer");

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle(titles[_.random(0,4)]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sidebar">
      <img src={Arvind} alt="My photo" className="sidebar__img" />
      <div className="sidebar__desc">
        <h1 className="sidebar__desc--name">Arvind Shinde</h1>
        <h3 className="sidebar__desc--title">{title}</h3>
      </div>
      <div className="sidebar__email">
        <div className="sidebar__email--label">Email : </div>
        <div className="sidebar__email--value">arshinde123.2013@gmail.com</div>
      </div>
      <nav className="sidebar__nav">
        <ul>
          <li className="sidebar__nav--item">About</li>
          <li className="sidebar__nav--item"><span className="sidebar__nav--item-active">Skills</span></li>
          <li className="sidebar__nav--item">Experience</li>
          <li className="sidebar__nav--item">Education</li>
        </ul>
      </nav>
      <div className="sidebar__copyright">&copy; All rights reserved.</div>
    </div>
  );
};

export default Sidebar;
