const express = require('express');
const router = express.Router();
const pacienteController = require('../Controllers/pacienteController.jsx');

router.get('/', pacienteController.getPacientes);
router.get('/:id', pacienteController.getPacienteById);
router.post('/', pacienteController.createPaciente);
router.put('/:id', pacienteController.updatePaciente);
router.delete('/:id', pacienteController.deletePaciente);

module.exports = router;
