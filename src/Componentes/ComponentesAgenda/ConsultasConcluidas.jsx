import React from 'react';
import './stylesAgenda.css';
import { useSelector } from 'react-redux';

function ConsultasConcluidas({ handleVisualizarConsultaC, handleConsultasMarcadas }) {
    const ListaDeConsultasConcluidas = useSelector((state) => state.listaConsulta.consulta);

    return (
        <div>
            <button className='botãoConsulta' onClick={handleConsultasMarcadas}>Consultas Marcadas</button>

            <div className="ListaConsulta">
                <ul>
                    <li>Consultas Concluidas</li>
                    {ListaDeConsultasConcluidas.map((consulta, index) => (
                        <li key={index} onClick={() => handleVisualizarConsultaC(consulta)}>{consulta.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ConsultasConcluidas;