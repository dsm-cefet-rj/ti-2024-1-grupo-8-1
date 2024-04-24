import { Api } from '../ApiConfig';

const pagamento = {
  id: "",
  nome: "", 
  cpf: "",
  valorTotal: "",
  parcela: "",
  valorParcela: "",
  data: "",
  metodo: "",
  idConsulta: ""
};

const getAll = async () => {
  try {
    const response = await Api.get('/pagamentos');
    const data = response.data;

    return data;
  } catch (error) {

    console.error('Erro ao obter todos os pagamentos:', error);
    throw error;
  }
};

const getById = async (id) => {
  try {
    const response = await Api.get(`/pagamentos/${id}`);
    const data = response.data;

    return data;
  } catch (error) {

    console.error(`Erro ao obter o pagamento com o ID ${id}:`, error);
    throw error;
  }
};

const create = async (pagamento) => {
  try {
    const response = await Api.post('/pagamentos', pagamento);
    const data = response.data;

    return data;
  } catch (error) {

    console.error('Erro ao criar pagamentos:', error);
    throw error;
  }
};

const updateById = async (id, dados) => {
  try {
    const response = await Api.put(`/pagamentos/${id}`, dados);
    const data = response.data;

    return data;
  } catch (error) {

    console.error(`Erro ao atualizar o pagamento com o ID ${id}:`, error);
    throw error;
  }
};

const deleteById = async (id) => {
  try {
    const response = await Api.delete(`/pagamentos/${id}`);
    const data = response.data;

    return undefined;
  } catch (error) {

    console.error(`Erro ao excluir o pagamento com o ID ${id}:`, error);
    throw error;
  }
};

export const PagamentosServices = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};