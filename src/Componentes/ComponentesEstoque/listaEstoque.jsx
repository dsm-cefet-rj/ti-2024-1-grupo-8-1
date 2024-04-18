import React, { useState } from 'react';
import '../styles.css';
import { useDispatch,useSelector } from 'react-redux'; 

function ItemEstoque(props) {
  const [quantidade, setQuantidade] = useState(props.quantidade);

  const handleClickBotaoDiminuir = () => {
    setQuantidade(quantidade - 1);
  }

  const handleClickBotaoAumentar = () => {
    setQuantidade(quantidade + 1);
  }

  return (
    <li>
      {props.nome} 
      <button type="button" onClick={handleClickBotaoDiminuir} className="btn btn-primary">-</button> 
      {quantidade} 
      <button type="button" onClick={handleClickBotaoAumentar} className="btn btn-primary">+</button>
    </li>
  );
}
 
function ListaEstoque() {
  const Itens = useSelector((state) => state.listaPagamentos.pagamentos);

  return (
    <div className="corpo">
      <div className="container-lg">
        <form className="row g-3">
          <ol className="listaEstoque">
            {Itens.map((item, index) => (
              <ItemEstoque key={index} {...item} />
            ))}
          </ol>
        </form>
      </div>
    </div>
  );
}

export { ListaEstoque, ItemEstoque };
