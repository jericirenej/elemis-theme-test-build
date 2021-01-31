import React, { Fragment } from "react";
import { services } from "../resources/data.js";

const Services = () => {
  return (
    <Fragment>
      <div id="services">
        <h2>How it works</h2>
        <h3>We're making useful things since 2008</h3>
        <div className="services-list">
          <ul>
            {services.map(service => (
              <li key={service.id}>
                <img src={service.image} alt={service.title}></img>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div id="projectButton">
        <a href="#projects" className="projectLink">
          See our projects
        </a>
      </div>
    </Fragment>
  );
};

export default Services;
