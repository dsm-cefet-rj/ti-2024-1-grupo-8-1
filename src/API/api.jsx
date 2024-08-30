import axios from 'axios';

const api = axios.create({
  baseURL: 'mongodb://localhost:27017/portal_da_doutora', 
});

export default api;
