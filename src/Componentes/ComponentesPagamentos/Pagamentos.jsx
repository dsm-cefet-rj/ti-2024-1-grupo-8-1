import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Pagamentos = () => {
  const pagamentos = useSelector((state) => state.listaPagamentos.pagamentos);
  const compromissos = useSelector((state) => state.listaConsulta.consultas);
  const [pagamentosPorMes, setPagamentosPorMes] = useState([]);
  const [mesAtual, setMesAtual] = useState(new Date());

  useEffect(() => {
    pagamentos.map((pagamento) =>{
        const compromissoDoPagamento = compromissos.find((compromisso) => compromisso._id == pagamento.idConsulta)
        if(compromissoDoPagamento.dia.getMonth() == mesAtual.getMonth){
            console.log('vasco')
        }
    })
    // setPagamentosPorMes(pagamentosFiltrados);
  }, [pagamentos, mesAtual]);

  const avancarMes = () => {
    setMesAtual(new Date(mesAtual.setMonth(mesAtual.getMonth() + 1)));
  };

  const retrocederMes = () => {
    setMesAtual(new Date(mesAtual.setMonth(mesAtual.getMonth() - 1)));
  };

  const mesAnoAtual = mesAtual.toLocaleString('pt-BR', { month: 'long', year: 'numeric' });

  return (
    <div>
      <div className="controle-mes">
        <button onClick={retrocederMes}>Anterior</button>
        <h3>{mesAnoAtual}</h3>
        <button onClick={avancarMes}>Próximo</button>
      </div>

      <div className="grid-pagamentos">
        {pagamentosPorMes.length > 0 ? (
          pagamentosPorMes.map((pagamento) => (
            <div key={pagamento._id} className="mini-recibo">
              <p>Valor Total: R${pagamento.valorTotal.toFixed(2)}</p>
              <p>Parcela: {pagamento.parcela}</p>
              <p>Método: {pagamento.metodo}</p>
            </div>
          ))
        ) : (
          <p>Nenhum pagamento para este mês.</p>
        )}
      </div>
    </div>
  );
};

export default Pagamentos;