import React, { useState, useEffect } from 'react';
import Pacientes from '../Data/pacData';
import '../styles.css';
import {useSelector,useDispatch} from 'react-redux';
import { addPag } from '../../features/listaPagamentosSlice';
export default function ExbirDados(props) {

const [dataAtual, setDataAtual] = useState('');

const dispatch = useDispatch();


  useEffect(() => {
    const obterDataAtual = () => {
      const data = new Date();
      const formatoData = { day: '2-digit', month: '2-digit', year: 'numeric' };
      const dataFormatada = data.toLocaleDateString('pt-BR', formatoData);
      return dataFormatada;
    };
    setDataAtual(obterDataAtual());
  }, []);


  const [pacienteSelecionado, setPacienteSelecionado] = useState('Ana Santos');

  let nomeProcurado = pacienteSelecionado;

  const pacienteEncontrado = Pacientes.find((paciente) => paciente.nome === nomeProcurado);

const[valor,setValorTotal] = useState('')
const[parcela,setParcela] = useState('')
let valorParcelas = (parseFloat(valor)/parseInt(parcela)).toFixed(2);

  return (
    <div className="corpo">
      <div className="container-lg">
        <form className="row g-3">
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">Paciente</label>

            <select id="inputState" className="form-select" onChange={(p)=>setPacienteSelecionado(p.target.value)} >
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
            <input type="text" className="form-control" id="inputValor" value={valor} readOnly/>
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
            <input type="number" className="form-control" id="inputParcela" value={parcela} readOnly />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputValor" className="form-label">Valor das parcelas</label>
            <input type="text" className="form-control" id="inputPago" value={valorParcelas} readOnly/>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputTelefone" className="form-label">Data do pagamento</label>
            <input type="text" className="form-control" id="inputTelefone" value={dataAtual}
              readOnly />
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
            
        </form>
      </div>
    </div>
  );
}
