import axios from 'axios';

const api = () => {
  const api = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');

    if (token)
      config.headers.Authorization = `Bearer ${token}`;

    return config;
  });

  return api;
}

export default api();

