import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const GuestRoute = props => {
  const { isAuthorized, user } = useSelector(state => state.profile);

  return isAuthorized ? <Redirect to={user.login} /> : <Route {...props} />;
}

export default GuestRoute;
