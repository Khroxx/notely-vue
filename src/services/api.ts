import axios from 'axios';

const apiClient = axios.create({
  // adjust if backend is online
  baseURL: 'http://0.0.0.0:8000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiClient;                       