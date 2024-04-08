import React from 'react';
import './stylesPaciente.css';

function ListarPacientes({ ListaDePacientes, handleAdicionarPaciente }) {
    return (
        <div>
            <button className='botãoPaciente' onClick={handleAdicionarPaciente}>Adicionar</button>
            <div className='ListaPaciente'>
                <ul>
                    <li>Pacientes</li>
                    {ListaDePacientes.map((paciente, index) => (
                        <li key={index}>{paciente.nome}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListarPacientes;