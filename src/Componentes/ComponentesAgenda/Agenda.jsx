import React, { useState } from 'react';
import Calendario from './Calendario';
import Compromissos from './compromissos';
import FormularioCompromisso from './FormularioCompromisso';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createPagamento, deletePagamentoById, fetchPagamentos } from '../../features/listaPagamentosSlice';
import { fetchPacientes } from '../../features/listaPacientesSlice';
import { fetchConsultas, createConsulta, updateConsultaById, deleteConsultaById } from '../../features/listaConsultaSlice'
import { useEffect } from 'react';
import './stylesAgenda.css';

function Agenda() {
  const [dataAtual, setDataAtual] = useState(new Date());
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [horaSelecionada, setHoraSelecionada] = useState(null);
  const [compromissosDoDia, setcompromissosDoDia] = useState(null);

  const compromissos = useSelector((state) => state.listaConsulta.consultas);
  const ListaDePacientes = useSelector((state) => state.listaPacientes.Pacientes);
  const pagamentos = useSelector((state) => state.listaPagamentos.pagamentos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPacientes());
    dispatch(fetchConsultas());
    dispatch(fetchPagamentos());
  }, [dispatch]);

  useEffect(() => {
    if (dataSelecionada) {
      setcompromissosDoDia(compromissos.filter((compromisso) => {
        const dataCompromisso = new Date(compromisso.dia).toISOString().split('T')[0];
        const dataSelecionadaFormatada = dataSelecionada.toISOString().split('T')[0];
        return dataCompromisso === dataSelecionadaFormatada;
      }));
    }
  }, [compromissos, dataSelecionada]);

  const handleCliqueData = (dia) => {
    const data = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dia, 0);
    setDataSelecionada(data);
    setHoraSelecionada(null);
  };

  const handleCliqueHora = (hora) => {
    setHoraSelecionada(hora);
  };

  const handleAdicionarCompromisso = (e) => {
    const formulario = e.target;
    const cpfPaciente = formulario.elements.cpfPaciente.value;

    if (horaSelecionada == null) {
      alert("Selecione uma hora para o compromisso");
      return;
    }

    const novoCompromisso = {
      cpfPaciente: cpfPaciente,
      dia: dataSelecionada.toISOString().split('T')[0],
      hora: horaSelecionada,
      descricao: formulario.elements.descricao.value,
      observacoes: null,
    };

    dispatch(createConsulta(novoCompromisso));
    formulario.reset();
    setHoraSelecionada(null);
  };

  const onConclusaoCompromisso = (e, compromisso) => {
    const formulario = e.target;
    if (formulario.elements.controlePagamentos.value) {
      const novoPagamento = {
        valorTotal: formulario.elements.valor.value,
        parcela: formulario.elements.parcelas.value,
        metodo: formulario.elements.metodo.value,
        idConsulta: compromisso._id
      };
      dispatch(createPagamento(novoPagamento));

    }
    dispatch(updateConsultaById({ id: compromisso._id, data: compromisso }));
  };

  const onDeleteCompromisso = (compromisso) => {
    console.log(compromisso);
    var pagamentoDaConsulta = pagamentos.find((pagamento) => pagamento.idConsulta == compromisso);
    console.log(pagamentoDaConsulta);
    if (pagamentoDaConsulta) {
      dispatch(deletePagamentoById(pagamentoDaConsulta._id))
      console.log('vasco')
    }
    dispatch(deleteConsultaById(compromisso));
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
          onDeleteCompromisso={onDeleteCompromisso}
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
