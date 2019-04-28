import isLoggedIn from '../utils/isLoggedIn';

const initialState = {
  product: {
    loading: false,
    featured: [],
    products: [],
    meta: {
      currentPage: 1,
      currentPageSize: 0,
      totalPages: 0,
      totalRecords: 0,
    },
    error: '',
    singleProduct: null, // final data shape will be an object
  },
  cart: {
    loading: false,
    cart: [],
    error: '',
    order: {},
    charge: {},
  },
  auth: {
    isAuthenticated: isLoggedIn(),
    loading: false,
    user: {},
    error: '',
  },
};

export default initialState;
