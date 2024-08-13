import React, { useState } from 'react';
import './stylesAgenda.css';

const FormularioCompromisso = ({ onAdicionarCompromisso, ListaDePacientes }) => {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [sugestoes, setSugestoes] = useState([]);

  const handlePesquisaPaciente = (e) => {
    const termo = e.target.value;
    setTermoPesquisa(termo);

    if (termo.length > 0) {
      const filtrados = ListaDePacientes.filter((paciente) =>
        paciente.nome.toLowerCase().includes(termo.toLowerCase())
      );
      setSugestoes(filtrados);
    } else {
      setSugestoes([]);
    }
  };

  const handleSelecaoPaciente = (paciente) => {
    setTermoPesquisa(paciente.nome);
    setSugestoes([]);
    document.getElementsByName('cpfPaciente')[0].value = paciente.cpf;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdicionarCompromisso(e);
    setTermoPesquisa(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-compromisso">
      <div className="autocomplete">
        <input
          type="text"
          name="nomePaciente"
          placeholder="Nome do paciente"
          value={termoPesquisa}
          onChange={handlePesquisaPaciente}
          autoComplete="off"
          required
        />
        <input type="hidden" name="cpfPaciente" required />
        {sugestoes.length > 0 && (
          <ul className="sugestoes">
            {sugestoes.map((paciente) => (
              <li key={paciente.cpf} onClick={() => handleSelecaoPaciente(paciente)}>
                {paciente.nome}
              </li>
            ))}
          </ul>
        )}
      </div>
      <input type="text" name="descricao" placeholder="Descrição do compromisso" required />
      <textarea name="detalhes" placeholder="Detalhes adicionais" required />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FormularioCompromisso;