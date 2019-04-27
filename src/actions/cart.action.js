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

const updateShippingRequest = isLoading => ({
  type: types.UPDATE_SHIPPING,
  payload: isLoading,
});

const updateShippingSuccess = data => ({
  type: types.UPDATE_SHIPPING_SUCCESS,
  payload: data,
});

const updateShippingError = error => ({
  type: types.UPDATE_SHIPPING_ERROR,
  payload: error,
});

const createOrderRequest = isLoading => ({
  type: types.CREATE_ORDER,
  payload: isLoading,
});

const createOrderSuccess = data => ({
  type: types.CREATE_ORDER_SUCCESS,
  payload: data,
});

const createOrderError = error => ({
  type: types.CREATE_ORDER_ERROR,
  payload: error,
});

const payOrderRequest = isLoading => ({
  type: types.PAY_WITH_STRIPE,
  payload: isLoading,
});

const payOrderSuccess = data => ({
  type: types.PAY_WITH_STRIPE_SUCCESS,
  payload: data,
});

const payOrderError = error => ({
  type: types.PAY_WITH_STRIPE_ERROR,
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

export const updateShipping = payload => async dispatch => {
  dispatch(updateShippingRequest(true));
  try {
    const updatedShipping = await CartService.updateShippingInfo(payload);
    dispatch(updateShippingRequest(false));
    return dispatch(updateShippingSuccess(updatedShipping.data.customer));
  } catch (error) {
    dispatch(updateShippingRequest(false));
    return dispatch(updateShippingError(error));
  }
};

export const createOrder = payload => async dispatch => {
  dispatch(createOrderRequest(true));
  try {
    const order = await CartService.createOrder(payload);
    dispatch(createOrderRequest(false));
    return dispatch(createOrderSuccess(order.data.order));
  } catch (error) {
    dispatch(createOrderRequest(true));
    return dispatch(createOrderError(error));
  }
};

export const payOrder = payload => async dispatch => {
  dispatch(payOrderRequest(true));
  try {
    const paid = await CartService.payWithStripe(payload);
    dispatch(payOrderRequest(false));
    dispatch(getCart());
    return dispatch(payOrderSuccess(paid.data.charge));
  } catch (error) {
    dispatch(payOrderRequest(false));
    return dispatch(payOrderError(error));
  }
};
