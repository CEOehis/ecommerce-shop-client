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
  },
};

export default initialState;
