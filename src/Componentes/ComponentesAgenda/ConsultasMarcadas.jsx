import React from 'react';
import './stylesAgenda.css';
import { useSelector } from 'react-redux';

function ConsultasMarcadas({ handleAdicionarConsulta, handleVisualizarConsultaM, handleConsultasConcluidas }) {
    const ListaDeConsultasMarcadas = useSelector((state) => state.listaAgenda.agenda);

    return (
        <div>
            <button className='botãoConsulta' onClick={handleAdicionarConsulta}>Adicionar</button>
            <button className='botãoConsulta' onClick={handleConsultasConcluidas}>Consultas Concluídas</button>
            <div className="ListaConsulta">
                <ul>
                    <li>Consultas Marcadas</li>
                    {ListaDeConsultasMarcadas.map((consulta, index) => (
                        <li key={index} onClick={() => handleVisualizarConsultaM(consulta)}>{consulta.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ConsultasMarcadas;