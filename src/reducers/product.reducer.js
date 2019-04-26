import * as types from '../actions/action.types';
import initialState from '../store/initialState';

const productReducer = (state = initialState.product, action) => {
  switch (action.type) {
    case types.GET_FEATURED_PRODUCTS:
    case types.GET_ALL_PRODUCTS:
    case types.GET_ALL_PRODUCTS_IN_CATEGORY:
    case types.GET_ALL_PRODUCTS_IN_DEPARTMENT:
      return {
        ...state,
        loading: action.payload,
      };
    case types.GET_FEATURED_PRODUCTS_SUCCESS:
      return {
        ...state,
        featured: action.payload,
      };
    case types.GET_ALL_PRODUCTS_SUCCESS:
    case types.GET_ALL_PRODUCTS_IN_CATEGORY_SUCCESS:
    case types.GET_ALL_PRODUCTS_IN_DEPARTMENT_SUCCESS:
      return {
        ...state,
        products: action.payload.products.rows,
        meta: action.payload.meta,
      };
    case types.GET_FEATURED_PRODUCTS_ERROR:
    case types.GET_ALL_PRODUCTS_ERROR:
    case types.GET_ALL_PRODUCTS_IN_CATEGORY_ERROR:
    case types.GET_ALL_PRODUCTS_IN_DEPARTMENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
