const mongoose = require('mongoose');
const conn = require('../connection.jsx'); 


const pacienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String },
  cpf: { type: String },
  endereco: { type: String },
  cidade: { type: String },
  alergias: { type: [String] },
  responsavel: { type: String },
  medicacoes: { type: [String] },
  cirurgias: { type: [String] }
});


const Paciente = mongoose.model('Paciente', pacienteSchema);


const getAll = async () => {
  try {
    const data = await Paciente.find(); 
    return data;
  } catch (error) {
    console.error('Erro ao obter todos os pacientes:', error);
    throw error;
  }
};


const getById = async (id) => {
  try {
    const data = await Paciente.findById(id); 
    if (!data) {
      throw new Error('Paciente não encontrado');
    }
    return data;
  } catch (error) {
    console.error(`Erro ao obter o paciente com o ID ${id}:`, error);
    throw error;
  }
};


const create = async (dadosPaciente) => {
  try {
    const paciente = new Paciente(dadosPaciente); 
    const data = await paciente.save(); 
    return data;
  } catch (error) {
    console.error('Erro ao criar paciente:', error);
    throw error;
  }
};


const updateById = async (id, dados) => {
  try {
    const data = await Paciente.findByIdAndUpdate(id, dados, { new: true, runValidators: true });
    if (!data) {
      throw new Error('Paciente não encontrado');
    }
    return data;
  } catch (error) {
    console.error(`Erro ao atualizar o paciente com o ID ${id}:`, error);
    throw error;
  }
};


const deleteById = async (id) => {
  try {
    const data = await Paciente.findByIdAndDelete(id);
    if (!data) {
      throw new Error('Paciente não encontrado');
    }
    return undefined; // Não precisa retornar nada explicitamente
  } catch (error) {
    console.error(`Erro ao excluir o paciente com o ID ${id}:`, error);
    throw error;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};