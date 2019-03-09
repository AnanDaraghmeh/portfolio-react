import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faGulp,
  faReact,
  faSass,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import gatsbyImg from '../assets/brands/gatsby.svg';
import reduxImg from '../assets/brands/redux.svg';
import jQueryImg from '../assets/brands/jquery.svg';
import firebaseImg from '../assets/brands/firebase.svg';
import gitImg from '../assets/brands/git.svg';
import npmImg from '../assets/brands/npm.svg';
import webpackImg from '../assets/brands/webpack.svg';
import bootstrapImg from '../assets/brands/bootstrap.svg';

class Skills extends React.Component {
  render() {
    return (
      <div id="skills">
        <section className="skills">
          <div className="skills_section">
            <button className="skills_title">Front-End Technologies</button>
            <ul className="skills_list">
              <li style={{ background: '#E34F26' }}>
                <FontAwesomeIcon className="skills_icon" icon={faHtml5} />
                HTML
              </li>
              <li style={{ background: '#1572B6' }}>
                <FontAwesomeIcon className="skills_icon" icon={faCss3Alt} />
                CSS
              </li>
              <li style={{ background: '#CC6699' }}>
                <FontAwesomeIcon className="skills_icon" icon={faSass} />
                Sass
              </li>
              <li style={{ background: '#563D7C' }}>
                <img
                  src={bootstrapImg}
                  alt="bootstrap"
                  className="skills_icon"
                />
                Bootstrap
              </li>
              <li style={{ background: '#F8C300' }}>
                <FontAwesomeIcon className="skills_icon" icon={faJs} />
                JavaScript
              </li>
              <li style={{ background: '#0769AD' }}>
                <img src={jQueryImg} alt="jquery" className="skills_icon" />
                JQuery
              </li>
              <li style={{ background: '#01B3E3' }}>
                <FontAwesomeIcon className="skills_icon" icon={faReact} />
                React
              </li>
              <li style={{ background: '#764ABC' }}>
                <img src={reduxImg} alt="redux" className="skills_icon" />
                Redux
              </li>
              <li style={{ background: '#663399' }}>
                <img src={gatsbyImg} alt="gatsby" className="skills_icon" />
                Gatsby
              </li>
            </ul>
          </div>
          <div className="skills_section">
            <button className="skills_title">Back-End Technologies</button>
            <ul className="skills_list">
              <li style={{ background: '#F89F1B' }}>
                <img src={firebaseImg} alt="firebase" className="skills_icon" />
                Firebase
              </li>
            </ul>
          </div>
          <div className="skills_section">
            <button className="skills_title">Other Technologies</button>
            <ul className="skills_list">
              <li style={{ background: '#339933' }}>
                <FontAwesomeIcon className="skills_icon" icon={faNodeJs} />
                Node
              </li>
              <li style={{ background: '#CB3837' }}>
                <img src={npmImg} alt="npm" className="skills_icon" />
                NPM
              </li>
              <li style={{ background: '#F05032' }}>
                <img src={gitImg} alt="git" className="skills_icon" />
                Git
              </li>
              <li style={{ background: '#181717' }}>
                <FontAwesomeIcon className="skills_icon" icon={faGithub} />
                GitHub
              </li>
              <li style={{ background: '#DA4648' }}>
                <FontAwesomeIcon className="skills_icon" icon={faGulp} />
                Gulp
              </li>
              <li style={{ background: '#005571' }}>
                <img src={webpackImg} alt="webpack" className="skills_icon" />
                Webpack
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Skills;
