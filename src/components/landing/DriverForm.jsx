import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../hook/useForm';
import { register } from '../../action/auth.action';

export const DriverForm = () => {
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.auth);

  let navigate = useNavigate();

  const { handleChange, onSubmit, value } = useForm({
    callback: () => {
      dispatch(register(value));
    },
    initialState: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isDriver: true,
      isAvailable: true,
    },
  });

  useEffect(() => {
    isSuccess && navigate('/login');
  }, [isSuccess, navigate]);

  return (
    <div className='form'>
      <form onSubmit={onSubmit} noValidate>
        <h5 className='post__title'>Register as a Driver</h5>

        <input
          label='First Name'
          placeholder='First Name'
          name='firstName'
          type='text'
          value={value.firstName}
          onChange={handleChange}
        />

        <input
          label='Last Name'
          placeholder='Last Name'
          name='lastName'
          type='text'
          value={value.lastName}
          onChange={handleChange}
        />

        <input
          label='Email'
          placeholder='Email'
          name='email'
          type='email'
          value={value.email}
          onChange={handleChange}
        />

        <input
          label='Password'
          placeholder='Password'
          name='password'
          type='password'
          value={value.password}
          onChange={handleChange}
        />

        <button type='submit' className='btn'>
          Register
        </button>
      </form>
    </div>
  );
};
