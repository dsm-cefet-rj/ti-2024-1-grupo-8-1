import { Api } from '../ApiConfig';

const compromisso = {
  id: "",
  data: "",
  horario: "",
  cpfPaciente: "",
  descricao: "",
  observacoes: "",
  idPagamento: ""
};

const getAll = async () => {
  try {
    const response = await Api.get('/compromissos');
    const data = response.data;

    return data;
  } catch (error) {
    console.error('Erro ao obter todos os compromissos:', error);
    throw error;
  }
};

const getById = async (id) => {
  try {
    const response = await Api.get(`/compromissos/${id}`);
    const data = response.data;

    return data;
  } catch (error) {
    console.error(`Erro ao obter o compromisso com o ID ${id}:`, error);
    throw error;
  }
};

const create = async (compromisso) => {
  try {
    const response = await Api.post('/compromissos', compromisso);
    const data = response.data;

    return data;
  } catch (error) {
    console.error('Erro ao criar compromisso:', error);
    throw error;
  }
};

const updateById = async (id, dados) => {
  try {
    const response = await Api.put(`/compromissos/${id}`, dados);
    const data = response.data;

    return data;
  } catch (error) {
    console.error(`Erro ao atualizar o compromisso com o ID ${id}:`, error);
    throw error;
  }
};

const deleteById = async (id) => {
  try {
    await Api.delete(`/compromissos/${id}`);

    return undefined;
  } catch (error) {
    console.error(`Erro ao excluir o compromisso com o ID ${id}:`, error);
    throw error;
  }
};

export const CompromissosServices = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};
