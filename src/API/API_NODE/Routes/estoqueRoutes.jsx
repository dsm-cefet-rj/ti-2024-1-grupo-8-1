const express = require('express');
const router = express.Router();
const cors = require ('../cors.jsx');

const estoqueController = require('../Controllers/estoqueController.jsx');

router.options('/', cors.corsWithOptions, estoqueController.corsAuth);
router.get('/', cors.corsWithOptions, estoqueController.getEstoque);
router.get('/:id', cors.corsWithOptions, estoqueController.getEstoqueById);
router.post('/', cors.corsWithOptions, estoqueController.createEstoque);
router.put('/:id', cors.corsWithOptions, estoqueController.updateEstoque);
router.delete('/:id', cors.corsWithOptions, estoqueController.deleteEstoque);

module.exports = router;
