import React from "react";
import Resume from "../../assets/Arun-resume.pdf"
const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-heading">Contact Me</h2>

      <div className="socials-links">
        <ul className="socials-items">
          <li>
            <a href="https://github.com/JustArunn">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dev-arunn/">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.instagram.com/just.arunn/">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100092980794827">
              FaceBook
            </a>
          </li>
        </ul>
      </div>
      <div className="resume-download">
        <button className="btn-resume">
          <a href={Resume} download="Arun's resume">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
