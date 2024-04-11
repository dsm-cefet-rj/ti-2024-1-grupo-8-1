import React, { useState, useEffect } from 'react';
import Pacientes from '../Data/pacData';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import '../styles.css';

function PagMes() {
  const [mesSelecionado, setMesSelecionado] = useState('');
  const [soma, setSoma] = useState(0);

  const mesesDoAno = {
    Janeiro: 1,
    Fevereiro: 2,
    Março: 3,
    Abril: 4,
    Maio: 5,
    Junho: 6,
    Julho: 7,
    Agosto: 8,
    Setembro: 9,
    Outubro: 10,
    Novembro: 11,
    Dezembro: 12
  };

  const pagamentos = useSelector((state) => state.listaPagamentos.pagamentos);
  const mes = mesesDoAno[mesSelecionado];

  useEffect(() => {
    let total = 0;
    pagamentos.forEach((pagamento) => {
      const dataPagamento = new Date(pagamento.data);
      const pagamentoMes = dataPagamento.getMonth() + 1;

      if (mes === pagamentoMes || mesSelecionado === '') {
        total += parseFloat(pagamento.valorTotal);
      }
    });

    setSoma(total);
  }, [pagamentos, mesSelecionado]);

  return (
    <div className="corpo">
      <div className="cabecalho">
        Pagamento por mês
      </div>
      <select id="inputState" className="form-select" onChange={(p) => setMesSelecionado(p.target.value)}>
        <option value="">Escolha...</option>
        {Object.keys(mesesDoAno).map((mes) => (
          <option key={mes} value={mes}>
            {mes}
          </option>
        ))}
      </select>
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
          {pagamentos.map((pagamento, index) => {
            const dataPagamento = new Date(pagamento.data);
            const pagamentoMes = dataPagamento.getMonth() + 1;

            if (mes === pagamentoMes || mesSelecionado === '') {
              return (
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
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </Table>
      <hr />
      <div>Total: {soma}</div>
    </div>
  );
}

export default PagMes;