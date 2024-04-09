import React, { useState } from 'react';
import './stylesPaciente.css';

function AdicionarPaciente({ handleInicioPaciente }) {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [alergiaInput, setAlergiaInput] = useState(''); // Estado para o campo de entrada de alergias
    const [alergias, setAlergias] = useState([]); // Estado para armazenar as alergias

    const handleAddAlergia = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página
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
        // Aqui você pode enviar os dados do novo paciente, incluindo as alergias, para onde quer que eles precisem ir
        console.log({
            nome,
            telefone,
            cpf,
            endereco,
            cidade,
            alergias
        });

        // Após adicionar o paciente, você pode limpar os campos do formulário e o estado das alergias
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
            <div>
                <form onSubmit={handleAdicionarPaciente}>
                    <div>
                        <label>Nome: </label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div>
                        <label>Telefone: </label>
                        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>
                    <div>
                        <label>CPF: </label>
                        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    </div>
                    <div>
                        <label>Endereço: </label>
                        <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    </div>
                    <div>
                        <label>Cidade: </label>
                        <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                    </div>
                    {/* Campo de entrada para adicionar alergias */}
                    <div>
                        <label>Alergias: </label>
                        <input type="text" value={alergiaInput} onChange={(e) => setAlergiaInput(e.target.value)} />
                        <button id='botaoAlergias' className='botãoPaciente' onClick={handleAddAlergia}>+</button>
                    </div>
                    {/* Lista de alergias adicionadas */}
                    <ul className='lista-de-alergias'>
                        {alergias.map((alergia, index) => (
                            <li key={index}>
                                {alergia}
                                <button onClick={() => handleDeleteAlergia(index)}>X</button>
                            </li>
                        ))}
                    </ul>
                    <button className='botãoPaciente' type="submit">Adicionar Paciente</button>
                </form>
            </div >
        </div >
    );
}

export default AdicionarPaciente;
