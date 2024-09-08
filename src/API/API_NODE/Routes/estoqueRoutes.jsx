const express = require('express');
const router = express.Router();

const estoqueController = require('../Controllers/estoqueController.jsx');

router.get('/', estoqueController.getEstoque);
router.get('/:id', estoqueController.getEstoqueById);
router.post('/', estoqueController.createEstoque);
router.put('/:id', estoqueController.updateEstoque);
router.delete('/:id', estoqueController.deleteEstoque);

module.exports = router;
