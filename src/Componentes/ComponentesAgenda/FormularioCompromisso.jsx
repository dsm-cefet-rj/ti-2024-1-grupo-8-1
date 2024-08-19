import React, { useState } from 'react';
import './stylesAgenda.css';

const FormularioCompromisso = ({ onAdicionarCompromisso, ListaDePacientes }) => {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [sugestoes, setSugestoes] = useState([]);

  const handleSelecaoPaciente = (paciente) => {
    setTermoPesquisa(paciente.nome);
    setSugestoes([]);
    document.getElementsByName('cpfPaciente')[0].value = paciente.cpf;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdicionarCompromisso(e);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-compromisso">
      <div className="autocomplete">
        <input
          type="text"
          name="nomePaciente"
          placeholder="Nome do paciente"
          autoComplete="on"
          list='OpcoesPacientes'
          required
        />
        <datalist id="OpcoesPacientes">
          {ListaDePacientes.map((paciente, index) => (
            <option key={index} value={paciente.nome} />
          ))}
        </datalist>
        <input type="hidden" name="cpfPaciente" required />
      </div>
      <input type="text" name="descricao" placeholder="Descrição do compromisso" required />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FormularioCompromisso;