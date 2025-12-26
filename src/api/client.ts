// src/api/client.ts

import axios from 'axios';
import { BACKEND_URL } from '../utils/env';

export const apiClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

// Optional: response interceptor (safe logging)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      'API error:',
      error?.response?.status,
      error?.response?.data || error.message
    );
    return Promise.reject(error);
  }
);
