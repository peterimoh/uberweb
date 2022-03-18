import React from 'react';

export const Update = ({ user }) => {
  return (
    <div>
      <p>first name: {user.firstName}</p>
      <p>last name: {user.lastName}</p>
      <br />
      <h5>Location:</h5>
      <p>lat(x): {user.latitude}</p>
      <p>long(y): {user.longitude}</p>
    </div>
  );
};
