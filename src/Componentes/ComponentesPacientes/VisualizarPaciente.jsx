import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarPaciente } from '../../features/listaPacientesSlice';

export function AdicionarPaciente({ handleInicioPaciente }) {
    const [Paciente, setPaciente] = useState()
    const ListaDePacientes = useSelector((state) => state.listaPacientes.pacientes);

}

export default AdicionarPaciente;