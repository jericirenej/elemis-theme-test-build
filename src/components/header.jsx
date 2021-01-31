import React from "react";

const Navbar = () => {
  return (
    <div id="top" className="container-header">
      <h1 className="logo">FROST</h1>
      <nav>
        <ul className="navbar">
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
            <a href="#contact-us">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
