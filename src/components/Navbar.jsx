import React, { useEffect, useState } from "react";
import sun from "../assets/sun.png";
import CV from "../assets/ARTURO_MARTINEZ_CV.pdf";
import { useRive, Layout, Fit, Alignment } from "rive-react";

const Navbar = () => {
  const [hover, setHover] = useState(false);

  const { rive, RiveComponent } = useRive({
    src: "logo1.riv",
    stateMachines: "State Machine 1",
    artboard: "Artboard",
    autoplay: false, // Disable autoplay to control animation manually
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
  });

  const handleMouseEnter = () => {
    console.log(rive);
    setHover(true);
    if (rive) {
      rive.reset();
      rive.play(); // Start animation on hover
    }
  };

  const handleMouseLeave = () => {
    console.log("Mouse Leave");
    setHover(false);
    if (rive) {
      rive.pause(); // Pause animation on hover out
    }
  };

  useEffect(() => {
    console.log(hover);
  }, [hover]);

  return (
    <div className="nav sticky-navbar" style={{ alignItems: "center" }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="rive-container"
        style={{
          width: "22%",
          height: "3.5rem",
        }}
      >
        <RiveComponent />
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="nav-buttons">
        <button className="cv-download">
          <a href={CV} target="_blank" rel="noopener noreferrer">
            View CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
