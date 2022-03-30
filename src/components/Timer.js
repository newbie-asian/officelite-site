import React from 'react';
import { useState } from 'react';

const Timer = () => {
  const [isDate, setDate] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const future = new Date('Nov 04, 2022 08:00:00');

  const futureDate = future.getTime();

  const interval = setInterval(() => {
    const currentDate = new Date().getTime();

    let intervalTime = futureDate - currentDate;

    let days = Math.floor(intervalTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((intervalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((intervalTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((intervalTime % (1000 * 60)) / 1000);

    isDate.days !== days && setDate((prevState) => ({ ...prevState, days: days }));
    isDate.hours !== hours && setDate((prevState) => ({ ...prevState, hours: hours }));
    isDate.minutes !== minutes && setDate((prevState) => ({ ...prevState, minutes: minutes }));
    isDate.seconds !== seconds && setDate((prevState) => ({ ...prevState, seconds: seconds }));

    if (intervalTime < 0) {
      clearInterval(interval);
    }
  }, 1000);

  return (
    <div className="text-white py-16 lg:text-left">
      <h3 className="font-kumbh-bold uppercase text-md mb-6">
        Coming <span className="text-blue">{`${future.getDate()} ${future.getMonth() === 10 ? 'Nov' : null} ${future.getFullYear()}`}</span>
      </h3>

      <div className="flex justify-center gap-2">
        <div className="timer-container">
          <p className="timer__num">{isDate.days}</p>
          <span className="timer__format">days</span>
        </div>
        <div className="timer-container">
          <p className="timer__num">{isDate.hours}</p>
          <span className="timer__format">hours</span>
        </div>
        <div className="timer-container">
          <p className="timer__num">{isDate.minutes}</p>
          <span className="timer__format">min</span>
        </div>
        <div className="timer-container">
          <p className="timer__num">{isDate.seconds}</p>
          <span className="timer__format">sec</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
