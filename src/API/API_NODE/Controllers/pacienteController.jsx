const pacienteService = require('../Models/pacienteModel.jsx'); 


const getAllPacientes = async (req, res) => {
  try {
    const pacientes = await pacienteService.getAll();
    return res.status(200).json(pacientes);

  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter pacientes', erro: error.message });
  }
};


const getPacienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const paciente = await pacienteService.getById(id);
    res.status(200).json(paciente);
  } catch (error) {
    res.status(404).json({ mensagem: `Paciente não encontrado`, erro: error.message });
  }
};


const createPaciente = async (req, res) => {
  const dadosPaciente = req.body;
  try {
    const paciente = await pacienteService.create(dadosPaciente);
    res.status(201).json(paciente);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao criar paciente', erro: error.message });
  }
};

const updatePacienteById = async (req, res) => {
  const { id } = req.params;
  const dados = req.body;
  try {
    const pacienteAtualizado = await pacienteService.updateById(id, dados);
    res.status(200).json(pacienteAtualizado);
  } catch (error) {
    res.status(404).json({ mensagem: `Erro ao atualizar o paciente`, erro: error.message });
  }
};


const deletePacienteById = async (req, res) => {
  const { id } = req.params;
  try {
    await pacienteService.deleteById(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ mensagem: `Erro ao excluir o paciente`, erro: error.message });
  }
};

module.exports = {
  getAllPacientes,
  getPacienteById,
  createPaciente,
  updatePacienteById,
  deletePacienteById,
};