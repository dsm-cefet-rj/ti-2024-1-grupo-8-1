import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPag } from '../../features/listaPagamentosSlice';
import { v4 as uuidv4 } from 'uuid';

function AddPag({ handleConsultasConcluidas, consultaC }) {

  const [consultaPagamento, setConsultaPagamento] = useState({...consultaC})

  const [novoPagamento, setNovoPagamento] = useState({

    id: uuidv4(),
    nome: "",
    cpf: "",
    valorTotal: "",
    parcela: "",
    valorParcela: "",
    data: "",
    metodo: "",
    idConsulta: consultaPagamento.id,
    paciente: consultaPagamento.paciente

  })

  const dispatch = useDispatch();
  const Pacientes = useSelector((state) => state.listaPacientes.pacientes);
  const [dataInput, setData] = useState(new Date());
  const [valorTotal, setValorTotal] = useState('');
  const [parcela, setParcela] = useState('');
  const valorParcelas = (parseFloat(valorTotal) / parseInt(parcela)).toFixed(2);

  
  const [pacienteSelecionado, setPacienteSelecionado] = useState(consultaC.paciente);
  const paciente = Pacientes.find((paciente) => paciente.cpf === pacienteSelecionado);
  

  const handleMudanca = (e) => {
    const { name, value } = e.target;
    if(name === "data"){
      value = new Date(value + 'T00:00:00')
    }
    setNovoPagamento({
      ...novoPagamento,
      [name]: value,
    });
  };

  const handleClickPagou = (event) => {
    console.log(novoPagamento);
    alert("vasco")
    dispatch(addPag(novoPagamento));
    handleConsultasConcluidas();
    /*const paciente = Pacientes.find((paciente) => paciente.nome === pacienteSelecionado);
    if (paciente) {
      const valorParcelas = (parseFloat(valor) / parseInt(parcela)).toFixed(2);
    
    }*/
  };

  return (
    <div className="corpo">
      <div className="container-lg">
        <form className="row g-3">
          <div className="col-md-4">
            <label>Paciente</label>
            <input nome="paciente" value={consultaPagamento.paciente} />
          </div>

          <div className="col-md-2">
            <label>Valor</label>
            <input type="text" name="valorTotal" onChange={(e) => {handleMudanca(e); setValorTotal(e.target.value)}} />
          </div>

          <div className="col-md-4">
            <label>Método de pagamento</label>
            <select name="metodo" onChange={(e) => handleMudanca(e)}>
              <option selected>Dinheiro</option>
              <option>Pix</option>
              <option>Débito</option>
              <option>Crédito</option>
            </select>
          </div>
          <div className="col-md-2">
            <label>Parcela</label>
            <input type="number" name="parcela" onChange={(e) => {handleMudanca(e); setParcela(e.target.value)}} />
          </div>
          <div className="col-md-2">
            <label>Valor das parcelas</label>
            <input type="text" name="valorParcela" value={valorParcelas} readOnly />
          </div>
          <div className="col-md-2">
            <label>Data do pagamento</label>
            <input type="date" name="data"
              value={dataInput.toISOString().split('T')[0]}
              onChange={(e) => handleMudanca(e)}
            />
          </div>
          <div className="col-md-2">
            <label>Id da consulta</label>
            <span>{consultaC.id}</span>
          </div>

          <div className="textpagComprador">
            <h1>Dados do comprador</h1>
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Nome:</label>
            <input type="text" className="form-control" id="inputNomeComprador" value={paciente?.nome || ''} readOnly />
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