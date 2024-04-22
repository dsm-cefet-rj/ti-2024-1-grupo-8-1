import React from 'react';
import './stylesAgenda.css';
import { useSelector } from 'react-redux';

function ConsultasMarcadas({ handleAdicionarConsulta, handleVisualizarConsulta }) {
    const ListaDeConsultasMarcadas = useSelector((state) => state.listaAgenda.agenda);

    return (
        <div>
            <button className='botãoConsulta' onClick={handleAdicionarConsulta}>Adicionar</button>
            <div>
                <ul>
                    <li>Consultas Marcadas</li>
                    {ListaDeConsultasMarcadas.map((consulta, index) => (
                        <li key={index} onClick={() => handleVisualizarConsulta(consulta)}>{consulta.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ConsultasMarcadas;