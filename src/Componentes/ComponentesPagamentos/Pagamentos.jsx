import React, { useState } from 'react';
import AddPag from './addPag'
import PagPaci from './pagPaci'
import PagData from './pagData'

import '../styles.css';

function Pagamentos() {

  const [Modo, setModo] = useState('Inicial')

  const handleListarPagamentos = () => {
    setModo('Inicial')
  };

  const handleAdicionarPagamento = () => {
    setModo('Adicionar')
  };

  const handlePagamentoPorData = () => {
    setModo('Data')
  };

  const renderizarConteudo = () => {
    if (Modo === 'Inicial') {
      return <PagPaci handleAdicionarPagamento={handleAdicionarPagamento} handlePagamentoPorData={handlePagamentoPorData} />;
    }
    else if (Modo === 'Adicionar') {
      return <AddPag handleListarPagamentos={handleListarPagamentos} />;
    }
    else if (Modo === 'Data') {
      return <PagData handleListarPagamentos={handleListarPagamentos} handleAdicionarPagamento ={handleAdicionarPagamento} />;
    }
  }

  return (
    <div className="corpo">
      {renderizarConteudo()}
    </div>
  );
}

export default Pagamentos;