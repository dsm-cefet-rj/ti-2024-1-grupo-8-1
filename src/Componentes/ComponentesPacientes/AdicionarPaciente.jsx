import React, { useState } from 'react';
import './stylesPaciente.css';
import Pacientes from '../Data/pacData';



function AdicionarPaciente({ handleInicioPaciente }) {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [alergiaInput, setAlergiaInput] = useState('');
    const [alergias, setAlergias] = useState([]);
    const [responsavel, setResponsavel] = useState();
    const [medicacoesInput, setMedicacoesInput] = useState('');
    const [medicacoes, setMedicacoes] = useState([]);
    const [cirurgiasInput, setCirurgiasInput] = useState('');
    const [cirurgias, setCirurgias] = useState([]);


    const handleAddMedicacoes = (e) => {
        e.preventDefault();
        if (medicacoesInput.trim() !== '') {
            setMedicacoes([...medicacoes, medicacoesInput]);
            setMedicacoesInput('');
        }
    };

    const handleDeleteMedicacoes = (index) => {
        const newMedicacoes = [...medicacoes];
        newMedicacoes.splice(index, 1);
        setMedicacoes(newMedicacoes);
    };

    const handleAddCirurgias = (e) => {
        e.preventDefault();
        if (cirurgiasInput.trim() !== '') {
            setCirurgias([...cirurgias, cirurgiasInput]);
            setCirurgiasInput('');
        }
    };

    const handleDeleteCirurgia = (index) => {
        const newCirurgias = [...cirurgias];
        newCirurgias.splice(index, 1);
        setCirurgias(newCirurgias);
    };

    const handleAddAlergia = (e) => {
        e.preventDefault();
        if (alergiaInput.trim() !== '') {
            setAlergias([...alergias, alergiaInput]);
            setAlergiaInput('');
        }
    };

    const handleDeleteAlergia = (index) => {
        const newAlergias = [...alergias];
        newAlergias.splice(index, 1);
        setAlergias(newAlergias);
    };

    const handleAdicionarPaciente = (e) => {
        setNome('');
        setTelefone('');
        setCpf('');
        setEndereco('');
        setCidade('');
        setAlergias([]);
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
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className='col-md-3'>
                        <label>Telefone: </label>
                        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>
                    <div className='col-md-3'>
                        <label>CPF: </label>
                        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    </div>
                    <div className='col-md-5'>
                        <label>Endereço: </label>
                        <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    </div>
                    <div className='col-md-3'>
                        <label>Cidade: </label>
                        <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                    </div>
                    <div className='col-md-4'>
                        <label>Responsável</label>
                        <select id="inputState" className="form-select" onChange={(p) => setResponsavel(p.target.value)} >
                            <option>Escolha...</option>
                            {Pacientes.map((Paciente) => (
                                <option key={Paciente.nome} value={Paciente.nome}>
                                    {Paciente.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-4'>
                        <div>
                            <label>Alergias: </label>
                            <input type="text" value={alergiaInput} onChange={(e) => setAlergiaInput(e.target.value)} />
                            <button type='button' id='botaoAlergias' className='botãoPaciente' onClick={handleAddAlergia}>+</button>
                        </div>
                        <ul className='lista-de-alergias'>
                            {alergias.map((alergia, index) => (
                                <li key={index}>
                                    {alergia}
                                    <button onClick={() => handleDeleteAlergia(index)}>X</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <div>
                            <label>Medicações: </label>
                            <input type="text" value={medicacoesInput} onChange={(e) => setMedicacoesInput(e.target.value)} />
                            <button type='button' id='botaoAlergias' className='botãoPaciente' onClick={handleAddMedicacoes}>+</button>
                        </div>
                        <ul className='lista-de-alergias'>
                            {medicacoes.map((medicacao, index) => (
                                <li key={index}>
                                    {medicacao}
                                    <button onClick={() => handleDeleteMedicacoes(index)}>X</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <div>
                            <label>Cirurgias: </label>
                            <input type="text" value={cirurgiasInput} onChange={(e) => setCirurgiasInput(e.target.value)} />
                            <button type='button' id='botaoAlergias' className='botãoPaciente' onClick={handleAddCirurgias}>+</button>
                        </div>
                        <ul className='lista-de-alergias'>
                            {cirurgias.map((Cirurgia, index) => (
                                <li key={index}>
                                    {Cirurgia}
                                    <button onClick={() => handleDeleteCirurgia(index)}>X</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className='botãoPaciente' type="button">Adicionar Paciente</button>
                </form>
            </div >
        </div >
    );
}

export default AdicionarPaciente;
