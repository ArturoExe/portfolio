import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import myPhoto from "../assets/myPhoto.jpg";
import TypingText from "./TypingText";

const AboutMe = () => {
  return (
    <div className="about-me-section" id="aboutme">
      <h2>About Me</h2>
      <div className="photo-container">
        <img src={myPhoto} alt="profile " />
      </div>
      <div className="icon-container">
        <a href="https://github.com/ArturoExe">
          <img src={github} alt="github icon" className="about-me-icon" />
        </a>
        <a href="https://www.linkedin.com/in/arturo-exe2022/">
          <img src={linkedin} alt="linkedin icon" className="about-me-icon" />
        </a>
      </div>
      <p className="text-description">
        <TypingText
          text="HHi, I'm Arturo Martinez Jr — a coding sorcerer and Systems Engineering
        graduate from San Diego Global Knowledge University and the
        Technological Institute of Tijuana. Born on March 26, 2001, in San
        Diego, CA, I infuse my technical skills with a creative touch. Beyond
        the code, you'll find me harmonizing with music, riding waves, and
        lifting more than just weights. Join me on this dynamic journey where
        tech meets tunes, and waves meet weights"
        />
      </p>
    </div>
  );
};

export default AboutMe;
