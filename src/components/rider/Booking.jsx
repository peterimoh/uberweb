import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDriver } from '../../action/driver.action';
import { useForm } from '../../hook/useForm';

export const Booking = ({ userLatitude, userLogitude }) => {
  const dispatch = useDispatch();
  const { driver, loading, error } = useSelector((state) => state.driver);
  const [driverDetails, setDriverDetails] = useState(null);
  const [distance, setDistance] = useState(0);

  const distanceCalculator = (lat1, lon1, lat2, lon2) => {
    const outcome = Math.sqrt(
      Math.pow(lat2 - lat1, 2) + Math.pow(lon2 - lon1, 2)
    );
    setDistance(outcome);
    // return;
  };

  const { handleChange, onSubmit, value } = useForm({
    callback: async () => {
      dispatch(getDriver(true));

      if (driver.length > 0) {
        distanceCalculator(
          userLatitude,
          userLogitude,
          driver[0].latitude,
          driver[0].longitude
        );
      }
    },
    initialState: {
      threshold: 10,
    },
  });

  console.log(distance);

  return (
    <>
      <div>
        <div>
          <form onSubmit={onSubmit}>
            <div className='input'>
              <label htmlFor='threshold'>Threshold:</label>
              <input
                placeholder='threshold'
                name='threshold'
                type='number'
                value={value.threshold}
                onChange={handleChange}
              />
            </div>
            {distance > value.threshold ? (
              <>
                <button type='submit' disabled>
                  Place Order
                </button>
                <br />
                <small style={{ color: 'tomato' }}>
                  You cannot book this ride
                </small>
              </>
            ) : (
              <button type='submit'>Place Order</button>
            )}
          </form>
          <br />
          {distance !== 0 && <p>Distance: {distance}</p>}
        </div>

        {distance < value.threshold && (
          <div className='bookingdisplay'>
            {driver.length !== 0 &&
              driver.map((x) => {
                return (
                  <ul>
                    <li>
                      Name: `{x.firstName} {x.lastName}`{' '}
                      <li>lat: {x.latitude}</li>
                      <li>lat: {x.longitude}</li>
                    </li>
                  </ul>
                );
              })}
            <button>Book</button>
          </div>
        )}
      </div>
    </>
  );
};
