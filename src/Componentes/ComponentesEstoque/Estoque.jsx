import React, { useState } from 'react'
import CadastrarItem from './cadastrarItem'
import {ListaEstoque, ItemEstoque} from './listaEstoque'
import '../styles.css';



function Estoque() {

  const[exibirBotaoVoltar, setExibirBotaoVoltar] = useState(true);
  const[exibirBotaoCadastrar, setExibirBotaoCadastrar] = useState(true);

  const[exibirEstoque, setExibirEstoque] = useState(true);
  
  const handleClickBotaoVoltar = () =>{
    
    setExibirBotaoCadastrar(true);
    setExibirCadastrar(false);
    setExibirDeletar(false);
    setExibirEstoque(true);

  }
  
  const[exibirCadastrar, setExibirCadastrar] = useState(false);
  const handleClickBotaoCadastrar = () =>{

    setExibirBotaoCadastrar(false);

    setExibirCadastrar(true);
    setExibirBotaoVoltar(true);
    setExibirEstoque(false);

  }

  const[exibirDeletar, setExibirDeletar] = useState(false);
  const handleClickBotaoDeletar = () =>{

    setExibirBotaoCadastrar(false);

    setExibirCadastrar(false);

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
        </div>
          <div>
            {exibirCadastrar && <CadastrarItem />}
            {exibirEstoque && <ListaEstoque />}

          </div>
      </div>
    </div>
    
  );
}

export default Estoque;