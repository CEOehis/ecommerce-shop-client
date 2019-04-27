import axios from './index.service';

export default class AuthService {
  static signUp(payload) {
    return axios.post(`/customers`, payload);
  }

  static logIn(payload) {
    return axios.post(`/customers/login`, payload);
  }

  static getProfile() {
    return axios.get(`/customer`);
  }
}
