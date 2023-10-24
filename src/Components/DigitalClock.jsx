import React, { useEffect, useState } from 'react';
import './DigitalClock.css';

 const DigitalClock =() => {
  const [digitalClock, setDigitalClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const time = date.toLocaleTimeString([],
    { hour: '2-digit',
      minute: '2-digit' });
      setDigitalClockState(time);
    }, 1000);
  }, []);

  return (
    <div className='digital-clock'>{digitalClock}</div>
  );
}

export default DigitalClock;
