const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3006;

app.use(cors());
app.use(bodyParser.json());


const mongoURI = 'mongodb+srv://labeats2238:lucas1213@cluster0.zid7k.mongodb.net/portal_da_doutora';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(error => console.error('Erro ao conectar ao MongoDB:', error));

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



const pagamentoSchema = new mongoose.Schema({
  nome: { type: String, required: true }, 
  cpf: { type: String, required: true },
  valorTotal: { type: Number, required: true },
  parcela: { type: Number, required: true },
  valorParcela: { type: Number, required: true },
  data: { type: Date, required: true },
  metodo: { type: String, required: true },
  idConsulta: { type: mongoose.Schema.Types.ObjectId, ref: 'Consulta', required: true }
});

const Pagamento = mongoose.model('Pagamento', pagamentoSchema);

const estoqueSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  quantidade: { type: Number, required: true },
  preco: { type: Number, required: true },
  descricao: { type: String },
  filtros: { type: [String] }
});

const Estoque = mongoose.model('Estoque', estoqueSchema);



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




app.get('/api/pagamentos', async (req, res) => {
  try {
    const pagamentos = await Pagamento.find();
    res.status(200).json(pagamentos);
  } catch (error) {
    console.error('Erro ao obter pagamentos:', error);
    res.status(500).json({ mensagem: 'Erro ao obter pagamentos' });
  }
});

app.get('/api/pagamentos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pagamento = await Pagamento.findById(id);
    if (!pagamento) return res.status(404).json({ mensagem: 'Pagamento não encontrado' });
    res.status(200).json(pagamento);
  } catch (error) {
    console.error(`Erro ao obter pagamento com ID ${id}:`, error);
    res.status(500).json({ mensagem: 'Erro ao obter pagamento' });
  }
});

app.post('/api/pagamentos', async (req, res) => {
  const dadosPagamento = req.body;
  try {
    const pagamento = new Pagamento(dadosPagamento);
    await pagamento.save();
    res.status(201).json(pagamento);
  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
    res.status(400).json({ mensagem: 'Erro ao criar pagamento' });
  }
});

app.put('/api/pagamentos/:id', async (req, res) => {
  const { id } = req.params;
  const dados = req.body;
  try {
    const pagamentoAtualizado = await Pagamento.findByIdAndUpdate(id, dados, { new: true, runValidators: true });
    if (!pagamentoAtualizado) return res.status(404).json({ mensagem: 'Pagamento não encontrado' });
    res.status(200).json(pagamentoAtualizado);
  } catch (error) {
    console.error(`Erro ao atualizar pagamento com ID ${id}:`, error);
    res.status(500).json({ mensagem: 'Erro ao atualizar pagamento' });
  }
});

app.delete('/api/pagamentos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await Pagamento.findByIdAndDelete(id);
    if (!resultado) return res.status(404).json({ mensagem: 'Pagamento não encontrado' });
    res.status(204).send();
  } catch (error) {
    console.error(`Erro ao excluir pagamento com ID ${id}:`, error);
    res.status(500).json({ mensagem: 'Erro ao excluir pagamento' });
  }
});


app.get('/api/estoque', async (req, res) => {
  try {
    const estoque = await Estoque.find();
    res.status(200).json(estoque);
  } catch (error) {
    console.error('Erro ao obter estoque:', error);
    res.status(500).json({ mensagem: 'Erro ao obter estoque' });
  }
});

app.get('/api/estoque/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const itemEstoque = await Estoque.findById(id);
    if (!itemEstoque) return res.status(404).json({ mensagem: 'Item de estoque não encontrado' });
    res.status(200).json(itemEstoque);
  } catch (error) {
    console.error(`Erro ao obter item de estoque com ID ${id}:`, error);
    res.status(500).json({ mensagem: 'Erro ao obter item de estoque' });
  }
});

app.post('/api/estoque', async (req, res) => {
  const dadosEstoque = req.body;
  try {
    const novoItemEstoque = new Estoque(dadosEstoque);
    await novoItemEstoque.save();
    res.status(201).json(novoItemEstoque);
  } catch (error) {
    console.error('Erro ao criar item de estoque:', error);
    res.status(400).json({ mensagem: 'Erro ao criar item de estoque' });
  }
});

app.put('/api/estoque/:id', async (req, res) => {
  const { id } = req.params;
  const dados = req.body;
  try {
    const itemEstoqueAtualizado = await Estoque.findByIdAndUpdate(id, dados, { new: true, runValidators: true });
    if (!itemEstoqueAtualizado) return res.status(404).json({ mensagem: 'Item de estoque não encontrado' });
    res.status(200).json(itemEstoqueAtualizado);
  } catch (error) {
    console.error(`Erro ao atualizar item de estoque com ID ${id}:`, error);
    res.status(500).json({ mensagem: 'Erro ao atualizar item de estoque' });
  }
});

app.delete('/api/estoque/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await Estoque.findByIdAndDelete(id);
    if (!resultado) return res.status(404).json({ mensagem: 'Item de estoque não encontrado' });
    res.status(204).send();
  } catch (error) {
    console.error(`Erro ao excluir item de estoque com ID ${id}:`, error);
    res.status(500).json({ mensagem: 'Erro ao excluir item de estoque' });
  }
});



app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

