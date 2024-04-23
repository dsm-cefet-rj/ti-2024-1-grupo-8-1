import React, { useState } from 'react';
import AddPag from './addPag'
import PagPaci from './pagPaci'
import PagData from './pagData'

import '../styles.css';

function Pagamentos() {
  const [BotaoVoltar, setBotao] = useState(false);

    const handleClickBotaoVoltar = () =>{
        setExibirBotaoAdd(true);

        setExibirBotaoPaci(true);
        setExibirBotaoData(true);
        setExibirPagData(false);
        setExibirPagPaci(false);
        setExibirAdd(false);
    }

    const [exibirBotaoAdd, setExibirBotaoAdd] = useState(true);

    const handleClickExibirBotaoAdd = () =>{

        setExibirBotaoPaci(false);
        setExibirBotaoData(false);
        
    }

    const [exibirBotaoPaci, setExibirBotaoPaci] = useState(true);

    const handleClickExibirBotaoPaci = () =>{

        setExibirBotaoAdd(false);

        setExibirBotaoData(false);
    }


    const [exibirBotaoData, setExibirBotaoData] = useState(true);

    const handleClickExibirBotaoData = () =>{

      setExibirBotaoAdd(false);
      setExibirBotaoPaci(false);
    
    }


    const [exibirAdd, setExibirAdd] = useState(false);

    const handleClickAdd = () => {
      setExibirAdd(true);
      setExibirPagPaci(false);
 
      setExibirPagData(false);
    };

    const [exibirPagPaci, setExibirPagPaci] = useState(false);

    const handleClickPagPaci = () => {
      setExibirPagPaci(true);
      setExibirAdd(false);

      setExibirPagData(false);
    };
 

    const [exibirPagData, setExibirPagData] = useState(false);

    const handleClickPagData = () => {
      setExibirPagData(true);
      setExibirPagPaci(false);
      setExibirAdd(false);
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
            {exibirBotaoPaci && <button type="button" id="pagamentos-pagPaci-btn" onClick={handleClickPagPaci}  className="btn btn-primary btn-lg">Pagamentos do paciente</button> }
          </div>

            {exibirAdd && <AddPag />}
            {exibirPagData && <PagData />}
            {exibirPagPaci && <PagPaci />}
       
          </div>
        </div>
      );
}

export default Pagamentos;