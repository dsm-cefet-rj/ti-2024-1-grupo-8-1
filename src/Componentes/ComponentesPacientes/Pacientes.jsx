import React, { useState } from 'react';
import '../styles.css';
import PacData from '../Data/pacData';
import ListarPacientes from './ListarPacientes';
import AdicionarPaciente from './AdicionarPaciente';  

function Pacientes() {
  const [Modo, setModo] = useState('Inicial')

  const handleVisualizarPaciente = (index) => {
    setModo('Visualizar');
  }

  const handleAdicionarPaciente = () => {
    setModo('Adicionar');
  };

  const handleInicioPaciente = () => {
    setModo('Inicial');
  };

  const renderizarConteudo = () => {
    if (Modo === 'Inicial') {
      return <ListarPacientes  handleAdicionarPaciente={handleAdicionarPaciente} handleVisualizarPaciente={handleVisualizarPaciente}/>;
    }
    else if (Modo === 'Adicionar') {
      return <div><AdicionarPaciente handleInicioPaciente={handleInicioPaciente} /></div>;
    }
    else if (Modo === 'Visualizar') {
      return <div><AdicionarPaciente handleInicioPaciente={handleInicioPaciente}  /></div>;
    }
  };

  return (
    <div className='corpo'>
      {renderizarConteudo()}
    </div>
  );
}

export default Pacientes;