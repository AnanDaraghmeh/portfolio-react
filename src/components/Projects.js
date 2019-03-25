import React from 'react';
import ProjectCard from './ProjectCard';
import { Consumer } from '../store';

class Projects extends React.Component {
  render() {
    return (
      <section className="projects container section" id="projects">
        <Consumer>
          {value => {
            return value.projects.map(project => {
              return <ProjectCard key={project.link} project={project} />;
            });
          }}
        </Consumer>
      </section>
    );
  }
}

export default Projects;
