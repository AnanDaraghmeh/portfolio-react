import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import DateTime from './DateTime';

class Hero extends React.Component {
  render() {
    return (
      <div>
        <section className="hero" id="about">
          <div className="hero_content">
            <DateTime />
            <div className="divider" />
            <div className="hero_text">
              <p>
                Welcome to my portfolio page. I'm a self-taught web developer,
                currently front-end with a goal of becoming a full stack
                developer. In this page, you can see some of my projects as well
                as a list of web development technologies that I use currently.
              </p>
            </div>
            <div className="divider" />
            <div>
              <Link
                to="skills"
                smooth={true}
                offset={-50}
                className="link link-inverted"
              >
                Skills
              </Link>
              <Link
                to="projects"
                smooth={true}
                offset={-60}
                className="link link-inverted"
              >
                Projects
              </Link>
              <a
                href="https://reactforcats.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-inverted"
              >
                <FontAwesomeIcon icon={faBlog} /> To My Blog
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
