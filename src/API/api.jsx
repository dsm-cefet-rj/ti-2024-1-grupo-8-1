import axios from 'axios';
import { link } from './API_NODE/router';

const api = axios.create({
  baseURL: 'mongodb://localhost:27017/portal_da_doutora', 
});

export default api;
