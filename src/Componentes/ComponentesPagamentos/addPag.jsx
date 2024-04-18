import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { addPag } from '../../features/listaPagamentosSlice';

function AddPag() {
  const Pacientes = useSelector((state) => state.listaPacientes.pacientes);
  const [dataInput, setData] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const obterData = () => {
      const data = new Date();
      const formatoData = { day: '2-digit', month: '2-digit', year: 'numeric' };
      const dataFormatada = data.toLocaleDateString('pt-BR', formatoData);
      return dataFormatada;
    };
    setData(obterData());
  }, []);

  const [pagou, setPagou] = useState(false);
 
  let id = 0;
  const handleClickPagou = (event) => {
    event.preventDefault();
    setPagou(true);
  
    const paciente = Pacientes.find((paciente) => paciente.nome === pacienteSelecionado);
    if (paciente) {
      const valorParcelas = (parseFloat(valor) / parseInt(parcela)).toFixed(2);
      const dados = {
        id: id++,
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
  const [pacienteSelecionado, setPacienteSelecionado] = useState({});
  const paciente = Pacientes[pacienteSelecionado];

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
            <label htmlFor="inputTelefone" className="form-label">Data do pagamento</label>
            <input type="text" className="form-control" id="inputTelefone" value={dataInput} onChange={(e) => setData(e.target.value)}/>
          </div>
          <div className="textpagComprador">
            <h1>Dados do comprador</h1>
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Nome:</label>
            <input type="text" className="form-control" id="inputNomeComprador" value={pacienteSelecionado.nome}
              readOnly />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCPF" className="form-label">CPF</label>
            <input type="text" className="form-control" id="inputCPF" value={pacienteSelecionado?.cpf}
              readOnly />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Endereço</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 rua caceres" value={pacienteSelecionado?.endereco}
              readOnly />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCidade" className="form-label">Cidade</label>
            <input type="text" className="form-control" id="inputCidade" value={pacienteSelecionado?.cidade}
              readOnly />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputTelefone" className="form-label">Telefone</label>
            <input type="text" className="form-control" id="inputTelefone" value={pacienteSelecionado?.telefone}
              readOnly />
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