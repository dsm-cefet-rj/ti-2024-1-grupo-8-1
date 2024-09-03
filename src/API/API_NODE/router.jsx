const express = require('express');
const router = express.Router();
const pacienteRoutes = require('./Routes/pacienteRoutes.jsx');
const pagamentoRoutes = require('./Routes/pagamentoRoutes.jsx');
const estoqueRoutes = require('./Routes/estoqueRoutes.jsx');


router.use('/api/pacientes', pacienteRoutes);
router.use('/api/pagamentos', pagamentoRoutes);
router.use('/api/estoque', estoqueRoutes);

module.exports = router;
