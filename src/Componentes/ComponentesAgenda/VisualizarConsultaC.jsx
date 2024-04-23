import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarAgenda } from '../../features/listaAgendaSlice';
import { adicionarPaciente } from '../../features/listaPacientesSlice';

export function VisualizarConsultaC({ handleConsultasConcluidas, consulta }) {
    return (
        <div>
            <div>
                <button className='botãoConsulta' onClick={handleConsultasConcluidas}>Consultas Concluídas</button>
            </div>
            <div className="container-lg">
                <div className="row g-3">
                    <div className="col-md-4">
                        <label>Id:</label>
                        <span>{consulta.id}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Título:</label>
                        <span>{consulta.title}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Paciente:</label>
                        <span>{consulta.paciente}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Começo:</label>
                        <span>{consulta.start}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Fim:</label>
                        <span>{consulta.end}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Pagamento:</label>
                        <span>{consulta.pagamento}</span>
                    </div>
                    <div className="col-12">
                        <label>Descrição:</label>
                        <span>{consulta.descrição}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisualizarConsultaC;