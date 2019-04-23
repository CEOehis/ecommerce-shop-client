/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as types from './action.types';
import config from '../config/config';

const { apiBaseUrl } = config;

const getFeaturedProductsRequest = isLoading => ({
  type: types.GET_FEATURED_PRODUCTS,
  payload: isLoading,
});

const getFeaturedProductsSuccess = data => ({
  type: types.GET_FEATURED_PRODUCTS_SUCCESS,
  payload: data,
});

const getFeaturedProductsError = error => ({
  type: types.GET_FEATURED_PRODUCTS_ERROR,
  payload: error,
});

export const getFeaturedProducts = () => async dispatch => {
  dispatch(getFeaturedProductsRequest(true));
  try {
    const products = await axios.get(`${apiBaseUrl}/featured`);
    dispatch(getFeaturedProductsRequest(false));
    return dispatch(getFeaturedProductsSuccess(products.data.featuredProducts));
  } catch (error) {
    return dispatch(getFeaturedProductsError(error));
  }
};
