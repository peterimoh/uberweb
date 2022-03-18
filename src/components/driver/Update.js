import React from 'react';
import { useDispatch } from 'react-redux';

import { updateBooking } from '../../action/driver.action';

export const Update = ({ user }) => {
  const dispatch = useDispatch();

  const setIsBooked = {
    isBooked: false,
  };
  const handleBooking = (driverId) => {
    dispatch(updateBooking(driverId, setIsBooked));
  };

  return (
    <div>
      <p>first name: {user.firstName}</p>
      <p>last name: {user.lastName}</p>
      <br />
      <h5>Location:</h5>
      <p>lat(x): {user.latitude}</p>
      <p>long(y): {user.longitude}</p>
      <br />
      {user.isBooked ? (
        <button onClick={() => handleBooking(user._id)}>End Trip</button>
      ) : (
        <button disabled>No Order</button>
      )}
    </div>
  );
};
