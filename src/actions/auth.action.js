/* eslint-disable import/prefer-default-export */
import * as types from './action.types';
import AuthService from '../services/auth.service';
import axios from '../services/index.service';

const signUpRequest = isLoading => ({
  type: types.SIGN_UP,
  payload: isLoading,
});

const signUpSuccess = data => ({
  type: types.SIGN_UP_SUCCESS,
  payload: data,
});

const signUpError = error => ({
  type: types.SIGN_UP_ERROR,
  payload: error,
});

const logInRequest = isLoading => ({
  type: types.LOG_IN,
  payload: isLoading,
});

const logInSuccess = data => ({
  type: types.LOG_IN_SUCCESS,
  payload: data,
});

const logInError = error => ({
  type: types.LOG_IN_ERROR,
  payload: error,
});

export const signUp = payload => async dispatch => {
  dispatch(signUpRequest(true));
  try {
    const customer = await AuthService.signUp(payload);
    dispatch(signUpRequest(false));
    localStorage.setItem('token', customer.data.token);
    // eslint-disable-next-line dot-notation
    axios.defaults.headers.common['Authorization'] = `Bearer ${
      customer.data.token
    }`;
    return dispatch(signUpSuccess(customer.data.customer));
  } catch (error) {
    dispatch(signUpRequest(false));
    return dispatch(signUpError(error));
  }
};

export const logIn = payload => async dispatch => {
  dispatch(logInRequest(true));
  try {
    const customer = await AuthService.logIn(payload);
    dispatch(logInRequest(false));
    localStorage.setItem('token', customer.data.token);
    // eslint-disable-next-line dot-notation
    axios.defaults.headers.common['Authorization'] = `Bearer ${
      customer.data.token
    }`;
    return dispatch(logInSuccess(customer.data.customer));
  } catch (error) {
    dispatch(logInRequest(false));
    return dispatch(logInError(error));
  }
};

export const signOut = () => {
  localStorage.removeItem('token');
  return {
    type: types.SIGN_OUT,
  };
};

export const setLoggedInUser = () => async dispatch => {
  dispatch({ type: types.FETCHING_USER_PROFILE, payload: true });
  try {
    const userProfile = await AuthService.getProfile();
    dispatch({ type: types.FETCHING_USER_PROFILE, payload: false });
    dispatch({
      type: types.SET_LOGGED_IN_USER,
      payload: userProfile.data.customer,
    });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_PROFILE_ERROR' });
    dispatch({ type: types.SET_LOGGED_IN_USER, payload: {} });
  }
};
