import React from 'react';
import './stylesAgenda.css';

const gerarHorarios = () => {
  const horarios = [];
  for (let hora = 8; hora <= 20; hora++) {
    for (let minutos = 0; minutos < 60; minutos += 15) {
      const horario = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
      horarios.push(horario);
    }
  }
  return horarios;
};

const Compromissos = ({ compromissos, dataSelecionada, horaSelecionada, onCliqueHora }) => {
  const renderizarListaCompromissos = () => {
    if (!dataSelecionada) {
      return (
        <div className="lista-compromissos">
          <h3>Nenhum dia selecionado</h3>
          <ul>
            {gerarHorarios().map((hora) => (
              <li key={hora} className={`hora ${horaSelecionada === hora ? 'selecionado' : ''}`}>
                <strong>{hora}:</strong> Nenhum compromisso
              </li>
            ))}
          </ul>
        </div>
      );
    }

    const compromissosDoDia = compromissos[dataSelecionada] || {};

    return (
      <div className="lista-compromissos">
        <h3>Compromissos para {dataSelecionada.toDateString()}</h3>
        <ul>
          {gerarHorarios().map((hora) => (
            <li
              key={hora}
              className={`hora ${horaSelecionada === hora ? 'selecionado' : ''}`}
              onClick={() => onCliqueHora(hora)}
            >
              <strong>{hora}:</strong>
              {compromissosDoDia[hora] ? ` (${compromissosDoDia[hora].length}) compromisso(s)` : ' Nenhum compromisso'}
              {compromissosDoDia[hora]?.map((compromisso, index) => (
                <div key={index} className="card-compromisso">
                  <h4>{compromisso.nomePaciente}</h4>
                  <p>{compromisso.descricao}</p>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="compromissos">
      {renderizarListaCompromissos()}
    </div>
  );
};

export default Compromissos;
