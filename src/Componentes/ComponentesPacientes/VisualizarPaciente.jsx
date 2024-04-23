import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function VisualizarPaciente({ handleInicioPaciente, paciente }) {
    const consultasMarcadas = useSelector(state => state.listaConsulta.consulta);
    const consultasConcluidas = useSelector(state => state.listaAgenda.agenda);

    const consultasDoPacienteMarcadas = consultasMarcadas.filter(consulta => consulta.paciente === paciente.cpf);
    const consultasDoPacienteConcluidas = consultasConcluidas.filter(consulta => consulta.paciente === paciente.cpf);

    consultasDoPacienteMarcadas.sort((a, b) => {
        const dataA = new Date(a.data);
        const dataB = new Date(b.data);
        return dataA - dataB;
    });

    consultasDoPacienteConcluidas.sort((a, b) => {
        const dataA = new Date(a.data);
        const dataB = new Date(b.data);
        return dataA - dataB;
    });

    const [consultasDoPaciente, setConsultasDoPacientes] = useState([...consultasDoPacienteConcluidas, ...consultasDoPacienteMarcadas])

    return (
        <div>
            <div>
                <button className='botãoPaciente' onClick={handleInicioPaciente}>Inicio</button>
            </div>
            <div className="container-lg">
                <h4>Paciente</h4>
                <div className="row g-3 visualizar">
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
                        <ul className='visuLista'>
                            {paciente.alergias.map((alergia, i) => (
                                <li key={i}>{alergia}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <label>Medicações:</label>
                        <ul className='visuLista'>
                            {paciente.medicacoes.map((medicacao, i) => (
                                <li key={i}>{medicacao}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-4 ">
                        <label>Cirurgias:</label>
                        <ul className='visuLista'>
                            {paciente.cirurgias.map((cirurgia, i) => (
                                <li key={i}>{cirurgia}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-md-12">
                        <h4>Consultas Marcadas</h4>
                        <ul className='listaConsultas'>
                            {consultasDoPaciente.map((consulta, index) => (
                                <div className="row g-3 consulta">
                                    <div className="col-md-6">
                                        <label>Id:</label>
                                        <span>{consulta.id}</span>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Título:</label>
                                        <span>{consulta.title}</span>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Data:</label>
                                        <span>{consulta.data}</span>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Hora:</label>
                                        <span>{consulta.hora}</span>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisualizarPaciente;