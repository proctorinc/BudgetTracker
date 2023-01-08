import Axios from "axios";

import { API_URL } from "@/config";

const authRequestInterceptor = (config) => {
  config.headers.Accept = "application/json";
  return config;
};

export const axios = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const setCSRFTokenHeader = (csrfToken) => {
  axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;
};

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    return Promise.reject(error);
  }
);
