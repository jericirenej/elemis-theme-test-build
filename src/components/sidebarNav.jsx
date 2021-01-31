import React, { useState, useEffect } from "react";
import logo from "../resources/logo.gif";

const SideBar = () => {
  const [showElement, setShowElement] = useState("hide");

  const handleScroll = () => {
    const offset = window.scrollY;
    const viewportHeight = window.innerHeight;
    offset <= viewportHeight ? setShowElement("hide") : setShowElement("show");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div id="sidebar-wrapper" className={showElement}>
      <div id="sidebar" className={showElement}>
        <img src={logo} alt="logo"></img>
        <ul className="sidebar-list">
          <li>
            <a href="#top">HOME</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#about-us">ABOUT</a>
          </li>
          <li>
            <a href="#contact-us">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
