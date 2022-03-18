import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

export const DriverRoute = ({ children }) => {
  return <>{children}</>;
};

export const RiderRoute = ({ children }) => {
  return <>{children}</>;
};

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return isAuthenticated ? (
    user.isDriver ? (
      <DriverRoute children={children} />
    ) : (
      <RiderRoute children={children} />
    )
  ) : (
    <Navigate to='/login' />
  );
};

export default PrivateRoute;
