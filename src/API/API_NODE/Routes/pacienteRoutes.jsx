const express = require('express');
const router = express.Router();
const authenticate = require('../authenticate.jsx');
const pacienteController = require('../Controllers/pacienteController.jsx');

router.get('/', authenticate.verifyUser, pacienteController.getPacientes);
router.get('/:id', authenticate.verifyUser, pacienteController.getPacienteById);
router.post('/', authenticate.verifyUser, pacienteController.createPaciente);
router.put('/:id', authenticate.verifyUser, pacienteController.updatePaciente);
router.delete('/:id', authenticate.verifyUser, pacienteController.deletePaciente);

module.exports = router;
