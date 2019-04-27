const config = {
  apiBaseUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://ecommerce-turing-core.herokuapp.com/api/v1'
      : 'http://localhost:5000/api/v1',
  imageBaseUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://res.cloudinary.com/do8buqscj/image/upload/v1556396547/turing_images'
      : 'http://localhost:2000/images',
};

export default config;
