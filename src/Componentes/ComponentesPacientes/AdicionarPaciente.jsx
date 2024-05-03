import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarPaciente,createPaciente } from '../../features/listaPacientesSlice';

export function AdicionarPaciente({ handleInicioPaciente }) {
    const [novoPaciente, setNovoPaciente] = useState({
        nome: "",
        telefone: "",
        cpf: "",
        endereco: "",
        cidade: "",
        alergias: [],
        responsavel: "",
        medicacoes: [],
        cirurgias: [],
    })

    const [medicacoesInput, setMedicacoesInput] = useState('');
    const [alergiaInput, setAlergiaInput] = useState('');
    const [cirurgiasInput, setCirurgiasInput] = useState('');

    const pacientes = useSelector(state => state.listaPacientes.pacientes);
    const dispatch = useDispatch();

    const handleMudanca = (e) => {
        const { name, value } = e.target;
        if (name === 'alergias' || name === 'medicacoes' || name === 'cirurgias') {
            setNovoPaciente({
                ...novoPaciente,
                [name]: [...novoPaciente[name], value],
            });
        } else {
            setNovoPaciente({
                ...novoPaciente,
                [name]: value,
            });
        }
    };

    const handleAddMedicacoes = (e) => {
        e.preventDefault();
        if (medicacoesInput.trim() !== '') {
            setNovoPaciente((novoPaciente) => ({
                ...novoPaciente,
                medicacoes: [...novoPaciente.medicacoes, medicacoesInput],
            }));
            setMedicacoesInput('');
        }
    };

    const handleDeleteMedicacoes = (index) => {
        setNovoPaciente((novoPaciente) => ({
            ...novoPaciente,
            medicacoes: novoPaciente.medicacoes.filter((_, i) => i !== index),
        }));
    };

    const handleAddCirurgias = (e) => {
        e.preventDefault();
        if (cirurgiasInput.trim() !== '') {
            setNovoPaciente((novoPaciente) => ({
                ...novoPaciente,
                cirurgias: [...novoPaciente.cirurgias, cirurgiasInput],
            }));
            setCirurgiasInput('');
        }
    };

    const handleDeleteCirurgia = (index) => {
        setNovoPaciente((novoPaciente) => ({
            ...novoPaciente,
            cirurgias: novoPaciente.cirurgias.filter((_, i) => i !== index),
        }));
    };

    const handleAddAlergia = (e) => {
        e.preventDefault();
        if (alergiaInput.trim() !== '') {
            setNovoPaciente((novoPaciente) => ({
                ...novoPaciente,
                alergias: [...novoPaciente.alergias, alergiaInput],
            }));
            setAlergiaInput('');
        }
    };

    const handleDeleteAlergia = (index) => {
        setNovoPaciente((novoPaciente) => ({
            ...novoPaciente,
            alergias: novoPaciente.alergias.filter((_, i) => i !== index),
        }));
    };

    const handleAdicionarPaciente = (e) => {
        console.log(novoPaciente);
        dispatch(createPaciente(novoPaciente));

        handleInicioPaciente();
    };

    return (
        <div>
            <div>
                <button className='botãoPaciente' onClick={handleInicioPaciente}>Início</button>
            </div>
            <div className='container-lg'>
                <form onSubmit={handleAdicionarPaciente} className='row g-3'>
                    <div className='col-md-6'>
                        <label>Nome:</label>
                        <input type="text" name='nome' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-3'>
                        <label>Telefone:</label>
                        <input type="text" name='telefone' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-3'>
                        <label>CPF:</label>
                        <input type="text" name='cpf' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-5'>
                        <label>Endereço:</label>
                        <input type="text" name='endereco' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-3'>
                        <label>Cidade:</label>
                        <input type="text" name='cidade' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-4'>
                        <label>Alergias:</label>
                        <div className='input-group'>
                            <input type="text" className='form-control' value={alergiaInput} onChange={(e) => setAlergiaInput(e.target.value)} />
                            <button className='btn btn-outline-secondary' type='button' onClick={handleAddAlergia}>Adicionar</button>
                        </div>
                        <ul className='list-group'>
                            {novoPaciente.alergias.map((alergia, index) => (
                                <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                                    {alergia}
                                    <button className='btn-close' type='button' onClick={() => handleDeleteAlergia(index)}></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <label>Responsável:</label>
                        <input type="text" name='responsavel' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-4'>
                        <label>Medicações:</label>
                        <div className='input-group'>
                            <input type="text" className='form-control' value={medicacoesInput} onChange={(e) => setMedicacoesInput(e.target.value)} />
                            <button className='btn btn-outline-secondary' type='button' onClick={handleAddMedicacoes}>Adicionar</button>
                        </div>
                        <ul className='list-group'>
                            {novoPaciente.medicacoes.map((medicacao, index) => (
                                <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                                    {medicacao}
                                    <button className='btn-close' type='button' onClick={() => handleDeleteMedicacoes(index)}></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <label>Cirurgias:</label>
                        <div className='input-group'>
                            <input type="text" className='form-control' value={cirurgiasInput} onChange={(e) => setCirurgiasInput(e.target.value)} />
                            <button className='btn btn-outline-secondary' type='button' onClick={handleAddCirurgias}>Adicionar</button>
                        </div>
                        <ul className='list-group'>
                            {novoPaciente.cirurgias.map((cirurgia, index) => (
                                <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                                    {cirurgia}
                                    <button className='btn-close' type='button' onClick={() => handleDeleteCirurgia(index)}></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-12'>
                        <button className='btn btn-primary' type='submit'>Adicionar Paciente</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AdicionarPaciente;