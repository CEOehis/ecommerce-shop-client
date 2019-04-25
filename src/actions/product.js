/* eslint-disable import/prefer-default-export */
import * as types from './action.types';
import ProductService from '../services/product.service';

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

const getAllProductsRequest = isLoading => ({
  type: types.GET_ALL_PRODUCTS,
  payload: isLoading,
});

const getAllProductsSuccess = data => ({
  type: types.GET_ALL_PRODUCTS_SUCCESS,
  payload: data,
});

const getAllProductsError = error => ({
  type: types.GET_ALL_PRODUCTS_ERROR,
  payload: error,
});

export const getFeaturedProducts = () => async dispatch => {
  dispatch(getFeaturedProductsRequest(true));
  try {
    const products = await ProductService.getFeaturedProducts();
    dispatch(getFeaturedProductsRequest(false));
    return dispatch(getFeaturedProductsSuccess(products.data.featuredProducts));
  } catch (error) {
    dispatch(getFeaturedProductsRequest(false));
    return dispatch(getFeaturedProductsError(error));
  }
};

export const getAllProducts = (search, page, limit) => async dispatch => {
  dispatch(getAllProductsRequest(true));
  try {
    const products = await ProductService.getAllProducts(search, page, limit);
    dispatch(getAllProductsRequest(false));
    return dispatch(getAllProductsSuccess(products.data));
  } catch (error) {
    dispatch(getAllProductsRequest(false));
    return dispatch(getAllProductsError(error));
  }
};
