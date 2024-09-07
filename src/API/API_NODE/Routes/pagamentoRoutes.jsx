const express = require('express');
const router = express.Router();
const authenticate = require('../authenticate.jsx');
const pagamentoController = require('../Controllers/pagamentoController.jsx');

router.get('/', authenticate.verifyUser, pagamentoController.getPagamentos);
router.get('/:id', authenticate.verifyUser, pagamentoController.getPagamentoById);
router.post('/', authenticate.verifyUser, pagamentoController.createPagamento);
router.put('/:id', authenticate.verifyUser, pagamentoController.updatePagamento);
router.delete('/:id', authenticate.verifyUser, pagamentoController.deletePagamento);

module.exports = router;
