import axios from 'axios';
import config from '../config/config';

const { apiBaseUrl } = config;

export default class AuthService {
  static signUp(payload) {
    return axios.post(`${apiBaseUrl}/customers`, payload);
  }

  static logIn(payload) {
    return axios.post(`${apiBaseUrl}/customers/login`, payload);
  }

  static getProfile() {
    return axios.get(`${apiBaseUrl}/customer`);
  }
}
