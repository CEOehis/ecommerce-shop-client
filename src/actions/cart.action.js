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

const getCartRequest = isLoading => ({
  type: types.GET_CART,
  payload: isLoading,
});

const getCartSuccess = data => ({
  type: types.GET_CART_SUCCESS,
  payload: data,
});

const getCartError = error => ({
  type: types.GET_CART_ERROR,
  payload: error,
});

const deleteItemRequest = isLoading => ({
  type: types.DELETE_CART_ITEM,
  payload: isLoading,
});

const deleteItemSuccess = data => ({
  type: types.DELETE_CART_ITEM_SUCCESS,
  payload: data,
});

const deleteItemError = error => ({
  type: types.DELETE_CART_ITEM_ERROR,
  payload: error,
});

export const addToCart = payload => async dispatch => {
  dispatch(addToCartRequest(true));
  try {
    const cart = await CartService.addItemToCart(payload);
    dispatch(addToCartRequest(false));
    return dispatch(addToCartSuccess(cart.data.cart));
  } catch (error) {
    dispatch(addToCartRequest(false));
    return dispatch(addToCartError(error));
  }
};

export const getCart = () => async dispatch => {
  dispatch(getCartRequest(true));
  try {
    const cart = await CartService.getCart();
    dispatch(getCartRequest(false));
    return dispatch(getCartSuccess(cart.data.cart));
  } catch (error) {
    dispatch(getCartRequest(false));
    return dispatch(getCartError(error));
  }
};

export const deleteItem = itemId => async dispatch => {
  dispatch(deleteItemRequest(true));
  try {
    const cart = await CartService.deleteItemFromCart(itemId);
    dispatch(deleteItemRequest(false));
    dispatch(getCart());
    return dispatch(deleteItemSuccess(cart.data.message));
  } catch (error) {
    dispatch(deleteItemRequest(false));
    return dispatch(deleteItemError(error));
  }
};
