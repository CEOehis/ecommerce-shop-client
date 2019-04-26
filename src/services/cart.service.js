import axios from 'axios';
import config from '../config/config';

const { apiBaseUrl } = config;

export default class CartService {
  static addItemToCart(payload) {
    return axios.post(`${apiBaseUrl}/cart`, payload);
  }
}
