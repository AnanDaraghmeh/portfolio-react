import React from 'react';
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer section" id="contact">
        <a
          className="link link-inverted"
          href="https://github.com/AnanDaraghmeh?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> Github Profile
        </a>
        <ContactForm />
      </footer>
    );
  }
}

export default Footer;
