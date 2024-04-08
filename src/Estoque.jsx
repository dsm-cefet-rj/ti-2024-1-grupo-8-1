import React, { useState } from 'react'
import CadastrarItem from './ComponentesEstoque/cadastrarItem'
import DeletarItem from './ComponentesEstoque/deletarItem'
import {ListaEstoque, ItemEstoque} from './ComponentesEstoque/listaEstoque'

import './styles.css';

function Estoque() {

  const[exibirBotaoVoltar, setExibirBotaoVoltar] = useState(true);
  const[exibirBotaoCadastrar, setExibirBotaoCadastrar] = useState(true);
  const[exibirBotaoDeletar, setExibirBotaoDeletar] = useState(true);
  const[exibirEstoque, setExibirEstoque] = useState(true);
  
  const handleClickBotaoVoltar = () =>{
    
    setExibirBotaoCadastrar(true);
    setExibirBotaoDeletar(true);
    setExibirCadastrar(false);
    setExibirDeletar(false);
    setExibirEstoque(true);

  }
  
  const[exibirCadastrar, setExibirCadastrar] = useState(false);
  const handleClickBotaoCadastrar = () =>{

    setExibirBotaoCadastrar(false);
    setExibirBotaoDeletar(false);
    setExibirCadastrar(true);
    setExibirDeletar(false);
    setExibirBotaoVoltar(true);
    setExibirEstoque(false);

  }

  const[exibirDeletar, setExibirDeletar] = useState(false);
  const handleClickBotaoDeletar = () =>{

    setExibirBotaoCadastrar(false);
    setExibirBotaoDeletar(false);
    setExibirCadastrar(false);
    setExibirDeletar(true);
    setExibirBotaoVoltar(true);
    setExibirEstoque(false);

  }
  
  return (
    <div className="corpo">
      <div className="cabecalho">
        Estoque
      </div>
      <div>
        {exibirBotaoVoltar && <button type="button" id="estoque-voltar-btn" onClick={handleClickBotaoVoltar} className="btn btn-primary">Voltar</button>}
      </div>
      
      <div className="container-lg">
        <div className="row g-6">
          <div className= "col-md-6">
            {exibirBotaoCadastrar && <button type="button" id="estoque-cadastrar-btn" onClick={handleClickBotaoCadastrar} className="btn btn-primary">Cadastrar</button>}
          </div>
          <div className= "col-md-6">
            {exibirBotaoDeletar && <button type="button" id="pagamentos-deletar-btn" onClick={handleClickBotaoDeletar} className="btn btn-primary">Deletar</button>}
          </div>
        </div>
          <div>
            {exibirCadastrar && <CadastrarItem />}
            {exibirDeletar && <DeletarItem />}
            {exibirEstoque && <ListaEstoque />}

          </div>
      </div>
    </div>
    
  );
}

export default Estoque;