import axios from 'axios';
import config from '../config/config';

const { apiBaseUrl } = config;

const instance = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
});

export default instance;
