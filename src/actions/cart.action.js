/* eslint-disable import/prefer-default-export */
import * as types from './action.types';
import CartService from '../services/cart.service';

const addToCartRequest = isLoading => ({
  type: types.ADD_TO_CART,
  payload: isLoading,
});

const addToCartSuccess = data => ({
  type: types.ADD_TO_CART_SUCCESS,
  payload: data,
});

const addToCartError = error => ({
  type: types.ADD_TO_CART_ERROR,
  payload: error,
});

export const addToCart = payload => async dispatch => {
  dispatch(addToCartRequest(true));
  try {
    console.log('payload', payload);
    const cart = await CartService.addItemToCart(payload);
    dispatch(addToCartRequest(false));
    return dispatch(addToCartSuccess(cart.data.cart));
  } catch (error) {
    dispatch(addToCartRequest(false));
    return dispatch(addToCartError(error));
  }
};
