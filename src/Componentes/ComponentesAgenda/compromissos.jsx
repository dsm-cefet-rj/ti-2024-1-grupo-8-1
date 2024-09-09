import React, { useState } from 'react';
import './stylesAgenda.css';
import Popup from '../EDA/Popup';
import ConclusaoCompromisso from './ConclusaoCompromisso';

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

const Compromissos = ({ compromissos, dataSelecionada, horaSelecionada, onCliqueHora, onConclusaoCompromisso }) => {
  const [compromissoAtual, setCompromissoAtual] = useState(null);
  const [valorTotal, setValorTotal] = useState(0);

  const handleConcluirCompromisso = (compromisso) => {
    setCompromissoAtual(compromisso);
  };

  const fecharPopup = () => {
    setCompromissoAtual(null);
  };

  const compromissosDoDia = compromissos[dataSelecionada] || {};

  return (
    <div className="compromissos">
      {!dataSelecionada ? (
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
      ) : (
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
                    <div>
                      <h4>{compromisso.nomePaciente}</h4>
                      <p>{compromisso.descricao}</p>
                      {/* <p>Status: {compromisso.status}<p/> */}
                    </div>
                    <button
                      className="botao-concluir"
                      onClick={() => handleConcluirCompromisso(compromisso)}
                    >
                      Concluir
                    </button>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}

      {compromissoAtual && (
        <Popup className='popupconcluir' titulo={`Atendimento com ${compromissoAtual.nomePaciente}`} onClose={fecharPopup}>
          <ConclusaoCompromisso fecharPopup={fecharPopup} onConclusaoCompromisso={onConclusaoCompromisso}/>
        </Popup>
      )}
    </div>
  );
};

export default Compromissos;
