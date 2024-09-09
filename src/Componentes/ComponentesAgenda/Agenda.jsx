import React, { useState } from 'react';
import Calendario from './Calendario';
import Compromissos from './compromissos';
import FormularioCompromisso from './FormularioCompromisso';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchPacientes } from '../../features/listaPacientesSlice';
import createConsulta from '../../features/listaConsultaSlice'
import { useEffect } from 'react';
import './stylesAgenda.css';

function Agenda() {
  const [dataAtual, setDataAtual] = useState(new Date());
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [horaSelecionada, setHoraSelecionada] = useState(null);
  const [compromissos, setCompromissos] = useState({});
  const ListaDePacientes = useSelector((state) => state.listaPacientes.Pacientes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPacientes());
  }, []);

  const handleCliqueData = (dia) => {
    const data = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dia);
    setDataSelecionada(data);
    setHoraSelecionada(null);
  };

  const handleCliqueHora = (hora) => {
    setHoraSelecionada(hora);
  };

  const handleAdicionarCompromisso = (e) => {
    const formulario = e.target;
    const cpfPaciente = formulario.elements.cpfPaciente.value;

    const novoCompromisso = {
      nomePaciente: formulario.elements.nomePaciente.value,
      descricao: formulario.elements.descricao.value,
      cpfPaciente: cpfPaciente,

      idPagamento: '',
      observacoes: ''
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
          compromissos={compromissos}
          dataSelecionada={dataSelecionada}
          horaSelecionada={horaSelecionada}
          onCliqueHora={handleCliqueHora}
          onConclusaoCompromisso={onConclusaoCompromisso}
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