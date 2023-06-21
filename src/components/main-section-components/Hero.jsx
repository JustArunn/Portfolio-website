import React from "react";
import HeroImage from "../../assets/header-image.jpg"
const Hero = () => {
  return (
    <div className="hero-section" id="home">
      <div className="hero-image">
        <img src={HeroImage}/>
      </div>
      <div className="intro">
        <h1>
          Arun <br /> Kumar
        </h1>
        <p className="intro-description">
          UI/UX Designer, Programmer and Frontend <br /> Developer.</p>
        <button className="btn-chat">
          <a href="mailto:just.arunn@gmail.com">Let's Chat</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
