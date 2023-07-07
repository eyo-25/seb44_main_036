import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const loginInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
