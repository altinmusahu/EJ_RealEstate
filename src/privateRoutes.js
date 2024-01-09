import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ path, element }) => {
  const token = useSelector((state) => state.user.token);

  return token ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
