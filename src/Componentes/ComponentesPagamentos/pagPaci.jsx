import React from 'react';
import { useSelector } from 'react-redux';

function PagPaci() {
  const pagamentos = useSelector((state) => state.listaPagamentos.pagamentos);

  return (
    <div>
      <h1>Pagamentos</h1>
      {pagamentos.map((pagamento, index) => (
        <div key={index}>
          <p>Nome: {pagamento.nome}</p>
          <p>CPF: {pagamento.cpf}</p>
          <p>Valor Total: {pagamento.valorTotal}</p>
          <p>Parcela: {pagamento.parcela}</p>
          <p>Valor Parcela: {pagamento.valorParcela}</p>
          <p>Data: {pagamento.data}</p>
          <p>Em Dia: {pagamento.emDia ? 'Sim' : 'Não'}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PagPaci;