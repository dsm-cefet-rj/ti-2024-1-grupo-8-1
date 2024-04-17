import React from 'react';
import './stylesPaciente.css';
import { useSelector } from 'react-redux';

function ListarPacientes({ handleAdicionarPaciente, handleVisualizarPaciente }) {
    const ListaDePacientes = useSelector((state) => state.listaPacientes.pacientes);

    return (
        <div>
            <button className='botãoPaciente' onClick={handleAdicionarPaciente}>Adicionar</button>
            <div className='ListaPaciente'>
                <ul>
                    <li>Pacientes</li>
                    {ListaDePacientes.map((paciente, index) => (
                        <li key={index} onClick={handleVisualizarPaciente}>{paciente.nome}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListarPacientes;