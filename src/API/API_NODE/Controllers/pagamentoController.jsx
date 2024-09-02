import axios from 'axios';

// URL base do seu servidor Express
const API_URL = 'http://localhost:3006/api/pagamentos';

export const pagamentoController = {
  getAll: async () => {
    const resposta = await axios.get(API_URL);
    return resposta.data;
  },
  getById: async (id) => {
    const resposta = await axios.get(`${API_URL}/${id}`);
    return resposta.data;
  },
  create: async (data) => {
    const resposta = await axios.post(API_URL, data);
    return resposta.data;
  },
  updateById: async (id, data) => {
    const resposta = await axios.put(`${API_URL}/${id}`, data);
    return resposta.data;
  },
  deleteById: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
};
