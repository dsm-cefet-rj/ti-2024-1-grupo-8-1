import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPag } from '../../features/listaPagamentosSlice';
import { v4 as uuidv4 } from 'uuid';

function AddPag({handleListarPagamentos}) {
  const Pacientes = useSelector((state) => state.listaPacientes.pacientes);
  const Consultas = useSelector((state) => state.listaConsulta.consulta);
  const [dataInput, setData] = useState(new Date());
  const dispatch = useDispatch();
  const [pago, setPago] = useState(false);
  const [pacienteSelecionado, setPacienteSelecionado] = useState('');
  const paciente = Pacientes.find((paciente) => paciente.nome === pacienteSelecionado);
  const [metodo, setMetodo] = useState('');
  const [valor, setValorTotal] = useState('');
  const [parcela, setParcela] = useState('');
  const valorParcelas = (parseFloat(valor) / parseInt(parcela)).toFixed(2);
  const [idConsulta, setIdConsulta] = useState('');

  const [consultasDoPaciente, setConsultasDoPaciente] = useState([]);

  useEffect(() => {
    if (paciente) {
      const consultasDoPaciente = Consultas.filter((consulta) => consulta.paciente === paciente.cpf);
      setConsultasDoPaciente(consultasDoPaciente);
    }
  }, [paciente, Consultas]);

  const handleClickPagou = (event) => {
    event.preventDefault();
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
        metodo: metodo,
        emDia: '',
        idConsulta: idConsulta
      };
      dispatch(addPag(dados));
      console.log(dados);
    }
  };


  return (
    <div className="corpo">
      <button onClick={handleListarPagamentos}>Voltar</button>
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
            <select onChange={(e) => setMetodo(e.target.value)} id="inputMetodoPag" className="form-select">
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
            <input type="date" className="form-control" id="inputData"
              value={dataInput.toISOString().split('T')[0]}
              onChange={(e) => setData(new Date(e.target.value + 'T00:00:00'))}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputIdConsulta" className="form-label">Id da consulta</label>
            <input type="text" className="form-control" id="inputPago" value={idConsulta} onChange={(e) => setIdConsulta(e.target.value)} />
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