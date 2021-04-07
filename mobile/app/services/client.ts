import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  responseType: 'json'
});

export { apiClient };
