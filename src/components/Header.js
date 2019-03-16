import React from 'react';
import { Link } from 'react-scroll';

class Header extends React.Component {
  state = {
    mobileMenuOpen: false,
    togglerLineOpen: false,
    isOpaque: false,
    typeWriterTxt: '',
    cursor: <span className="js-cursor" />
  };

  opaqueHeader = () => {
    let y = window.scrollY;
    if (y > 50) {
      this.setState({
        isOpaque: true
      });
    } else {
      this.setState({
        isOpaque: false
      });
    }
  };

  typeWriter = (txt, speed) => {
    let index = 0;
    const timer = setInterval(() => {
      this.setState({
        typeWriterTxt: txt.substr(0, index++)
      });
      if (index > txt.length) {
        clearInterval(timer);
      }
    }, speed);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.opaqueHeader);
    this.typeWriter("HEY! I'M ANAN.", 100);
  }

  toggleMobileMenu = () => {
    this.setState(prevState => {
      return {
        mobileMenuOpen: !prevState.mobileMenuOpen,
        togglerLineOpen: !prevState.togglerLineOpen
      };
    });
  };

  render() {
    const { mobileMenuOpen, togglerLineOpen, isOpaque } = this.state;
    return (
      <div>
        <header className={`header ${isOpaque && 'opaque'}`}>
          <div onClick={this.toggleMobileMenu} className="toggler">
            <span
              className={`${togglerLineOpen &&
                'open'} toggler_line toggler_line-top`}
            />
            <span
              className={`${togglerLineOpen &&
                'open'} toggler_line toggler_line-middle`}
            />
            <span
              className={`${togglerLineOpen &&
                'open'} toggler_line toggler_line-bottom`}
            />
          </div>
          <Link to="about" smooth={true}>
            <span>
              {this.state.typeWriterTxt}
              {this.state.cursor}
            </span>
          </Link>
          <div className="navMenu-lg">
            <Link to="about" smooth={true} className="navMenu_link-lg">
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              offset={-50}
              className="navMenu_link-lg"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              offset={-60}
              className="navMenu_link-lg"
            >
              Projects
            </Link>
            <Link to="contact" smooth={true} className="navMenu_link-lg">
              Contact
            </Link>
          </div>
        </header>
        <nav className={`navMenu ${mobileMenuOpen && 'navMenu-open'}`}>
          <Link
            onClick={this.toggleMobileMenu}
            className="navMenu_link"
            to="about"
            smooth={true}
            style={{ marginTop: '4.1rem' }}
          >
            About
          </Link>
          <Link
            onClick={this.toggleMobileMenu}
            className="navMenu_link"
            to="skills"
            offset={-50}
            smooth={true}
          >
            Skills
          </Link>
          <Link
            onClick={this.toggleMobileMenu}
            className="navMenu_link"
            to="projects"
            offset={-60}
            smooth={true}
          >
            Projects
          </Link>
          <Link
            onClick={this.toggleMobileMenu}
            className="navMenu_link"
            to="contact"
            smooth={true}
          >
            Contact
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
