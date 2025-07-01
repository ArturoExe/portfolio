import React from "react";
import ThreeModel from "./ThreeModel";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="left-hero">
          <h1>
            Hey, I'm Arturo, your coding wizard! Explore my enchanted portfolio!
          </h1>
        </div>
        <div className="right-hero">
          <ThreeModel className="model" />
        </div>
      </div>
      <h4>
        <ScrollIndicator />
      </h4>
    </div>
  );
};

export default Hero;
