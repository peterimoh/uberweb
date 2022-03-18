import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../action/auth.action';

import { useForm } from '../../hook/useForm';
import './login.css';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const { handleChange, onSubmit, value } = useForm({
    callback: () => {
      dispatch(login(value));
    },
    initialState: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      user.isDriver ? navigate('/driver') : navigate('/rider');
    }
  }, [isAuthenticated, navigate, user]);

  return (
    <main id='login'>
      <div className='form'>
        <form onSubmit={onSubmit} noValidate>
          <h3 className='post__title'>Login</h3>

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
            sign in
          </button>
        </form>
      </div>
    </main>
  );
};
