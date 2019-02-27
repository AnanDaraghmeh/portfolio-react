import React from 'react';
import { Link } from 'react-scroll';

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
      <div>
        {this.state.isArrowShown && (
          <Link to="about" className="upArrow" smooth={true}>
            Up
          </Link>
        )}
      </div>
    );
  }
}

export default UpArrow;
