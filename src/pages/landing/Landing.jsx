import React from 'react';
import { Link } from 'react-router-dom';
import { DriverForm } from '../../components/landing/DriverForm';
import { UserForm } from '../../components/landing/UserForm';
import './landing.css';

const Landing = () => {
  return (
    <main id='landing'>
      <div className='title'>
        <h3>Registration</h3>
      </div>

      <div className='formContainer'>
        <UserForm />
        <DriverForm />
      </div>

      <footer>
        <p>Already Registered? </p>
        <center>
          <Link to='login'>Login</Link>
        </center>
      </footer>
    </main>
  );
};

export default Landing;
