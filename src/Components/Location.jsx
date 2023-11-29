import { useState, useEffect } from 'react';

/**
 * React component that retrieves the user's location using the browser's geolocation API and returns the city and country.
 * @returns {JSX.Element}
 */
const Location = () => {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          reverseGeocode(latitude, longitude);
        },
        (error) => {
          console.error('Error getting geolocation:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const reverseGeocode = async (latitude, longitude) => {
    const apiKey = import.meta.env.VITE_SOME_KEY
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.name && data.sys && data.sys.country) {
        setCity(data.name);
        setCountry(data.sys.country);
      } else {
        console.error('Error fetching address:', data);
      }
    } catch (error) {
      console.error('Error fetching address:', error.message);
    }
  };

  return (
    <div>
      {location ? (
        <div>
          <p>
            Your Location: {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
          </p>
          {city && country ? (
            <p> {city},  {country}</p>
          ) : (
            <p>City and country not available</p>
          )}
        </div>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default Location;
