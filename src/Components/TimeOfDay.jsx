import React from 'react';
import { IoIosSunny, IoIosMoon } from 'react-icons/io';
import morning from '../assets/morning.jpg';
import day from '../assets/day.jpg';
import night from '../assets/night.jpg';
import './TimeOfDay.css';
const TimeOfDay = () => {
  const currentHour = new Date().getHours();
  let greeting = '';
  let imageSrc = '';
  let icon = '';

  if (currentHour >= 0 && currentHour < 12) {
    greeting = 'GOOD MORNING, IT\'S CURRENTLY';
    imageSrc= morning;
    icon = <IoIosSunny size={32} color="yellow" />;
  } else if (currentHour >= 12 && currentHour < 20) {
    greeting = 'GOOD AFTERNOON, IT\'S CURRENTLY';
    imageSrc = day;
    icon = <IoIosMoon size={32} color="gray" />;
  } else {
    greeting = 'GOOD EVENING, IT\'S CURRENTLY';
    imageSrc = night;
    icon = <IoIosMoon size={32} color="gray" />;
  }

  return (
    <div>
      <p className='greeting'> {icon} {greeting}</p>
      <img src={imageSrc} />
    </div>
  );
}

export default TimeOfDay;
