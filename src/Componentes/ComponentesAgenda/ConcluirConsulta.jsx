import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarAgenda } from '../../features/listaAgendaSlice';
import { adicionarPaciente } from '../../features/listaPacientesSlice';

export function ConcluirConsulta({ handleConsultasConcluidas, consulta }) {

    const[novaConsultaConcluida, setNovaConsultaConcluida] = useState({
      
        id: consulta.id,
        title: consulta.title,
        start: consulta.start,
        end: consulta.end,
        paciente: consulta.paciente,
        pagamentos: "",
        descrição: ""
    })

    const dispatch = useDispatch();

    const handleMudanca = (e) => {
        const { name, value } = e.target;
        setNovaConsultaConcluida({
        ...novaConsultaConcluida,
        [name]: value,
        });
    };

    const handleConcluirConsulta = (e) => {
        console.log(novaConsultaConcluida);
        alert("vasco")
        dispatch(adicionarConsulta(novaConsultaConcluida));

        handleConsultasConcluidas();
    };

    return (
        <div>
            <div>
                <button className='botãoConsulta' onClick={handleConsultasConcluidas}>Consultas</button>
            </div>
            <div className="container-lg">
                <form onSubmit={handleConcluirConsulta} className='row g-3'>
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
                            <input type="text" name='pagamento' onChange={(e) => handleMudanca(e)} />
                        </div>
                        <div>
                            <label>Descrição:</label>
                            <textarea type="text" name='descrição' onChange={(e) => handleMudanca(e)} />
                        </div>
                    </div>

                    <button type="submit" className="botãoConsulta"> Confirmar</button>
                </form>
            </div>
        </div>
    );
}

export default ConcluirConsulta;