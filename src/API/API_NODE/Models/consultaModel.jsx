const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
  cpfPaciente: {type: String, required: true},
  dia: {type: String, required: true},
  hora: {type: String, required: true},
  descricao: {type: String, required: true},

  idPagamento: {type: mongoose.Schema.Types.ObjectId, ref: 'Pagamento'},
  observacoes: {type: String}
});

const Consulta = mongoose.model('Consulta', consultaSchema);
module.exports = Consulta;