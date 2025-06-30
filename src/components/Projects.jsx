import React from "react";
import ProjectCard from "./ProjectCard";
import { images } from "../utils/images";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <p>Discover my work, explore my curated list of highlighted projects</p>
      <div className="projects-grid">
        {images.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
