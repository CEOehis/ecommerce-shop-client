import axios from './index.service';

export default class CartService {
  static addItemToCart(payload) {
    return axios.post(`/cart`, payload);
  }

  static getCart() {
    return axios.get(`/cart`);
  }

  static deleteItemFromCart(itemId) {
    return axios.delete(`/cart/${itemId}`);
  }

  static updateShippingInfo(payload) {
    return axios.put(`/customer/billing-info`, payload);
  }

  static createOrder(payload) {
    return axios.post(`/orders`, payload);
  }

  static payWithStripe(payload) {
    return axios.post(`/stripe`, payload);
  }
}
