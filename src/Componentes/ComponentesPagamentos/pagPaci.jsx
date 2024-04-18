import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { rmvPag } from '../../features/listaPagamentosSlice';

function PagPaci() {
  const pagamentos = useSelector((state) => state.listaPagamentos.pagamentos);
  const dispatch = useDispatch();

  const handleClickRmv = (id) => {
    dispatch(rmvPag(id));
  };

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
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {pagamentos.map((pagamento) => (
            <tr key={pagamento.id}>
              <td>{pagamento.id}</td>
              <td>{pagamento.nome}</td>
              <td>{pagamento.cpf}</td>
              <td>{pagamento.valorTotal}</td>
              <td>{pagamento.parcela}</td>
              <td>{pagamento.valorParcela}</td>
              <td>{pagamento.data}</td>
              <td>{pagamento.emDia ? 'Sim' : 'Não'}</td>
              <td>
                <button onClick={() => handleClickRmv(pagamento.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
    </div>
  );
}

export default PagPaci;
