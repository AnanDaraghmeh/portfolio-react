import React from 'react';
import { projects } from '../assets/projects';
import ProjectCard from './ProjectCard';

class Projects extends React.Component {
  render() {
    return (
      <section className="projects" id="projects">
        {projects.map(project => {
          return <ProjectCard key={project.link} project={project} />;
        })}
      </section>
    );
  }
}

export default Projects;
