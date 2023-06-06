import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosConfig: AxiosRequestConfig = {
  timeout: 3000,
  baseURL: process.env.REACT_APP_SERVER,
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    config = { ...config, withCredentials: true };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
