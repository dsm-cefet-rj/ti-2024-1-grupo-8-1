import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarPaciente } from '../../features/listaPacientesSlice';

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

    const [medicacoesInput, setMedicacoesInput] = useState('')
    const [alergiaInput, setAlergiaInput] = useState('')
    const [cirurgiasInput, setCirurgiasInput] = useState('')

    const Pacientes = useSelector(state => state.listaPacientes.pacientes);
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
        dispatch(adicionarPaciente(novoPaciente));

        handleInicioPaciente();
    };

    return (
        <div>
            <div>
                <button className='botãoPaciente' onClick={handleInicioPaciente}>Inicio</button>
            </div>
            <div className='container-lg'>
                <form onSubmit={handleAdicionarPaciente} className='row g-3'>
                    <div className='col-md-6'>
                        <label>Nome: </label>
                        <input type="text" name='nome' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-3'>
                        <label>Telefone: </label>
                        <input type="text" name='telefone' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-3'>
                        <label>CPF: </label>
                        <input type="text" name='cpf' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-5'>
                        <label>Endereço: </label>
                        <input type="text" name='endereco' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-3'>
                        <label>Cidade: </label>
                        <input type="text" name='cidade' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-4'>
                        <label>Responsável</label>
                        <select name='responsavel' onChange={(e) => handleMudanca(e)}>
                            <option value={null}>Escolha...</option>
                            {Pacientes.map((Paciente) => (
                                <option key={Paciente.cpf} value={Paciente.cpf}>
                                    {Paciente.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-4'>
                        <div>
                            <label>Alergias: </label>
                            <input type="text" className='inputListavel' name='alergias' onChange={(e) => setAlergiaInput(e.target.value)} />
                            <button type='button' id='botaoAlergias' className='botãoPaciente' onClick={handleAddAlergia}>+</button>
                        </div>
                        <ul className='lista-de-alergias'>
                            {novoPaciente['alergias'].map((alergia, index) => (
                                <li key={index}>
                                    {alergia}
                                    <button type='button' onClick={() => handleDeleteAlergia(index)}>X</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <div>
                            <label>Medicações: </label>
                            <input type="text" className='inputListavel' name='medicacoes' onChange={(e) => setMedicacoesInput(e.target.value)} />
                            <button type='button' id='botaoAlergias' className='botãoPaciente' onClick={handleAddMedicacoes}>+</button>
                        </div>
                        <ul className='lista-de-alergias'>
                            {novoPaciente['medicacoes'].map((medicacao, index) => (
                                <li key={index}>
                                    {medicacao}
                                    <button type='button' onClick={() => handleDeleteMedicacoes(index)}>X</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <div>
                            <label>Cirurgias: </label>
                            <input type="text" className='inputListavel' name='cirurgias' onChange={(e) => setCirurgiasInput(e.target.value)} />
                            <button type='button' id='botaoAlergias' className='botãoPaciente' onClick={handleAddCirurgias}>+</button>
                        </div>
                        <ul className='lista-de-alergias'>
                            {novoPaciente['cirurgias'].map((Cirurgia, index) => (
                                <li key={index}>
                                    {Cirurgia}
                                    <button type='button' onClick={() => handleDeleteCirurgia(index)}>X</button>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <button className='botãoPaciente' type="submit">Adicionar Paciente</button>
                </form>
            </div>
        </div>
    );
}

export default AdicionarPaciente;