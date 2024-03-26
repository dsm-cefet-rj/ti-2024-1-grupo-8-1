import React,{useState} from 'react';
import '../styles.css';

function PagPaci() {
  
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
    nome: "Piru da Silva",
    telefone: "(11) 98765-6969",
    cpf: "123.456.789-00",
    endereco: "Rua Cacete, 123",
    cidade: "Pau Grande",
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




  return (
    <div className="corpo">
      <div className="cabecalho">
        Pagamentos do paciente

        <div className="div-pagamentos-pacientes">
        <select id="inputState" className="form-select"  onChange={(p)=>setPacienteSelecionado(p.target.value)} >
              <option selected>Escolha...</option>
              {Pacientes.map((Paciente) => (
          <option key={Paciente.nome} value={Paciente.nome}>
            {Paciente.nome}
          </option>
        ))}
            </select>
        </div>
      </div>
    </div>
  );
}

export default PagPaci;