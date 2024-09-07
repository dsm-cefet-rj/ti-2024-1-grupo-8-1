const express = require('express');
const router = express.Router();
const authenticate = require('../authenticate.jsx');
const consultaController = require('../Controllers/consultaController.jsx');

router.get('/', authenticate.verifyUser, consultaController.getConsultas);
router.get('/:id', authenticate.verifyUser, consultaController.getConsultaById);
router.post('/', authenticate.verifyUser, consultaController.createConsulta);
router.put('/:id', authenticate.verifyUser, consultaController.updateConsulta);
router.delete('/:id', authenticate.verifyUser, consultaController.deleteConsulta);

module.exports = router;
