import Cookies from 'js-cookie';

import { SET_USER, SET_IS_LOADING } from './action.types';
import * as authService from './../../services/aut.service';

const setToken = token => localStorage.setItem('token', token);
const clearToken = () => localStorage.removeItem('token');
const setRole = role => localStorage.setItem('role', role);
const clearRole = () => localStorage.removeItem('role');

const setUser = user => ({
  type: SET_USER,
  payload: user,
});

const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});

const setAuthData = (user, token) => (dispatch) => {
  setToken(token);
  setRole(user.role);
  dispatch(setUser(user));
};

const retrieveTokenFromCookie = () => {
  const token = Cookies.get('token');

  if (token) {
    localStorage.setItem('token', token);
    Cookies.remove('token');
  }
};

const handleAuthResponse = authResponsePromise => async (dispatch, getRootState) => {
  try {
    const { user, token } = await authResponsePromise;
    setAuthData(user, token)(dispatch, getRootState);
  } catch(err) {
    console.error(err);
  }
} 

export const loadCurrentUser = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  retrieveTokenFromCookie();

  try {
    const user = await authService.getCurrentUser();
    dispatch(setUser(user));
  } catch(err) {
    dispatch(setUser(null));
  } finally {
    dispatch(setIsLoading(false));
  }
}

export const login = (request) => handleAuthResponse(authService.login(request));

export const logout = () => dispatch => {
  clearToken();
  clearRole();
  dispatch(setUser(null));
};
