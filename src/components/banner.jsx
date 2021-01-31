import React, { useState, useEffect } from "react";
import bannerNormal from "../resources/banner.jpg";
import bannerMini from "../resources/banner-mobile-cropped.jpg";

const Banner = () => {
  const [viewport, setViewport] = useState(window.innerWidth <= 800 ? "mini" : "normal");

  const handleResize = () => {
    const viewportWidth = window.innerWidth;
    viewportWidth <= 800 ? setViewport("mini") : setViewport("normal");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });


  return (
    <div id="banner">
      <img src={viewport === "normal" ? bannerNormal : bannerMini} alt="banner"></img>
      {viewport === "normal" ? (
        <h2>Hello! We're Frost!</h2>
      ) : (
        <h2>
          Hello!
          <br />
          We're Frost!
        </h2>
      )}
      <p>A digital & branding agency based in Neverland</p>
    </div>
  );
};

export default Banner;
