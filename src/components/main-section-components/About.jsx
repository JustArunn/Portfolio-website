import React from "react";
import WeatherImage from "../../assets/weather-app.png";
import DevDetectiveImage from "../../assets/dev-detective.png";
const About = () => {
  return (
    <div className="about-section" id="about">
      <br />
      <h2 className="text-about">About Me</h2>
      <p className="about-description">
        I am a Frontend Developer profecient in HTML CSS JavaScript and React.js
      </p>

      <div className="projects-section">
        <h2 className="project-heading">Projects</h2>
        <div className="projects-wrapper">
          <div className="project-image">
            <img src={WeatherImage} width="70%" />
            <p>
              LIVE WEATHER FORECAST APP | <br /> React.Js API Based Project
            </p>
            <button className="btn-live-link">
              <a target="_blank" href="https://weather-app-arun.netlify.app/">
                Live Link
              </a>
            </button>
          </div>
          <br />
          <br />
          <div className="project-image">
            <img src={DevDetectiveImage} width="70%" />
            <p>
              DEV DETECTIVE | <br />
              React.Js API Based Project
            </p>
            <button className="btn-live-link">
              <a target="_blank" href="https://dev-detective-arun.netlify.app/">
                Live Link
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
