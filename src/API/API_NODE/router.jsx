const express = require('express');

const router = express.Router();


const pacienteController = require('./Controllers/pacienteController.jsx')

router.get('/pacientes', pacienteController.getAllPacientes);
router.get('/pacientes/:id', pacienteController.getPacienteById);
router.post('/pacientes', pacienteController.createPaciente);
router.put('/pacientes/:id', pacienteController.updatePacienteById);
router.delete('/pacientes/:id', pacienteController.deletePacienteById);
module.exports = router;