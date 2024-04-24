import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarConsulta } from '../../features/listaConsultaSlice'
import { removerAgenda } from '../../features/listaAgendaSlice';
import { adicionarPaciente } from '../../features/listaPacientesSlice';

export function ConcluirConsulta({ handleConsultasMarcadas, handleConsultasConcluidas, consultaM, handleAddPag }) {

    const [novaConsultaConcluida, setNovaConsultaConcluida] = useState({

        ...consultaM,
        pagamento: "",
        descrição: ""
    })

    const dispatch = useDispatch();
    const [statusPagamento, setStatusPagamento] = useState('')

    const handleMudanca = (e) => {
        const { name, value } = e.target;
        if (value === "com" || value === "sem") {
            setStatusPagamento(value)
        }else if(name === "pagamento"){
            setStatusPagamento('')
        }
        setNovaConsultaConcluida({
            ...novaConsultaConcluida,
            [name]: value,
        });
    };

    const handleConcluirConsulta = (e) => {
        console.log(novaConsultaConcluida);
        alert("vasco")
        dispatch(adicionarConsulta(novaConsultaConcluida));
        handleRemoverAgenda();
        if (statusPagamento === "sem") {
            handleConsultasConcluidas();
        } else if (statusPagamento === "com") {
            handleAddPag(novaConsultaConcluida);
        }

    };

    const handleRemoverAgenda = (e) => {
        dispatch(removerAgenda(consultaM.id))
    }

    const handleBotaoConfirmar = (statusPagamento) => {
        if(statusPagamento === "com"){
            return <button type="submit" className="botãoConsulta"> Confirmar Com Pagamento</button>
        }else if(statusPagamento === "sem"){
            return <button type="submit" className="botãoConsulta"> Confirmar Sem Pagamento</button>
        }else{
            return <span className="botãoConsulta">Defina o Status de Pagamento</span>
        }
    }

    return (
        <div>
            <div>
                <button className='botãoConsulta' onClick={handleConsultasMarcadas}>Consultas Marcadas</button>
                <button className='botãoConsulta' onClick={handleConsultasConcluidas}>Consultas Concluidas</button>
            </div>
            <div className="container-lg">
                <form onSubmit={handleConcluirConsulta} className='row g-3'>
                    <div className='col-md-4'>
                        <label>Id: </label>
                        <input type="text" name='id' value={consultaM.id} />
                    </div>
                    <div className='col-md-4'>
                        <label>Título: </label>
                        <input type="text" name='title' value={consultaM.title} />
                    </div>
                    <div className='col-md-4'>
                        <label>Paciente: </label>
                        <input type="text" name='paciente' value={consultaM.paciente} />
                    </div>
                    <div className='col-md-4'>
                        <label>Data: </label>
                        <input type="text" name='data' value={consultaM.data} />
                    </div>
                    <div className='col-md-4'>
                        <label>Hora: </label>
                        <input type="text" name='hora' value={consultaM.hora} />
                    </div>
                    <div className="col-md-4">
                        <label>Pagamento:</label>
                        <select name='pagamento' onChange={(e) => handleMudanca(e)}>
                            <option>Escolha...</option>
                            <option key="com" value="com">Com</option>
                            <option key="sem" value="sem">Sem</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <label>Descrição:</label>
                        <textarea className="col-12" type="text" name='descrição' onChange={(e) => handleMudanca(e)} />
                    </div>

                    {handleBotaoConfirmar(statusPagamento)};
                </form>
            </div>
        </div>
    );
}

export default ConcluirConsulta;