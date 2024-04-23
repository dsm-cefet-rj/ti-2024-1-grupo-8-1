import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarConsulta } from '../../features/listaConsultaSlice'
import { removerAgenda } from '../../features/listaAgendaSlice';
import { adicionarPaciente } from '../../features/listaPacientesSlice';

export function ConcluirConsulta({ handleConsultasMarcadas, handleConsultasConcluidas, consultaM }) {

    const [novaConsultaConcluida, setNovaConsultaConcluida] = useState({

        ...consultaM,
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
        handleRemoverAgenda();
        handleConsultasConcluidas();
    };

    const handleRemoverAgenda = (e) =>{
        dispatch(removerAgenda(consultaM.id))
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
                        <input type="text" name='id' value={consultaM.id}  />
                    </div>
                    <div className='col-md-4'>
                        <label>Título: </label>
                        <input type="text" name='title' value={consultaM.title}  />
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
                            <option value= "com">Com</option>
                            <option value= "sem">Sem</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <label>Descrição:</label>
                        <textarea className="col-12" type="text" name='descrição' onChange={(e) => handleMudanca(e)} />
                    </div>


                    <button type="submit" className="botãoConsulta"> Confirmar</button>
                </form>
            </div>
        </div>
    );
}

export default ConcluirConsulta;