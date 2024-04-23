import React from 'react';
import './stylesAgenda.css';
import { useSelector } from 'react-redux';

function ConsultasConcluidas({ handleAdicionarConsulta, handleVisualizarConsultaC }) {
    const ListaDeConsultasConcluidas = useSelector((state) => state.listaAgenda.agenda);

    return (
        <div>
            <button className='botãoConsulta' onClick={handleAdicionarConsulta}>Adicionar</button>
            <div>
                <ul>
                    <li>Consultas Marcadas</li>
                    {ListaDeConsultasConcluidas.map((consulta, index) => (
                        <li key={index} onClick={() => handleVisualizarConsultaC(consulta)}>{consulta.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ConsultasConcluidas;