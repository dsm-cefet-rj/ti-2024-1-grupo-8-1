import { Api } from '../ApiConfig';

const pagamento = {
  id: "",
  nome: "", // Adicione o valor desejado para o campo "nome"
  cpf: "",
  valorTotal: "valor",
  parcela: "parcela",
  valorParcela: "valorParcelas",
  data: "dataInput",
  metodo: "metodo",
  idConsulta: "idConsulta"
};

const getAll = async () => {
  try {
    const response = await Api.get('/pagamentos');
    const data = response.data;
    // Faça algo com os dados retornados, por exemplo, retornar ou manipular os dados
    return data;
  } catch (error) {
    // Lógica para lidar com erros
    console.error('Erro ao obter todos os pagamentos:', error);
    throw error;
  }
};

const getById = async (id) => {
  try {
    const response = await Api.get(`/pagamentos/${id}`);
    const data = response.data;
    // Faça algo com os dados retornados, por exemplo, retornar ou manipular os dados
    return data;
  } catch (error) {
    // Lógica para lidar com erros
    console.error(`Erro ao obter o pagamento com o ID ${id}:`, error);
    throw error;
  }
};

const create = async (pagamento) => {
  try {
    const response = await Api.post('/pagamentos', pagamento);
    const data = response.data;
    // Faça algo com os dados retornados, por exemplo, retornar ou manipular os dados
    return data;
  } catch (error) {
    // Lógica para lidar com erros
    console.error('Erro ao criar pagamentos:', error);
    throw error;
  }
};

const updateById = async (id, dados) => {
  try {
    const response = await Api.put(`/pagamentos/${id}`, dados);
    const data = response.data;
    // Faça algo com os dados retornados, por exemplo, retornar ou manipular os dados
    return data;
  } catch (error) {
    // Lógica para lidar com erros
    console.error(`Erro ao atualizar o pagamento com o ID ${id}:`, error);
    throw error;
  }
};

const deleteById = async (id) => {
  try {
    const response = await Api.delete(`/pagamentos/${id}`);
    const data = response.data;
    // Faça algo com os dados retornados, por exemplo, retornar ou manipular os dados
    return undefined;
  } catch (error) {
    // Lógica para lidar com erros
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