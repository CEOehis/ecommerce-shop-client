import * as types from '../actions/action.types';
import initialState from '../store/initialState';

const productReducer = (state = initialState.product, action) => {
  switch (action.type) {
    case types.GET_FEATURED_PRODUCTS:
      return {
        ...state,
        loading: action.payload,
      };
    case types.GET_FEATURED_PRODUCTS_SUCCESS:
      return {
        ...state,
        featured: action.payload,
      };
    case types.GET_FEATURED_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
