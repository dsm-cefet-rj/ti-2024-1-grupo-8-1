const express = require('express');

const router = express.Router();


const pacienteController = require('./Controllers/pacienteController.jsx')

router.get('/api/pacientes', pacienteController.getAllPacientes);
router.get('/api/pacientes/:id', pacienteController.getPacienteById);
router.post('/api/pacientes', pacienteController.createPaciente);
router.put('/api/pacientes/:id', pacienteController.updatePacienteById);
router.delete('/api/pacientes/:id', pacienteController.deletePacienteById);

module.exports = router;