import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Change this to match your backend URL
});

// Automatically add token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = Bearer ${token};
  return req;
});

export default API;