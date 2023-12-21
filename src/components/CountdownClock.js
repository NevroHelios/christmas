// CountdownClock.js

import React from 'react';
import Countdown from 'react-countdown';

const CountdownClock = () => {
  const targetDate = new Date('2023-12-25T00:00:00'); // Adjust the target date for your countdown

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Countdown is over!</span>;
    } else {
      return (
        <div id="countdown-clock" className="d-flex justify-content-center">
          <div className="time d-flex flex-column align-items-center">
            <span className="display-4">{days}</span>
            <span className="label">Days</span>
          </div>
          <div className="time d-flex flex-column align-items-center">
            <span className="display-4">{hours}</span>
            <span className="label">Hours</span>
          </div>
          <div className="time d-flex flex-column align-items-center">
            <span className="display-4">{minutes}</span>
            <span className="label">Minutes</span>
          </div>
          <div className="time d-flex flex-column align-items-center">
            <span className="display-4">{seconds}</span>
            <span className="label">Seconds</span>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownClock;