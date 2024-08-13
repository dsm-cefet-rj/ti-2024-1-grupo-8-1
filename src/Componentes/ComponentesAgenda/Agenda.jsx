import React, { useState } from 'react';
import './stylesAgenda.css';

function Agenda() {
  const [dataAtual, setDataAtual] = useState(new Date());
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [horaSelecionada, setHoraSelecionada] = useState(null);
  const [compromissos, setCompromissos] = useState({});
  const [detalhesCompromisso, setDetalhesCompromisso] = useState([]);

  const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const gerarHorarios = () => {
    const horarios = [];
    for (let hora = 8; hora <= 20; hora++) {
      for (let minutos = 0; minutos < 60; minutos += 15) {
        const horario = `${hora.toString().padStart(2, '0')}:${minutos
          .toString()
          .padStart(2, '0')}`;
        horarios.push(horario);
      }
    }
    return horarios;
  };

  const horarios = gerarHorarios();

  const diasNoMes = (mes, ano) => new Date(ano, mes + 1, 0).getDate();

  const handleCliqueData = (dia) => {
    const data = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dia);
    setDataSelecionada(data);
    setHoraSelecionada(null);
  };

  const handleCliqueHora = (hora) => {
    setHoraSelecionada(hora);
    setDetalhesCompromisso(compromissos[dataSelecionada]?.[hora] || []);
  };

  const handleAdicionarCompromisso = (e) => {
    e.preventDefault();
    const formulario = e.target;
    const novoCompromisso = {
      descricao: formulario.elements.descricao.value,
      detalhes: formulario.elements.detalhes.value,
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

  const renderizarDiasCalendario = () => {
    const dias = [];
    const primeiroDia = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1).getDay();
    const totalDias = diasNoMes(dataAtual.getMonth(), dataAtual.getFullYear());

    for (let i = 0; i < primeiroDia; i++) {
      dias.push(<div key={`vazio-${i}`} className="celula-vazia" />);
    }

    for (let dia = 1; dia <= totalDias; dia++) {
      dias.push(
        <div
          key={dia}
          className={`celula-dia ${dataSelecionada?.getDate() === dia ? 'selecionado' : ''}`}
          onClick={() => handleCliqueData(dia)}
        >
          {dia}
        </div>
      );
    }

    const celulasRestantes = 7 - ((primeiroDia + totalDias) % 7);
    if (celulasRestantes < 7) {
      for (let i = 0; i < celulasRestantes; i++) {
        dias.push(<div key={`vazio-${i + primeiroDia + totalDias}`} className="celula-vazia" />);
      }
    }

    return dias;
  };

  const alterarMes = (incremento) => {
    const novaData = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + incremento, 1);
    setDataAtual(novaData);
    setDataSelecionada(null);
    setHoraSelecionada(null);
  };

  const renderizarListaCompromissos = () => {
    if (!dataSelecionada) return null;

    const compromissosDoDia = compromissos[dataSelecionada] || {};

    return (
      <div className="lista-compromissos">
        <h3>Compromissos para {dataSelecionada.toDateString()}</h3>
        <ul>
          {horarios.map((hora) => (
            <li
              key={hora}
              className={`hora ${horaSelecionada === hora ? 'selecionado' : ''}`}
              onClick={() => handleCliqueHora(hora)}
            >
              <strong>{hora}:</strong> {compromissosDoDia[hora] ? `(${compromissosDoDia[hora].length}) compromisso(s)` : 'Nenhum compromisso'}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderizarDetalhesCompromissos = () => {
    return (
      <div className="detalhes-compromissos">
        {detalhesCompromisso.length > 0 ? (
          detalhesCompromisso.map((compromisso, index) => (
            <div key={index} className="card-compromisso">
              <h4>{compromisso.descricao}</h4>
              <p>{compromisso.detalhes}</p>
            </div>
          ))
        ) : (
          <p>Nenhum detalhe disponível.</p>
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="topo">
        <div className="calendario">
          <div className="cabecalho">
            <button onClick={() => alterarMes(-1)}>Anterior</button>
            <h2>{dataAtual.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</h2>
            <button onClick={() => alterarMes(1)}>Próximo</button>
          </div>
          <div className="grade-calendario">
            {diasDaSemana.map((dia, index) => (
              <div key={index} className="nome-dia">
                {dia}
              </div>
            ))}
            {renderizarDiasCalendario()}
          </div>
        </div>
        <div className="compromissos">
          {renderizarListaCompromissos()}
        </div>
      </div>
      <div className="formulario-e-detalhes">
        <form onSubmit={handleAdicionarCompromisso} className="formulario-compromisso">
          <input type="text" name="descricao" placeholder="Descrição do compromisso" required />
          <textarea name="detalhes" placeholder="Detalhes adicionais" required />
          <button type="submit">Adicionar</button>
        </form>
        {renderizarDetalhesCompromissos()}
      </div>
    </div>
  );
};

export default Agenda;
