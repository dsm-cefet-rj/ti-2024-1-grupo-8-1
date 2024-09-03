const mongoose = require('mongoose');

const estoqueSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  quantidade: { type: Number, required: true },
  preco: { type: Number, required: true },
  descricao: { type: String },
  filtros: { type: [String] }
});

const Estoque = mongoose.model('Estoque', estoqueSchema, 'estoque');
module.exports = Estoque;
