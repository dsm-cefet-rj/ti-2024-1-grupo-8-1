import React, { useState } from 'react';
import AddPag from './addPag'
import PagPaci from './pagPaci'
import PagMes from './pagMes'
import PagData from './pagData'

import '../styles.css';

function Pagamentos() {
  const [BotaoVoltar, setBotao] = useState(false);

    const handleClickBotaoVoltar = () =>{
        setExibirBotaoAdd(true);
        setExibirBotaoMes(true);
        setExibirBotaoPaci(true);
        setExibirBotaoData(true);
        setExibirPagData(false);
        setExibirPagPaci(false);
        setExibirAdd(false);
        setExibirPagMes(false);
    }

    const [exibirBotaoAdd, setExibirBotaoAdd] = useState(true);

    const handleClickExibirBotaoAdd = () =>{

        setExibirBotaoMes(false);
        setExibirBotaoPaci(false);
        setExibirBotaoData(false);
        
    }

    const [exibirBotaoPaci, setExibirBotaoPaci] = useState(true);

    const handleClickExibirBotaoPaci = () =>{

        setExibirBotaoAdd(false);
        setExibirBotaoMes(false);
        setExibirBotaoData(false);
    }


    const [exibirBotaoMes, setExibirBotaoMes] = useState(true);

    const handleClickExibirBotaoMes = () =>{

        setExibirBotaoAdd(false);
        setExibirBotaoPaci(false);
        setExibirBotaoData(false);
    }


    const [exibirBotaoData, setExibirBotaoData] = useState(true);

    const handleClickExibirBotaoData = () =>{

      setExibirBotaoAdd(false);
      setExibirBotaoPaci(false);
      setExibirBotaoMes(false);
    }


    const [exibirAdd, setExibirAdd] = useState(false);

    const handleClickAdd = () => {
      setExibirAdd(true);
      setExibirPagPaci(false);
      setExibirPagMes(false);
      setExibirPagData(false);
    };

    const [exibirPagPaci, setExibirPagPaci] = useState(false);

    const handleClickPagPaci = () => {
      setExibirPagPaci(true);
      setExibirAdd(false);
      setExibirPagMes(false);
      setExibirPagData(false);
    };
    const [exibirPagMes, setExibirPagMes] = useState(false);

    const handleClickPagMes = () => {
      setExibirPagMes(true);
      setExibirPagPaci(false);
      setExibirAdd(false);
      setExibirPagData(false);
    };
    const [exibirPagData, setExibirPagData] = useState(false);

    const handleClickPagData = () => {
      setExibirPagData(true);
      setExibirPagPaci(false);
      setExibirAdd(false);
      setExibirPagMes(false);
    };



  return (
    <div className="corpo">
      <div className="cabecalho">
        <h1>Pagamentos</h1>
      </div>
        <button type="button" id="pagamentos-voltar-btn" onClick={handleClickBotaoVoltar} className="btn voltar">Voltar</button>
        <div className='container-lg'>
          <div onClick={handleClickExibirBotaoAdd}>
            {exibirBotaoAdd && <button type="button" id="pagamentos-adicionar-btn" onClick={handleClickAdd} className="btn btn-primary btn-lg">Adicionar</button>}
          </div>
          <div onClick={handleClickExibirBotaoData}>
           {exibirBotaoData && <button type="button" id="pagamentos-pagData-btn" onClick={handleClickPagData} className="btn btn-primary btn-lg">Ver pagamentos de uma data</button>}
          </div>
          <div onClick={handleClickExibirBotaoPaci}>
            {exibirBotaoPaci && <button type="button" id="pagamentos-pagPaci-btn" onClick={handleClickPagPaci}  className="btn btn-primary btn-lg">Ver pagamentos por paciente</button> }
          </div>
          <div onClick={handleClickExibirBotaoMes}>
            {exibirBotaoMes && <button type="button" id="pagamentos-pagMes-btn" onClick={handleClickPagMes}  className="btn btn-primary btn-lg">Ver pagamentos por mês</button>}
          </div>
            {exibirAdd && <AddPag />}
            {exibirPagData && <PagData />}
            {exibirPagPaci && <PagPaci />}
            {exibirPagMes && <PagMes />}
          </div>
        </div>
      );
}

export default Pagamentos;