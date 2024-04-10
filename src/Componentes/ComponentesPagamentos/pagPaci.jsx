import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

function PagPaci() {
  const pagamentos = useSelector((state) => state.listaPagamentos.pagamentos);

  return (
    <div>
      <h1>Pagamentos</h1>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Total</th>
          <th>Parcela</th>
          <th>Valor Parcela</th>
          <th>Data</th>
          <th>Em dia?</th>
        </tr>
      </thead>
      <tbody>
    {pagamentos.map((pagamento, index) => (
      <tr key={index}>
           <td>{pagamento.id}</td>
        <td>{pagamento.nome}</td>
        <td>{pagamento.cpf}</td>
        <td>{pagamento.valorTotal}</td>
        <td>{pagamento.parcela}</td>
        <td>{pagamento.valorParcela}</td>
        <td>{pagamento.data}</td>
        <td>{pagamento.emDia ? 'Sim' : 'Não'}</td>
      </tr>
    ))}
  </tbody>
    </Table>

          <hr />
        </div>
  );
}

export default PagPaci;