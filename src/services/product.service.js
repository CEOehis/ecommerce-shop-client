import axios from 'axios';
import config from '../config/config';

const { apiBaseUrl } = config;

export default class ProductService {
  static getFeaturedProducts() {
    return axios.get(`${apiBaseUrl}/featured`);
  }

  static getAllProducts(search = '', page = 1, limit = 12) {
    console.log(search, page, limit);
    return axios.get(
      `${apiBaseUrl}/products?page=${page}&search=${search}&limit=${limit}`
    );
  }
}
