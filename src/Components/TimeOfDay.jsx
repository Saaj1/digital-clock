import { IoIosSunny, IoIosMoon } from 'react-icons/io';
import morning from '../assets/morning.jpg';
import day from '../assets/day.jpg';
import night from '../assets/night.jpg';
import './TimeOfDay.css';



/**
 * An object that contains all values
 * associated with things to render on the screen
 *
 * @typedef {object} Assets
 * @prop {string} imageSrc
 * @prop {JSX.Element} icon
 * @prop {string} greeting
 */

/**
 * @param {Date} date
 * @returns {Assets}
 *
 */
const calcAssets = (date) => {
  const currentTime = date.getHours();

  if (currentTime  < 12) {
    return {
      imageSrc: morning,
      icon: <IoIosSunny size={32} color="yellow" />,
      greeting: 'GOOD MORNING, IT\'S CURRENTLY'
    };
  }

  if (currentTime < 20) {
    return {
      imageSrc: day,
      icon: <IoIosMoon size={32} color="gray" />,
      greeting: 'GOOD AFTERNOON, IT\'S CURRENTLY'
    };
  }

    return {
      imageSrc: night,
      icon: <IoIosMoon size={32} color="gray" />,
      greeting: 'GOOD EVENING, IT\'S CURRENTLY'
    };

}
const TimeOfDay = () => {
 const{ imageSrc, icon, greeting } = calcAssets(new Date());

  return (
    <div>
      <p className='greeting'> {icon} {greeting}</p>
      <img src={imageSrc} />
    </div>
  );
}

export default TimeOfDay;
