import React, { useState } from 'react';
import CadastrarItem from './cadastrarItem';
import {ListaEstoque, ItemEstoque} from './listaEstoque';
import '../styles.css';



function Estoque() {

  /*const[exibirBotaoVoltar, setExibirBotaoVoltar] = useState(true);
  const[exibirBotaoCadastrar, setExibirBotaoCadastrar] = useState(true);*/

  const[Modo, setModo] = useState('Inicial')
  const[item, setItem] = useState('')

  //const[exibirEstoque, setExibirEstoque] = useState(true);
  
  /*const handleClickBotaoVoltar = () =>{
    
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

  }*/

  const handleCadastrarItem = () =>{
    setModo('Cadastrar');
  };

  const handleListarItens = () =>{
    setModo('Inicial');
  };

  const renderizarConteudo = () => {
    if (Modo === 'Inicial') {
      return <ListaEstoque handleCadastrarItem={handleCadastrarItem} />;
    }
    else if (Modo === 'Cadastrar') {
      return <CadastrarItem handleListarItens={handleListarItens} />;
    }
  }
  
  return (
    <div className="corpo">
      {renderizarConteudo()}
    </div>
    
  );
}

export default Estoque;