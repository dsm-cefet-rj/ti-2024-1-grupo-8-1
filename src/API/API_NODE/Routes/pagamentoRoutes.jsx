const express = require('express');
const router = express.Router();
const pagamentoController = require('../Controllers/pagamentoController.jsx');

router.get('/', pagamentoController.getPagamentos);
router.get('/:id', pagamentoController.getPagamentoById);
router.post('/', pagamentoController.createPagamento);
router.put('/:id', pagamentoController.updatePagamento);
router.delete('/:id', pagamentoController.deletePagamento);

module.exports = router;
