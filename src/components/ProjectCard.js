import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img className="card_img" src={project.img} alt="project" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{ paddingLeft: '0', paddingBottom: '0' }}
        className="link"
        href={project.link}
      >
        <h3 style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}>
          {project.name}
        </h3>
      </a>
      <p
        style={{ marginTop: '0', marginBottom: '0.5rem', minHeight: '2rem' }}
      >{`${project.desc}`}</p>
      <a
        className="link link-code"
        href={project.code}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faCode} style={{ marginRight: '0.3rem' }} />
        SOURCE CODE
      </a>
    </div>
  );
};

export default ProjectCard;
