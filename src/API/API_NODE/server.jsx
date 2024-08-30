const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3006;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexão com o MongoDB Atlas
const mongoURI = 'mongodb+srv://labeats2238:lucas1213@cluster0.zid7k.mongodb.net/portal_da_doutora';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(error => console.error('Erro ao conectar ao MongoDB:', error));

// Definição do schema e modelo
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

// Rotas
app.get('/api/pacientes', async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.status(200).json(pacientes);
  } catch (error) {
    console.error('Erro ao obter pacientes:', error);
    res.status(500).json({ mensagem: 'Erro ao obter pacientes' });
  }
});

app.get('/api/pacientes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const paciente = await Paciente.findById(id);
    if (!paciente) return res.status(404).json({ mensagem: 'Paciente não encontrado' });
    res.status(200).json(paciente);
  } catch (error) {
    console.error(`Erro ao obter paciente com ID ${id}:`, error);
    res.status(500).json({ mensagem: 'Erro ao obter paciente' });
  }
});

app.post('/api/pacientes', async (req, res) => {
  const dadosPaciente = req.body;
  try {
    const paciente = new Paciente(dadosPaciente);
    await paciente.save();
    res.status(201).json(paciente);
  } catch (error) {
    console.error('Erro ao criar paciente:', error);
    res.status(400).json({ mensagem: 'Erro ao criar paciente' });
  }
});

app.put('/api/pacientes/:id', async (req, res) => {
  const { id } = req.params;
  const dados = req.body;
  try {
    const pacienteAtualizado = await Paciente.findByIdAndUpdate(id, dados, { new: true, runValidators: true });
    if (!pacienteAtualizado) return res.status(404).json({ mensagem: 'Paciente não encontrado' });
    res.status(200).json(pacienteAtualizado);
  } catch (error) {
    console.error(`Erro ao atualizar paciente com ID ${id}:`, error);
    res.status(500).json({ mensagem: 'Erro ao atualizar paciente' });
  }
});

app.delete('/api/pacientes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await Paciente.findByIdAndDelete(id);
    if (!resultado) return res.status(404).json({ mensagem: 'Paciente não encontrado' });
    res.status(204).send();
  } catch (error) {
    console.error(`Erro ao excluir paciente com ID ${id}:`, error);
    res.status(500).json({ mensagem: 'Erro ao excluir paciente' });
  }
});

// Início do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
