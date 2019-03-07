import React from 'react';
import { getTimeAndDate } from '../assets/getTimeAndDate';

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
      <div style={{ minHeight: '3rem' }}>
        <span className="date">{date}</span>
        <span className="time">{time}</span>
      </div>
    );
  }
}

export default DateTime;
