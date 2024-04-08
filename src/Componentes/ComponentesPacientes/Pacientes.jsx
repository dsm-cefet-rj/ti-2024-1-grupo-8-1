import React, { useState } from 'react';
import '../styles.css';
import PacData from '../Data/pacData';
import ListarPacientes from './ListarPacientes';
import AdicionarPaciente from './AdicionarPaciente';

function Pacientes() {
  //estado da aba (tela inicial ou no processo de adicionar alguém ou no processo de editar)
  const [Modo, setModo] = useState('Inicial')

  const handleAdicionarPaciente = () => {
    setModo('Adicionar');
  };

  const handleInicioPaciente = () => {
    setModo('Inicial');
  };

  const renderizarConteudo = () => {
    if (Modo === 'Inicial') {
      return <ListarPacientes ListaDePacientes={PacData} handleAdicionarPaciente={handleAdicionarPaciente} />;
    }
    else if (Modo === 'Adicionar') {
      return <div><AdicionarPaciente handleInicioPaciente={handleInicioPaciente} /></div>;
    }
  };

  return (
    <div className='corpo'>
      {renderizarConteudo()}
    </div>
  );
}

export default Pacientes;