import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faGulp
} from '@fortawesome/free-brands-svg-icons';
import {
  faFire,
  faCodeBranch,
  faMobileAlt
} from '@fortawesome/free-solid-svg-icons';

class Skills extends React.Component {
  render() {
    return (
      <div id="skills">
        <section className="skills">
          <div className="skills_section">
            <button className="skills_title">Front-End Technologies</button>
            <ul className="skills_list">
              <li>
                <FontAwesomeIcon className="skills_icon" icon={faHtml5} />
                HTML5
              </li>
              <li>
                <FontAwesomeIcon className="skills_icon" icon={faCss3Alt} />
                CSS3, SCSS
              </li>
              <li>
                <FontAwesomeIcon className="skills_icon" icon={faCss3Alt} />
                Front-end frameworks (eg, Bootstrap4)
              </li>
              <li>
                <FontAwesomeIcon className="skills_icon" icon={faJs} />
                JavaScript/ES6, JQuery
              </li>
              <li>
                <FontAwesomeIcon className="skills_icon" icon={faJs} />
                React and Redux
              </li>
            </ul>
          </div>
          <div className="skills_section">
            <button className="skills_title">Back-End Technologies</button>
            <ul className="skills_list">
              <li>
                <FontAwesomeIcon className="skills_icon" icon={faFire} />
                Firebase (firestore, auth, cloud functions)
              </li>
            </ul>
          </div>
          <div className="skills_section">
            <button className="skills_title">Other Technologies</button>
            <ul className="skills_list">
              <li>
                <FontAwesomeIcon className="skills_icon" icon={faNodeJs} />
                Node.js and npm
              </li>
              <li>
                <FontAwesomeIcon className="skills_icon" icon={faCodeBranch} />
                Version control (Git, GitHub)
              </li>
              <li>
                <FontAwesomeIcon className="skills_icon" icon={faGulp} />
                Build tools (Gulp, Webpack)
              </li>
              <li>
                <FontAwesomeIcon className="skills_icon" icon={faMobileAlt} />
                Progressive Web Apps
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Skills;
