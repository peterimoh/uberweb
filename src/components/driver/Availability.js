import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvailability } from '../../action/driver.action';

import { useForm } from '../../hook/useForm';

export const Availability = ({ user }) => {
  const [checked, setChecked] = useState(user.isAvailable);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const dispatch = useDispatch();

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      !checked ? setLatitude(position.coords.latitude) : setLatitude(0);
      !checked ? setLongitude(position.coords.longitude) : setLongitude(0);
    });
  };

  useEffect(getLocation, [checked]);

  const handleCheck = (e) => {
    setChecked(!checked);
    value.isAvailable = !checked;
    value.latitude = latitude;
    value.longitude = longitude;

    onSubmit(e);
  };

  const { handleChange, onSubmit, value } = useForm({
    callback: () => {
      dispatch(updateAvailability(user._id, value));
      // console.table(value);
    },
    initialState: {
      isAvailable: checked,
      latitude: latitude,
      longitude: longitude,
    },
  });

  return (
    <>
      {checked && <p>Changed</p>}
      <div className='available'>
        <p> Availability:</p>
        <form onSubmit={onSubmit} noValidate>
          <label className='switch'>
            <input
              type='checkbox'
              onChange={handleCheck}
              checked={checked}
              name='isAvailable'
              value={value.isAvailable}
            />
          </label>
        </form>
      </div>
    </>
  );
};
