import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img className="card_img" src={project.img} alt="project" />
      </a>
      <h3>{project.name}</h3>
      <p>{`${project.desc}`}</p>
      <a
        className="link link-primary link-lg"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        To the project page
      </a>
    </div>
  );
};

export default ProjectCard;
