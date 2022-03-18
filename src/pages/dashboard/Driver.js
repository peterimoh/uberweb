import React from 'react';
import { useSelector } from 'react-redux';

import { Availability } from '../../components/driver/Availability';
import { Update } from '../../components/driver/Update';
import './driver.css';

const Driver = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <main id='driver'>
      <div className='driverContainer'>
        <h2>Driver Dashboard</h2>
        <div className='availabilty'>
          <Availability user={user} />
        </div>
        <div className='details'>
          <Update user={user} />
        </div>
      </div>
    </main>
  );
};

export { Driver };
