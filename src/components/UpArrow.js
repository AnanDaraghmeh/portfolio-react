import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

class UpArrow extends React.Component {
  state = {
    isArrowShown: false
  };

  showUpArrow = () => {
    let y = window.scrollY;
    if (y > 800) {
      this.setState({
        isArrowShown: true
      });
    } else {
      this.setState({
        isArrowShown: false
      });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.showUpArrow);
  }

  render() {
    return (
      <>
        {this.state.isArrowShown && (
          <div>
            <Link to="about" smooth={true} className="upArrow">
              <FontAwesomeIcon icon={faArrowUp} />
            </Link>
          </div>
        )}
      </>
    );
  }
}

export default UpArrow;
