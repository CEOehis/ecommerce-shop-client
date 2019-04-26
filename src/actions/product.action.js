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

const getAllProductsInCategoryRequest = isLoading => ({
  type: types.GET_ALL_PRODUCTS_IN_CATEGORY,
  payload: isLoading,
});

const getAllProductsInCategorySuccess = data => ({
  type: types.GET_ALL_PRODUCTS_IN_CATEGORY_SUCCESS,
  payload: data,
});

const getAllProductsInCategoryError = error => ({
  type: types.GET_ALL_PRODUCTS_IN_CATEGORY_ERROR,
  payload: error,
});

const getAllProductsInDepartmentRequest = isLoading => ({
  type: types.GET_ALL_PRODUCTS_IN_DEPARTMENT,
  payload: isLoading,
});

const getAllProductsInDepartmentSuccess = data => ({
  type: types.GET_ALL_PRODUCTS_IN_DEPARTMENT_SUCCESS,
  payload: data,
});

const getAllProductsInDepartmentError = error => ({
  type: types.GET_ALL_PRODUCTS_IN_DEPARTMENT_ERROR,
  payload: error,
});

const getProductDetailsRequest = isLoading => ({
  type: types.GET_PRODUCT_DETAILS,
  payload: isLoading,
});

const getProductDetailsSuccess = data => ({
  type: types.GET_PRODUCT_DETAILS_SUCCESS,
  payload: data,
});

const getProductDetailsError = error => ({
  type: types.GET_PRODUCT_DETAILS_ERROR,
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

export const getAllProductsInCategory = (
  category,
  page,
  limit
) => async dispatch => {
  dispatch(getAllProductsInCategoryRequest(true));
  try {
    const products = await ProductService.getAllProductsInCategory(
      category,
      page,
      limit
    );
    dispatch(getAllProductsInCategoryRequest(false));
    return dispatch(getAllProductsInCategorySuccess(products.data));
  } catch (error) {
    dispatch(getAllProductsInCategoryRequest(false));
    return dispatch(getAllProductsInCategoryError(error));
  }
};

export const getAllProductsInDepartment = (
  department,
  page,
  limit
) => async dispatch => {
  dispatch(getAllProductsInDepartmentRequest(true));
  try {
    const products = await ProductService.getAllProductsInDepartment(
      department,
      page,
      limit
    );
    dispatch(getAllProductsInDepartmentRequest(false));
    return dispatch(getAllProductsInDepartmentSuccess(products.data));
  } catch (error) {
    dispatch(getAllProductsInDepartmentRequest(false));
    return dispatch(getAllProductsInDepartmentError(error));
  }
};

export const getProductDetails = productId => async dispatch => {
  dispatch(getProductDetailsRequest(true));
  try {
    const product = await ProductService.getProductDetails(productId);
    dispatch(getProductDetailsRequest(false));
    return dispatch(getProductDetailsSuccess(product.data.product));
  } catch (error) {
    dispatch(getProductDetailsRequest(false));
    return dispatch(getProductDetailsError(error));
  }
};
