import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarAgenda } from '../../features/listaAgendaSlice';
import { adicionarPaciente } from '../../features/listaPacientesSlice';

export function VisualizarConsultaC({ handleConsultasConcluidas, consultaC }) {
    return (
        <div>
            <div>
                <button className='botãoConsulta' onClick={handleConsultasConcluidas}>Consultas Concluídas</button>
            </div>
            <div className="container-lg">
                <div className="row g-3">
                    <div className="col-md-4">
                        <label>Id:</label>
                        <span>{consultaC.id}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Título:</label>
                        <span>{consultaC.title}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Paciente:</label>
                        <span>{consultaC.paciente}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Data:</label>
                        <span>{consultaC.data}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Hora:</label>
                        <span>{consultaC.hora}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Pagamento:</label>
                        <span>{consultaC.pagamento}</span>
                    </div>
                    <div className="col-12">
                        <label>Descrição:</label>
                        <span>{consultaC.descrição}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisualizarConsultaC;