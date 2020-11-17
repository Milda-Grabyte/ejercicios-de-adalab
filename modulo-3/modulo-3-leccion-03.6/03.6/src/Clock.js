import React from 'react';
import './Clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    this.updateClock = this.updateClock.bind(this);
    setInterval(this.updateClock, 1000);
  }
  
  updateClock() {
    let date = new Date();
    this.setState({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    });
  }
  render() {
    return (
      <div className='container'>
        <p className='clock'>{`${this.state.hours.toString().padStart(2, '0')} : ${this.state.minutes
          .toString()
          .padStart(2, '0')} : ${this.state.seconds.toString().padStart(2, '0')}`}</p>
      </div>
    );
  }
}

export default Clock;