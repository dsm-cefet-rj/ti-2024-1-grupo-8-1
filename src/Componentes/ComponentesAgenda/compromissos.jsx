import React, { useState } from 'react';
import './stylesAgenda.css';
import Popup from '../EDA/Popup';

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
        <form className='formularioConclusao' onSubmit={(e) => { e.preventDefault(); fecharPopup(); }}>
          <h4>Forma de Pagamento</h4>
          
          {/* Campo para inserir o valor total do pagamento */}
          <label>
            Valor Total:
            <input
              type="number"
              className='input-popup'
              placeholder="Insira o valor total"
              onChange={(e) => setValorTotal(parseFloat(e.target.value) || 0)} // Verificação para evitar valores indefinidos
              required
            />
          </label>
      
          {/* Campo para selecionar o método de pagamento */}
          <label>
            Método de Pagamento:
            <select className='select-popup'>
              <option value="cartaoCredito">Cartão de Crédito</option>
              <option value="cartaoDebito">Cartão de Débito</option>
              <option value="boleto">Boleto</option>
              <option value="dinheiro">Dinheiro</option>
            </select>
          </label>
          
          {/* Campo para selecionar a quantidade de parcelas */}
          <label>
            Parcelas:
            <select className='select-popup'>
              {[...Array(12)].map((_, index) => {
                const numParcelas = index + 1;
                const valorParcela = (valorTotal > 0 ? (valorTotal / numParcelas).toFixed(2) : 0); // Verificação para evitar divisão por zero
                return (
                  <option key={numParcelas} value={numParcelas}>
                    {numParcelas}x de R$ {valorParcela}
                  </option>
                );
              })}
            </select>
          </label>
      
          {/* Observações adicionais */}
          <textarea className='textarea-popup' placeholder="Observações sobre o atendimento"></textarea>
      
          {/* Botão para concluir */}
          <button type="submit">Concluir</button>
        </form>
      </Popup>
      )}
    </div>
  );
};

export default Compromissos;
