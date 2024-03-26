import React, { useState } from 'react';
import Agenda from './Agenda.jsx';
import Pacientes from './Pacientes.jsx';
import Estoque from './Estoque.jsx';
import Pagamentos from './Pagamentos.jsx';
import './styles.css';

function NavApp() {
  const [exibirPacientes, setExibirPacientes] = useState(false);

  const handleClickPacientes = () => {
    setExibirPacientes(true);
    setExibirAgenda(false);
    setExibirEstoque(false);
    setExibirPagamentos(false);
  };
  const [exibirAgenda, setExibirAgenda] = useState(false);

  const handleClickAgenda = () => {
    setExibirAgenda(true);
    setExibirPacientes(false);
    setExibirEstoque(false);
    setExibirPagamentos(false);
  };
  const [exibirEstoque, setExibirEstoque] = useState(false);

  const handleClickEstoque = () => {
    setExibirEstoque(true);
    setExibirAgenda(false);
    setExibirPacientes(false);
    setExibirPagamentos(false);
  };
  const [exibirPagamentos, setExibirPagamentos] = useState(false);

  const handleClickPagamentos = () => {
    setExibirPagamentos(true);
    setExibirAgenda(false);
    setExibirEstoque(false);
    setExibirPacientes(false);
  };

  return (
    <div className='corpo'>
    <div className='container'>
      <nav className="side-bar">
        <div className="logo">
          <div className="escrita1">
            Portal da
            <img src={require('./Imagens/Imagem1.png')} />
          </div>
          <div className="escrita2">Doutora</div>
        </div>

        <ul>
          <li className="side-bar-item">
            <button id="BtnPacientes" onClick={handleClickPacientes} className="aba">
              Pacientes
            </button>
          </li>
          <li className="side-bar-item">
            <button id="BtnAgenda" onClick={handleClickAgenda} className="aba">
              Agenda
            </button>
          </li>
          <li className="side-bar-item">
            <button id="BtnEstoque" onClick={handleClickEstoque} className="aba">
              Estoque
            </button>
          </li>
          <li className="side-bar-item">
            <button id="BtnPagamentos" onClick={handleClickPagamentos} className="aba">
              Pagamentos
            </button>
          </li>
        </ul>
      </nav>
      {exibirPacientes && <Pacientes />}
      {exibirAgenda && <Agenda />}
      {exibirEstoque && <Estoque />}
      {exibirPagamentos && <Pagamentos />}
      
    </div>
    </div>
  );
}

export default NavApp;