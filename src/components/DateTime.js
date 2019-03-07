import React from 'react';
import { getTimeAndDate } from '../assets/getTimeAndDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: ''
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: getTimeAndDate().d });
      this.setState({ time: getTimeAndDate().t });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date, time } = this.state;
    return (
      <div className="date-time-container">
        {date && time ? (
          <div>
            <span className="date">{date}</span>
            <span className="time">{time}</span>
          </div>
        ) : (
          <div>
            <span className="date">
              <FontAwesomeIcon
                icon={faClock}
                size="lg"
                style={{ marginTop: '10px' }}
              />
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default DateTime;
