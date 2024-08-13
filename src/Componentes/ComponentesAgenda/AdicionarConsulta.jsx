import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarAgenda } from '../../features/listaAgendaSlice';

export default function AdicionarConsulta({handleConsultasMarcadas}){

    const[novaConsulta, setNovaConsulta] = useState({
      
        id: "",
        title: "",
        start: "",
        end: "",
        paciente: "",
    })
      
    const Pacientes = useSelector((state) => state.listaPacientes.Pacientes);

    const dispatch = useDispatch();

    const handleMudanca = (e) => {
        const { name, value } = e.target;
        setNovaConsulta({
            ...novaConsulta,
            [name]: value,
        });
    };

    const handleAdicionarConsulta = (e) => {
        console.log(novaConsulta);
        alert("vasco")
        dispatch(adicionarAgenda(novaConsulta));

        handleConsultasMarcadas();
    };
      
    return(
        <div className="adicionarConsulta">
            <div>
                <button className='botãoConsulta' onClick={handleConsultasMarcadas}>Consultas</button>
            </div>
            <div className='container-lg'>
                <form onSubmit={handleAdicionarConsulta} className='row g-3'>
                    <div className='col-md-6'>
                        <label>Id: </label>
                        <input type="text" name='id' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-6'>
                        <label>Título: </label>
                        <input type="text" name='title' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-4'>
                        <label>Paciente</label>
                        <select name='paciente' onChange={(e) => handleMudanca(e)}>
                            <option value={null}>Escolha...</option>
                            {Pacientes.map((Paciente) => (
                            <option key={Paciente.cpf} value={Paciente.cpf}>
                                {Paciente.nome}
                            </option>
                            ))}
                        </select>
                    </div>

                    <div className='col-md-4'>
                        <label>Data: </label>
                        <input type="text" name='data' onChange={(e) => handleMudanca(e)} />
                    </div>
                    <div className='col-md-4'>
                        <label>Hora: </label>
                        <input type="text" name='hora' onChange={(e) => handleMudanca(e)} />
                    </div>
                    
                    <button className='botãoConsulta' type="submit">Adicionar Consulta</button>
                </form>
            </div>
        </div>
    )
      
}