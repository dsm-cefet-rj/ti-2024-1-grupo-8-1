import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editPag } from '../../features/listaPagamentosSlice';
import { v4 as uuidv4 } from 'uuid';

function EditPag({ pagamentoId }) {
  const Pacientes = useSelector((state) => state.listaPacientes.pacientes);
  const [dataInput, setData] = useState(new Date());
  const dispatch = useDispatch();
  const [pago, setPago] = useState(false);
  const [idConsulta, setIdConsulta] = useState('');
  const [pacienteSelecionado, setPacienteSelecionado] = useState('');
  const [metodo, setMetodo] = useState('');
  const [valor, setValorTotal] = useState('');
  const [parcela, setParcela] = useState('');



  const handleClickPagou = (event) => {
    event.preventDefault();

    const paciente = Pacientes.find((paciente) => paciente.nome === pacienteSelecionado);
    if (paciente) {
      const valorParcelas = (parseFloat(valor) / parseInt(parcela)).toFixed(2);
      const dados = {
        id: pagamentoId,
        nome: paciente.nome,
        cpf: paciente.cpf,
        valorTotal: valor,
        parcela: parcela,
        valorParcela: valorParcelas,
        data: dataInput,
        metodo: metodo,
        emDia: '',
        idConsulta: idConsulta
      };
      dispatch(editPag(dados));
    }
  };

  const valorParcelas = (parseFloat(valor) / parseInt(parcela)).toFixed(2);
  return (
    <div className="corpo">
      <div className="container-lg">
        <form className="row g-3">
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">Paciente</label>
            <select id="inputState" className="form-select" onChange={(e) => setPacienteSelecionado(e.target.value)}>
              <option value="">Escolha...</option>
              {Pacientes.map((pagamento, index) => (
                <option key={index} value={pagamento.nome}>
                  {pagamento.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="inputValor" className="form-label">Valor</label>
            <input type="text" className="form-control" id="inputValor" value={valor} onChange={(e) => setValorTotal(e.target.value)} />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputMetodoPag" className="form-label">Método de pagamento</label>
            <select value={metodo} onChange={(e) => setMetodo(e.target.value)} id="inputMetodoPag" className="form-select">
              <option selected>Dinheiro</option>
              <option>Pix</option>
              <option>Débito</option>
              <option>Crédito</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputParcela" className="form-label">Parcela</label>
            <input type="number" className="form-control" id="inputParcela" value={parcela} onChange={(e) => setParcela(e.target.value)} />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputValor" className="form-label">Valor das parcelas</label>
            <input type="text" className="form-control" id="inputPago" value={valorParcelas} readOnly />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputData" className="form-label">Data do pagamento</label>
            <input type="date" className="form-control" id="inputData" value={dataInput} onChange={(e) => setData(new Date(e.target.value))} />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputIdConsulta" className="form-label">Id da consulta</label>
            <input type="text" className="form-control" id="inputIdConsulta" value={idConsulta} onChange={(e) => setIdConsulta(e.target.value)} />
          </div>
          <div className="textpagComprador">
            <h1>Dados do comprador</h1>
          </div>


          <div className="col-12">
            <button onClick={handleClickPagou} className="btn btn-primary">Editar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPag;