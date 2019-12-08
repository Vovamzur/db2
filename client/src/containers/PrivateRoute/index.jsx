import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { isAuthorized } = useSelector((state) => state.profile);

  return isAuthorized ? <Route {...props } /> : <Redirect to='/login' />;
};

export default PrivateRoute;
