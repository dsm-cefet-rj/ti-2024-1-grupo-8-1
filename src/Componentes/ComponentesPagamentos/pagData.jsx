import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import '../styles.css';

function PagData() {
  const [mesSelecionado, setMesSelecionado] = useState('');
  const [anoSelecionado, setAnoSelecionado] = useState('');
  const [diaSelecionado, setDiaSelecionado] = useState('');
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

  useEffect(() => {
    let total = 0;
    pagamentos.forEach((pagamento) => {
      const dataPagamento = new Date(pagamento.data);
      const pagamentoMes = dataPagamento.getMonth() + 1;
      const pagamentoAno = dataPagamento.getFullYear();
      const pagamentoDia = dataPagamento.getDate();

      if (
        (mesSelecionado === '' || pagamentoMes === mesesDoAno[mesSelecionado]) &&
        (anoSelecionado === '' || pagamentoAno === parseInt(anoSelecionado)) &&
        (diaSelecionado === '' || pagamentoDia === parseInt(diaSelecionado))
      ) {
        total += parseFloat(pagamento.valorTotal);
      }
    });

    setSoma(total);
  }, [pagamentos, mesSelecionado, anoSelecionado, diaSelecionado, mesesDoAno]);

  const formatarData = (data) => {
    const dataObj = new Date(data);
    const dia = dataObj.getDate().toString().padStart(2, '0');
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className="corpo">
      <div className="cabecalho">Pagamento por mês</div>
      <select
        id="inputState"
        className="form-select"
        onChange={(e) => setMesSelecionado(e.target.value)}
        value={mesSelecionado}
      >
        <option value="">Escolha o mês...</option>
        {Object.keys(mesesDoAno).map((mes) => (
          <option key={mes} value={mes}>
            {mes}
          </option>
        ))}
      </select>
      <select
        id="inputState"
        className="form-select"
        onChange={(e) => setDiaSelecionado(e.target.value)}
        value={diaSelecionado}
      >
        <option value="">Escolha o dia...</option>
        {[...new Set(pagamentos.map((pagamento) => new Date(pagamento.data).getDate()))].map(
          (dia) => (
            <option key={dia} value={dia}>
              {dia}
            </option>
          )
        )}
      </select>
      <select
        id="inputState"
        className="form-select"
        onChange={(e) => setAnoSelecionado(e.target.value)}
        value={anoSelecionado}
      >
        <option value="">Escolha o ano...</option>
        {[...new Set(pagamentos.map((pagamento) => new Date(pagamento.data).getFullYear()))].map(
          (ano) => (
            <option key={ano} value={ano}>
              {ano}
            </option>
          )
        )}
      </select>
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
          </tr>
        </thead>
        <tbody>
          {pagamentos.map((pagamento, index) => {
            const dataPagamento = new Date(pagamento.data);
            const pagamentoMes = dataPagamento.getMonth() + 1;
            const pagamentoAno = dataPagamento.getFullYear();
            const pagamentoDia = dataPagamento.getDate();

            if (
              (mesSelecionado === '' || pagamentoMes === mesesDoAno[mesSelecionado]) &&
              (anoSelecionado === '' || pagamentoAno === parseInt(anoSelecionado)) &&
              (diaSelecionado === '' || pagamentoDia === parseInt(diaSelecionado))
            ) {
              return (
                <tr key={index}>
                  <td>{pagamento.nome}</td>
                  <td>{pagamento.cpf}</td>
                  <td>{pagamento.valorTotal}</td>
                  <td>{pagamento.parcela}</td>
                  <td>{pagamento.valorParcela}</td>
                  <td>{formatarData(pagamento.data)}</td>
                  <td>{pagamento.emDia ? 'Sim' : 'Não'}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </Table>
      <hr />
      <div>Total: {soma}</div>
    </div>
  );
}

export default PagData;