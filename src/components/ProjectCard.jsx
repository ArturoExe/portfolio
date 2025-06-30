const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      </div>
      <div className="project-text-container">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
