import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { rmvPag } from '../../features/listaPagamentosSlice';

function PagPaci() {
  const pagamentos = useSelector((state) => state.listaPagamentos.pagamentos);
  const dispatch = useDispatch();
  const [filtroCPF, setFiltroCPF] = useState('');

  const handleClickRmv = (id) => {
    dispatch(rmvPag(id));
  };

  const handleFiltroCPFChange = (event) => {
    setFiltroCPF(event.target.value);
  };

  const pagamentosFiltrados = pagamentos.filter((pagamento) => {
    const cpfFormatado = pagamento.cpf.replace(/[^\d]/g, '');
    return cpfFormatado.includes(filtroCPF);
  });

  return (
    <div>
      <h1>Pagamentos</h1>
      <input type="text" value={filtroCPF} onChange={handleFiltroCPFChange} placeholder="Filtrar por CPF" />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
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
          {pagamentosFiltrados.map((pagamento) => (
            <tr key={pagamento.id}>
              <td>{pagamento.nome}</td>
              <td>{pagamento.cpf}</td>
              <td>{pagamento.valorTotal}</td>
              <td>{pagamento.parcela}</td>
              <td>{pagamento.valorParcela}</td>
              <td>{pagamento.data.toLocaleDateString()}</td>
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