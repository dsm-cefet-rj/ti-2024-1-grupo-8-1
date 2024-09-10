import React, { useState, useEffect } from "react";

const ConclusaoCompromisso = ({ fecharPopup, onConclusaoCompromisso, compromissoAtual, ListaDePacientes, onDeleteCompromisso }) => {
    const [compromissoNovo, setcompmissoNovo] = useState(compromissoAtual);
    const [valorTotal, setValorTotal] = useState(0);
    const [metodoPagamento, setMetodoPagamento] = useState('cartaoCredito');
    const [parcelas, setParcelas] = useState(1);
    const [observacoes, setObservacoes] = useState(compromissoAtual.observacoes || '');
    const [nomePaciente, setNomePaciente] = useState('');
    const [habilitarPagamentos, setHabilitarPagamentos] = useState(false);

    useEffect(() => {
        const pacienteEncontrado = ListaDePacientes.find((paciente) => paciente.cpf === compromissoNovo.cpfPaciente);
        if (pacienteEncontrado) {
            setNomePaciente(pacienteEncontrado.nome);
        } else {
            setNomePaciente('');
        }
    }, [compromissoNovo.cpfPaciente, ListaDePacientes]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const compromissoFinalizado = {
            ...compromissoNovo,
            observacoes: observacoes 
        };
    
        onConclusaoCompromisso(e, compromissoFinalizado);
        fecharPopup();
    };

    const handleMudancaCompromisso = (e) => {
        const { name, value } = e.target;
        setcompmissoNovo((prevCompromisso) => ({
            ...prevCompromisso,
            [name]: value
        }));
    };

    const handleDeleteCompromisso = () => {
        onDeleteCompromisso(compromissoNovo._id);
        fecharPopup();
    }

    const onChangeCPF = (e) => {
        const cpf = e.target.value;
        setcompmissoNovo((prevCompromisso) => ({
            ...prevCompromisso,
            cpfPaciente: cpf
        }));

        const pacienteEncontrado = ListaDePacientes.find((paciente) => paciente.cpf === cpf);
        if (pacienteEncontrado) {
            setNomePaciente(pacienteEncontrado.nome);
        } else {
            setNomePaciente('');
        }
    };

    const onChangeNome = (e) => {
        const nome = e.target.value;
        setNomePaciente(nome);

        const pacienteEncontrado = ListaDePacientes.find((paciente) => paciente.nome === nome);
        if (pacienteEncontrado) {
            setcompmissoNovo((prevCompromisso) => ({
                ...prevCompromisso,
                cpfPaciente: pacienteEncontrado.cpf
            }));
        } else {
            setcompmissoNovo((prevCompromisso) => ({
                ...prevCompromisso,
                cpfPaciente: ''
            }));
        }
    };

    return (
        <form className='formularioConclusao' onSubmit={handleSubmit}>
            <div className="infoAgendamento">
                <div className="areaPaciente">
                    <div className='cpfInput'>
                        <label>CPF do Paciente</label>
                        <input type="text" placeholder="CPF do Paciente" name='cpfPaciente' onChange={onChangeCPF} value={compromissoNovo.cpfPaciente} required />
                    </div>

                    <div className='nomeInput'>
                        <label>Nome do Paciente</label>
                        <input type="text" placeholder="Nome do Paciente" name='nomePaciente' onChange={onChangeNome} value={nomePaciente} list="pacientes" required />
                    </div>
                </div>
                <div className="dataHoraInputs">
                    <label>Data
                        <input type="date" name="dia" value={compromissoNovo.dia} onChange={handleMudancaCompromisso} required />
                    </label>
                    <label>Hora
                        <input type="time" name="hora" value={compromissoNovo.hora} onChange={handleMudancaCompromisso} required />
                    </label>
                </div>

                <label>Descrição
                    <input type="text" name='descricao' value={compromissoNovo.descricao} onChange={handleMudancaCompromisso} required />
                </label>
            </div>

            <div className="controlePagamentos">
                <label>
                    <input
                        type="checkbox"
                        checked={habilitarPagamentos}
                        name="controlePagamentos"
                        onChange={() => setHabilitarPagamentos(!habilitarPagamentos)}
                    />
                    Concluir Consulta
                </label>
            </div>

            <div className="pagamentos">
                <label>
                    Valor Total:
                    <input
                        type="number"
                        className='input-popup'
                        name="valor"
                        placeholder="Insira o valor total"
                        onChange={(e) => setValorTotal(parseFloat(e.target.value) || 0)}
                        disabled={!habilitarPagamentos}
                    />
                </label>
                <label>
                    Método de Pagamento:
                    <select
                        className='select-popup'
                        value={metodoPagamento}
                        name="metodo"
                        onChange={(e) => setMetodoPagamento(e.target.value)}
                        disabled={!habilitarPagamentos}
                    >
                        <option value="cartaoCredito">Cartão de Crédito</option>
                        <option value="cartaoDebito">Cartão de Débito</option>
                        <option value="boleto">Boleto</option>
                        <option value="dinheiro">Dinheiro</option>
                    </select>
                </label>
                <label>
                    Parcelas:
                    <select
                        className='select-popup'
                        value={parcelas}
                        name="parcelas"
                        onChange={(e) => setParcelas(parseInt(e.target.value))}
                        disabled={!habilitarPagamentos}
                    >
                        {[...Array(12)].map((_, index) => {
                            const numParcelas = index + 1;
                            const valorParcela = (valorTotal > 0 ? (valorTotal / numParcelas).toFixed(2) : 0);
                            return (
                                <option key={numParcelas} value={numParcelas}>
                                    {numParcelas}x de R$ {valorParcela}
                                </option>
                            );
                        })}
                    </select>
                </label>
            </div>

            <label>Observações
                <textarea
                    className='textarea-popup'
                    placeholder="Observações sobre o atendimento"
                    name="observacoes"
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}
                ></textarea>
            </label>

            <div>
                <button type="button" onClick={handleDeleteCompromisso}>Deletar</button>
                <button type="submit">Concluir</button>
            </div>
        </form>
    );
};

export default ConclusaoCompromisso;
