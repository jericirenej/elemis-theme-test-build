import React, { Fragment, useEffect, useState } from "react";

const Projects = ({ thumbnails, categories, onActive }) => {
  const activeCategory = categories.filter(category => category.active === "true")[0];

  let smallBWPics = thumbnails;
  smallBWPics.forEach(
    item => (item.newUrl = `https://picsum.photos/id/${item.id}/300/200?grayscale`)
  );

  activeCategory.value === "all"
    ? smallBWPics.forEach(picture => (picture.included = "true"))
    : smallBWPics.forEach(picture =>
        picture.category === activeCategory.value
          ? (picture.included = "true")
          : (picture.included = "false")
      );

  const [viewport, setviewport] = useState("normal");

  const handleResize = () => {
    const viewportWidth = window.innerWidth;
    viewportWidth <= 568 ? setviewport("small") : setviewport("normal");
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div id="projects">
      <h2>Our Awesome Projects</h2>
      <h3>Great design comes with understanding customer needs</h3>
      <ul>
        {categories.map(category => (
          <Fragment key={Math.random()}>
            <li
              key={category.value}
              active={category.active}
              className="category-filter"
              onClick={() => onActive(category.value)}>
              {category.value}
            </li>
            {categories.findIndex(element => element === category) !==
              categories.length - 1 && viewport !== "small" ? (
              <li key={`${category.value}-separator`} className="separator">
                /
              </li>
            ) : null}
          </Fragment>
        ))}
      </ul>
      <div className="project-list">
        {smallBWPics
          .filter(element => element.included === "true")
          .map(photo => (
            <img
              key={photo.id}
              id={photo.id}
              src={photo.newUrl}
              alt={photo.category}></img>
          ))}
      </div>
    </div>
  );
};

export default Projects;
