import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarAgenda } from '../../features/listaAgendaSlice';
import { adicionarPaciente } from '../../features/listaPacientesSlice';

export function VisualizarConsultaM({ handleConsultasMarcadas, consultaM, handleConcluirConsulta }) {
    return (
        <div>
            <div>
                <button className='botãoConsulta' onClick={handleConsultasMarcadas}>Consultas Marcadas</button>
                <button className='botãoConsulta' onClick={() => handleConcluirConsulta(consultaM)}>Concluir Consulta</button>
            </div>
            <div className="container-lg">
                <div className="row g-3">
                    <div className="col-md-6">
                        <label>Id:</label>
                        <span>{consultaM.id}</span>
                    </div>
                    <div className="col-md-6">
                        <label>Título:</label>
                        <span>{consultaM.title}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Paciente:</label>
                        <span>{consultaM.paciente}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Começo:</label>
                        <span>{consultaM.start}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Fim:</label>
                        <span>{consultaM.end}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisualizarConsultaM;