import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import NotFound from './../../scenes/NotFound';
import PrivateRoute from './../PrivateRoute';
import GuestRoute from './../GuestRoute';

import LoginPage from './../LoginPage';

import StudentPage from './../StudentPage';
import DeaneryPage from './../DeaneryPage';
import CampusWorkerPage from './../CampusWorkerPage';
import { loadCurrentUser } from './../../containers/LoginPage/actions';
import Spinner from './../../components/Spinner';
import Header from './../../components/Header'

const Rounting = () => {
  const dispatch = useDispatch();
  const { isLoading: userLoading, user, isAuthorized } = useSelector(state => state.profile);
  const isLoading = userLoading;
  const token = localStorage.getItem('token');
  useEffect(() => {
    dispatch(loadCurrentUser());
  }, [dispatch]);

  if (isLoading || (token && !isAuthorized)) {
    return <Spinner />;
  };

  return (
    <Switch>
      <GuestRoute exact path='/login' component={LoginPage} />
      <Route exact path='/404' component={NotFound} />

      <PrivateRoute path='/'>
        <div>
          <Header username={user ? user.name : undefined} />
          <main>
            <Switch>
              <Route path='/student' component={StudentPage} />
              <Route path='/deanery' component={DeaneryPage} />
              <Route path='/campusWorker' component={CampusWorkerPage} />

              <Route render={() => <Redirect to='/404' />} />
            </Switch>
          </main>
        </div>
      </PrivateRoute>

      <Route render={() => <Redirect to='/404' />} />
    </Switch>
  )
}

export default Rounting;
