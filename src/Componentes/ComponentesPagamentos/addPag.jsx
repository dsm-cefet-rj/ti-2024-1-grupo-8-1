import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPag } from '../../features/listaPagamentosSlice';
import { v4 as uuidv4 } from 'uuid';
function AddPag() {
  const Pacientes = useSelector((state) => state.listaPacientes.pacientes);
  const [dataInput, setData] = useState(new Date());
  const [pagou, setPagou] = useState(false);

  const dispatch = useDispatch();
var id = 0;
  const handleClickPagou = (event) => {
    event.preventDefault();
    setPagou(true);

    const paciente = Pacientes.find((paciente) => paciente.nome === pacienteSelecionado);
    if (paciente) {
      const valorParcelas = (parseFloat(valor) / parseInt(parcela)).toFixed(2);
      const dados = {
        id: uuidv4(),
        nome: paciente.nome,
        cpf: paciente.cpf,
        valorTotal: valor,
        parcela: parcela,
        valorParcela: valorParcelas,
        data: dataInput,
        emDia: true
      };
      dispatch(addPag(dados));
    }
  };

  const [pacienteSelecionado, setPacienteSelecionado] = useState('');
  const paciente = Pacientes.find((paciente) => paciente.nome === pacienteSelecionado);

  const [valor, setValorTotal] = useState('');
  const [parcela, setParcela] = useState('');
  const valorParcelas = (parseFloat(valor) / parseInt(parcela)).toFixed(2);

  return (
    <div className="corpo">
      <div className="container-lg">
        <form className="row g-3">
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">Paciente</label>
            <select id="inputState" className="form-select" onChange={(e) => setPacienteSelecionado(e.target.value)}>
              <option value="">Escolha...</option>
              {Pacientes.map((paciente, index) => (
                <option key={index} value={paciente.nome}>
                  {paciente.nome}
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
            <select id="inputMetodoPag" className="form-select">
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
            <input type="date" className="form-control" id="inputData" value={dataInput.toISOString().split('T')[0]} onChange={(e) => setData(new Date(e.target.value))} />
          </div>
          <div className="textpagComprador">
            <h1>Dados do comprador</h1>
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Nome:</label>
            <input type="text" className="form-control"id="inputNomeComprador" value={paciente?.nome || ''} readOnly />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCPF" className="form-label">CPF</label>
            <input type="text" className="form-control" id="inputCPF" value={paciente?.cpf || ''} readOnly />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Endereço</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 rua caceres" value={paciente?.endereco || ''} readOnly />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCidade" className="form-label">Cidade</label>
            <input type="text" className="form-control" id="inputCidade" value={paciente?.cidade || ''} readOnly />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputTelefone" className="form-label">Telefone</label>
            <input type="text" className="form-control" id="inputTelefone" value={paciente?.telefone || ''} readOnly />
          </div>
          <div className="col-12">
            <button onClick={handleClickPagou} className="btn btn-primary">Adicionar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPag;