import * as types from '../actions/action.types';
import initialState from '../store/initialState';

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
    case types.GET_CART:
      return {
        ...state,
        loading: action.payload,
      };
    case types.ADD_TO_CART_SUCCESS:
    case types.GET_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      };
    case types.ADD_TO_CART_ERROR:
    case types.GET_CART_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
