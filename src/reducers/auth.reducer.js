import isEmpty from 'lodash/isEmpty';
import * as types from '../actions/action.types';
import initialState from '../store/initialState';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case types.SET_LOGGED_IN_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case types.SIGN_UP:
    case types.LOG_IN:
      return {
        ...state,
        loading: action.payload,
      };
    case types.SIGN_UP_SUCCESS:
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case types.SIGN_UP_ERROR:
    case types.LOG_IN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
