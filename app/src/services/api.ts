import axios from 'axios';
export const baseUrl = 'http://172.16.3.254:5000/api/v1';

export const API = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  async (config: any) => {
    // // Do something before request is sent
    // if (store.getState().userReducer.isLoggedIn) {
    //   config.headers['Authorization'] = `Bearer ${
    //     store.getState().userReducer.accessToken
    //   }`;
    // }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    throw error;
  },
);
