import { Api } from '../ApiConfig';

const paciente = {
    "nome": "Juninho Pernambucano Lima",
    "telefone": "(11) 4567-8901",
    "cpf": "456.789.012-33",
    "endereco": "Rua dos Gigantes, 1011",
    "cidade": "Gigantão",
    "alergias": ["Amendoim"],
    "responsavel": "444.555.666-77",
    "medicacoes": ["Ibuprofeno"],
    "cirurgias": ["Nariz"]
};

const getAll = async () => {
  try {
    const response = await Api.get('/pacientes');
    const data = response.data;

    return data;
  } catch (error) {

    console.error('Erro ao obter todos os pacientes:', error);
    throw error;
  }
};

const getById = async (id) => {
  try {
    const response = await Api.get(`/pacientes/${id}`);
    const data = response.data;

    return data;
  } catch (error) {

    console.error(`Erro ao obter o paciente com o ID ${id}:`, error);
    throw error;
  }
};

const create = async (paciente) => {
  try {
    const response = await Api.post('/pacientes', paciente);
    const data = response.data;

    return data;
  } catch (error) {

    console.error('Erro ao criar pacientes:', error);
    throw error;
  }
};

const updateById = async (id, dados) => {
  try {
    const response = await Api.put(`/pacientes/${id}`, dados);
    const data = response.data;

    return data;
  } catch (error) {

    console.error(`Erro ao atualizar o paciente com o ID ${id}:`, error);
    throw error;
  }
};

const deleteById = async (id) => {
  try {
    const response = await Api.delete(`/pacientes/${id}`);
    const data = response.data;

    return undefined;
  } catch (error) {

    console.error(`Erro ao excluir o paciente com o ID ${id}:`, error);
    throw error;
  }
};

export const PacientesServices = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};