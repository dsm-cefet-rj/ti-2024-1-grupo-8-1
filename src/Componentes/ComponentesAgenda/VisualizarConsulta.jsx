import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarAgenda } from '../../features/listaAgendaSlice';
import { adicionarPaciente } from '../../features/listaPacientesSlice';

export function VisualizarConsulta({ handleConsultasMarcadas, consulta }) {
    return (
        <div>
            <div>
                <button className='botãoConsulta' onClick={handleConsultasMarcadas}>Adicionar Consulta</button>
            </div>
            <div className="container-lg">
                <div className="row g-3">
                    <div className="col-md-6">
                        <label>Id:</label>
                        <span>{consulta.id}</span>
                    </div>
                    <div className="col-md-3">
                        <label>Título:</label>
                        <span>{consulta.title}</span>
                    </div>
                    <div className="col-md-3">
                        <label>AllDay:</label>
                        <span>{consulta.allDay}</span>
                    </div>
                    <div className="col-md-5">
                        <label>Começo:</label>
                        <span>{consulta.start}</span>
                    </div>
                    <div className="col-md-3">
                        <label>Fim:</label>
                        <span>{consulta.end}</span>
                    </div>
                    <div className="col-md-4">
                        <label>Paciente:</label>
                        <span>{consulta.paciente}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisualizarConsulta;