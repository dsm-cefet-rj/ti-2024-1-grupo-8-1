const mongoose = require('mongoose');

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
module.exports = Pagamento;
