import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarPaciente } from '../../features/listaPacientesSlice';

export function VisualizarPaciente({ handleInicioPaciente, paciente }) {
    return (
        <div>
            <div>
                <button className='botãoPaciente' onClick={handleInicioPaciente}>Inicio</button>
            </div>
            <div className="container-lg">
                <form className="row g-3 visualizar">
                    <div className="col-md-6">
                        <label>Nome:</label>
                        <span>{paciente.nome}</span>
                    </div>
                    <div className="col-md-3">
                        <label>Telefone:</label>
                        <span>{paciente.telefone}</span>
                    </div>
                    <div className="col-md-3">
                        <label>CPF:</label>
                        <span>{paciente.cpf}</span>
                    </div>
                    <div className="col-md-5">
                        <label>Endereço:</label>
                        <span>{paciente.endereco}</span>
                    </div>
                    <div className="col-md-3">
                        <label>Cidade:</label>
                        <span>{paciente.cidade}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Responsável:</label>
                        <span>{paciente.responsavel || ' Não tem'}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Alergias:</label>
                        <span>{paciente.alergias.join(', ')}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Medicações:</label>
                        <span>{paciente.medicacoes.join(', ')}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Cirurgias:</label>
                        <span>{paciente.cirurgias.join(', ')}</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default VisualizarPaciente;