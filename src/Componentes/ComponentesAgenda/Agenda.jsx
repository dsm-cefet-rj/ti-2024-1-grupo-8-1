import React, { useState } from 'react';
import Calendario from './Calendario';
import Compromissos from './compromissos';
import FormularioCompromisso from './FormularioCompromisso';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchPacientes } from '../../features/listaPacientesSlice';
import { fetchConsultas, createConsulta } from '../../features/listaConsultaSlice'
import { useEffect } from 'react';
import './stylesAgenda.css';

function Agenda() {
  const [dataAtual, setDataAtual] = useState(new Date());
  const [dataSelecionada, setDataSelecionada] = useState(new Date);
  const [horaSelecionada, setHoraSelecionada] = useState(null);
  const [compromissosDoDia, setcompromissosDoDia] = useState(null);
  const compromissos = useSelector((state) => state.listaConsulta.consultas);
  const ListaDePacientes = useSelector((state) => state.listaPacientes.Pacientes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPacientes());
    dispatch(fetchConsultas());
  }, []);

  const handleCliqueData = (dia) => {
    const data = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dia);
    setDataSelecionada(data);
    setHoraSelecionada(null);
    setcompromissosDoDia(compromissos.filter((compromisso) => compromisso.dia == data.toISOString()));
  };

  const handleCliqueHora = (hora) => {
    setHoraSelecionada(hora);
  };

  const handleAdicionarCompromisso = (e) => {
    const formulario = e.target;
    const cpfPaciente = formulario.elements.cpfPaciente.value;

    if(horaSelecionada == null){
      alert("Selecione uma hora para o compromisso");
      return 0;
    }

    const novoCompromisso = {
      cpfPaciente: cpfPaciente,
      dia: dataSelecionada,
      hora: horaSelecionada,
      descricao: formulario.elements.descricao.value,

      idPagamento: null,
      observacoes: null
    };

    dispatch(createConsulta(novoCompromisso))
    formulario.reset();
    setHoraSelecionada(null);
  };

  const onConclusaoCompromisso = (compromisso) => {

  }

  const alterarMes = (mes) => {
    setDataAtual((prev) => new Date(prev.setMonth(prev.getMonth() + mes)));
  };

  return (
    <div className="container">
      <div className="topo">
        <Calendario
          dataAtual={dataAtual}
          dataSelecionada={dataSelecionada}
          onCliqueData={handleCliqueData}
          alterarMes={alterarMes}
        />
        <Compromissos
          compromissosDoDia={compromissosDoDia}
          dataSelecionada={dataSelecionada}
          horaSelecionada={horaSelecionada}
          onCliqueHora={handleCliqueHora}
          onConclusaoCompromisso={onConclusaoCompromisso}
          ListaDePacientes={ListaDePacientes}
        />
      </div>
      <FormularioCompromisso
        onAdicionarCompromisso={handleAdicionarCompromisso}
        ListaDePacientes={ListaDePacientes}
      />
    </div>
  );
}

export default Agenda;