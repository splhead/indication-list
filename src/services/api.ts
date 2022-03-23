import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.3.2:3000',
});
