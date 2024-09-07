const express = require('express');
const router = express.Router();
const authenticate = require('../authenticate.jsx');
const estoqueController = require('../Controllers/estoqueController.jsx');

router.get('/', authenticate.verifyUser, estoqueController.getEstoque);
router.get('/:id', authenticate.verifyUser,  estoqueController.getEstoqueById);
router.post('/', authenticate.verifyUser, estoqueController.createEstoque);
router.put('/:id', authenticate.verifyUser, estoqueController.updateEstoque);
router.delete('/:id', authenticate.verifyUser, estoqueController.deleteEstoque);

module.exports = router;
