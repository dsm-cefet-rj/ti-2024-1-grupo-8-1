import React, { useState } from 'react';
import './stylesAgenda.css';

const FormularioCompromisso = ({ onAdicionarCompromisso, ListaDePacientes }) => {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [sugestoes, setSugestoes] = useState([]);
  const [nomePaciente, setnomePaciente] = useState();
  const [cpfBuscado, setcpfBuscado] = useState();

  const onChangeNome = (e) => {
    setcpfBuscado(e.target.value)
    setnomePaciente(ListaDePacientes.filter((paciente) => paciente.cpf = cpfBuscado))
  }

  const handleSelecaoPaciente = (paciente) => {
    setTermoPesquisa(paciente.nome);
    setSugestoes([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdicionarCompromisso(e);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-compromisso">
      <div className='areaPaciente'>
        <input onChange={onChangeNome} />
        <div className='autocompleteNome'>
          <p>{nomePaciente}</p>
        </div>
      </div>
      <input type="text" placeholder="Descrição do compromisso" required />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FormularioCompromisso;