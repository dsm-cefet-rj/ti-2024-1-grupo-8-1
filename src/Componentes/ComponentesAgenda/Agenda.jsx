import React, { useState } from 'react';
import Calendario from './Calendario';
import Compromissos from './compromissos';
import FormularioCompromisso from './FormularioCompromisso';
import { useSelector } from 'react-redux';
import './stylesAgenda.css';

function Agenda() {
  const [dataAtual, setDataAtual] = useState(new Date());
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [horaSelecionada, setHoraSelecionada] = useState(null);
  const [compromissos, setCompromissos] = useState({});
  const ListaDePacientes = useSelector((state) => state.listaPacientes.Pacientes);

  const handleCliqueData = (dia) => {
    const data = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dia);
    setDataSelecionada(data);
    setHoraSelecionada(null);
  };

  const handleCliqueHora = (hora) => {
    setHoraSelecionada(hora);
  };

  const handleAdicionarCompromisso = (e) => {
    e.preventDefault();
    const formulario = e.target;
    const cpfPaciente = formulario.elements.cpfPaciente.value;
    
    if (!ListaDePacientes.some(paciente => paciente.cpf === cpfPaciente)) {
      alert('Paciente não encontrado. Certifique-se de selecionar um paciente existente.');
      return;
    }
    
    const novoCompromisso = {
      nomePaciente: formulario.elements.nomePaciente.value,
      descricao: formulario.elements.descricao.value,
      detalhes: formulario.elements.detalhes.value,
      cpfPaciente: cpfPaciente,
    };

    if (novoCompromisso.descricao && dataSelecionada && horaSelecionada) {
      setCompromissos((prevCompromissos) => ({
        ...prevCompromissos,
        [dataSelecionada]: {
          ...prevCompromissos[dataSelecionada],
          [horaSelecionada]: [
            ...(prevCompromissos[dataSelecionada]?.[horaSelecionada] || []),
            novoCompromisso,
          ],
        },
      }));
      formulario.reset();
      setHoraSelecionada(null);
    }
  };

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