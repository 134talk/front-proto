import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import handleError from 'shared/utils/errorHandler';
import { silentRefresh } from './userApi';

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
    const { response } = error;
    if (response?.status === 401)
      silentRefresh().then(({ data }) =>
        sessionStorage.setItem('token', data?.accessToken)
      );
    if (response) handleError(response?.data.errorCode);
    return Promise.reject(error);
  }
);

export default axiosInstance;
