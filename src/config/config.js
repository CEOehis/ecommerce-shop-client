const config = {
  apiBaseUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://ecommerce-turing-core.herokuapp.com/api/v1'
      : 'http://localhost:5000/api/v1',
  imageBaseUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://cloudinaryLink'
      : 'http://localhost:2000/images',
};

export default config;
