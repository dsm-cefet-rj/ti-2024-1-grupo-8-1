import React, { useState } from 'react';
import '../styles.css';

function AddPag() {

  const[pagou,setPagou] = useState(false);

  const handleClickPagou = ()=>{
    setPagou(true);
  }
 const Pacientes = [
  {
    nome: "Payet Bittencourt",
    telefone: "(11) 98765-4320",
    cpf: "123.456.789-00",
    endereco: "Rua Sotero dos reis, 123",
    cidade: "Rio de Janeiro",
    pagou : false
  },

    {
      nome: "João da Silva",
      telefone: "(11) 98765-4321",
      cpf: "123.456.789-00",
      endereco: "Rua A, 123",
      cidade: "São Paulo",
      pagou : false
    },
    {
      nome: "Maria Souza",
      telefone: "(21) 99999-8888",
      cpf: "987.654.321-00",
      endereco: "Avenida B, 456",
      cidade: "Rio de Janeiro",
      pagou : false
    },
    {
      nome: "Carlos Oliveira",
      telefone: "(31) 77777-2222",
      cpf: "555.444.333-00",
      endereco: "Rua C, 789",
      cidade: "Belo Horizonte",
      pagou : false
    },
    {
      nome: "Ana Santos",
      telefone: "(41) 33333-5555",
      cpf: "222.111.888-00",
      endereco: "Avenida D, 987",
      cidade: "Curitiba",
      pagou : false
    },
    {
      nome: "Pedro Costa",
      telefone: "(85) 22222-7777",
      cpf: "666.777.888-00",
      endereco: "Rua E, 321",
      cidade: "Fortaleza",
      pagou : false
    },
    {
      nome: "Fernanda Almeida",
      telefone: "(61) 44444-1111",
      cpf: "999.888.777-00",
      endereco: "Avenida F, 654",
      cidade: "Brasília",
      pagou : false
    }
  ];

  const [pacienteSelecionado, setPacienteSelecionado] = useState('Ana Santos');

  let nomeProcurado = pacienteSelecionado;

  const pacienteEncontrado= Pacientes.find((paciente) => paciente.nome === nomeProcurado);

const[valor,setValorTotal] = useState('')
const[parcela,setParcela] = useState('')
let valorParcelas = (parseFloat(valor)/parseInt(parcela)).toFixed(2);


  return (
    <div className="corpo">
      <div className="container-lg">
        <form className="row g-3">
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">Paciente</label>

            <select id="inputState" className="form-select"  onChange={(p)=>setPacienteSelecionado(p.target.value)} >
              <option selected>Escolha...</option>
              {Pacientes.map((Paciente) => (
          <option key={Paciente.nome} value={Paciente.nome}>
            {Paciente.nome}
          </option>
        ))}
            </select>
          </div>
        
          <div className="col-md-2">
            <label htmlFor="inputValor" className="form-label">Valor</label>
            <input type="text" className="form-control" id="inputValor" value={valor} onChange={(e)=>setValorTotal(e.target.value)}/>
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
            <input type="number" className="form-control" id="inputParcela" value={parcela} onChange={(e)=>setParcela(e.target.value)} />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputValor" className="form-label">Pago?</label>
            <input type="text" className="form-control" id="inputPago" value={pagou} readOnly/>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputParcelas" className="form-label">Valor das parcelas</label>
            <input type="text" id="inputParcelas" value={valorParcelas} readOnly />
          </div>
         
          <div className="textpagComprador">
            <h1>Dados do comprador</h1>
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Nome:</label>
            <input type="text" className="form-control" id="inputNomeComprador" value={pacienteSelecionado}
              readOnly />
          </div>
          
          <div className="col-md-6">
            <label htmlFor="inputCPF" className="form-label">CPF</label>
            <input type="text" className="form-control" id="inputCPF" value={pacienteEncontrado.cpf}
              readOnly/>
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Endereço</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 rua caceres" value={pacienteEncontrado.endereco}
              readOnly />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCidade" className="form-label">Cidade</label>
            <input type="text" className="form-control" id="inputCidade" value={pacienteEncontrado.cidade}
              readOnly/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputTelefone" className="form-label">Telefone</label>
            <input type="text" className="form-control" id="inputTelefone" value={pacienteEncontrado.telefone}
              readOnly />
          </div>
          <div className="col-12">
            <button type="submit" onClick={handleClickPagou} className="btn btn-primary">Adicionar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPag;