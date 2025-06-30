import React, { useEffect } from "react";
import { useRive, useStateMachineInput } from "rive-react";

const Skills = () => {
  const STATE_MACHINE_NAME = "State Machine 1";
  const INPUT_NAME = "scrollval";

  const [scrollValue, setScrollValue] = React.useState(0);
  const { rive, RiveComponent } = useRive({
    src: "course.riv",
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    artboard: "Artboard",
  });

  const scrollVal = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / maxScroll) * 100;
      setScrollValue(scrollPercentage);

      scrollVal.value = scrollValue * 1.6;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollVal, scrollValue]);

  return (
    <div className="skill-section" id="skills">
      <h2>Skills</h2>
      <p className="text-description">
        I have extensive experience in using various technologies and frameworks
        on all my projects. From front-end development using HTML, CSS, and
        JavaScript, to back-end development with languages like Django and Node
        I have a versatile skillet that allows me to tackle any project with
        confidence.
      </p>
      <div style={{ height: "500px" }}>
        <RiveComponent />
      </div>
    </div>
  );
};

export default Skills;
