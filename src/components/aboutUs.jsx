import { aboutUs } from "../resources/data.js";
import React, { useState, useEffect } from 'react';
import Team from "./ourTeam";

const AboutUs = () => {

  const [viewport, setviewport ] = useState("large");


  const handleResize = () => {
    const viewportWidth = window.innerWidth;
    viewportWidth <= 1167 ? setviewport("small") : setviewport("large");
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div id="about-us">
      <h2>{aboutUs.title}</h2>
      <h3>{aboutUs.subtitle}</h3>
      <div id="description">
        <h2>{aboutUs.workplace.title}</h2>
        <h3>"{aboutUs.workplace.subtitle}"</h3>
        <p>{aboutUs.workplace.content}</p>
        <p>
          <a className="read-more" href="#read-more">
            Read more
          </a>
        </p>
      </div>
      <img src={viewport === "large" ? aboutUs.workplace.pictureLarge : aboutUs.workplace.pictureSmall} alt="Workplace picture"></img>
      <div id="what-we-do">
        <div id="ourWork">
          <h2>{aboutUs.ourWork.title}</h2>
          <p>{aboutUs.ourWork.content}</p>
        </div>
        <div id="ourProcess">
          <h2>{aboutUs.ourProcess.title}</h2>
          <p>{aboutUs.ourProcess.content}</p>
        </div>
        <div id="ourSkills">
          <h2>{aboutUs.ourSkills.title}</h2>
          <p>{aboutUs.ourSkills.content}</p>
        </div>
      </div>
      <Team />
    </div>
  );
};

export default AboutUs;
