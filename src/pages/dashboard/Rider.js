import React, { useEffect, useState } from 'react';
import { Booking } from '../../components/rider/Booking';

import './rider.css';

export const Rider = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  return (
    <main id='rider'>
      <div className='container'>
        <h2>User Dashboard</h2>

        <div className='main'>
          <h4>Your Location is:</h4>
          <p>
            Latitude: <span>{latitude}</span>
          </p>
          <p>
            Longitude: <span>{longitude}</span>
          </p>
          <div className='booking'>
            <Booking userLatitude={latitude} userLogitude={longitude} />
          </div>
        </div>
      </div>
    </main>
  );
};
