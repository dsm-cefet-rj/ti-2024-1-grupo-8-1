import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import CloseButton from 'react-bootstrap/CloseButton';

import './estoque.css';
import { aumentarQtd, diminuirQtd, rmvItem } from '../../features/listaEstoqueSlice';

function ItemEstoque(props) {
  
  const dispatch = useDispatch();

  const handleClickBotaoDiminuir = (event) => {
    event.preventDefault();
    dispatch(diminuirQtd(props.codigo));
  }

  const handleClickBotaoAumentar = (event) => {
    event.preventDefault();
    dispatch(aumentarQtd(props.codigo));
    console.log(props.quantidade);
  }
  const handleClickBotaoRemover = () => {
    dispatch(rmvItem(props.codigo));
  }

  return (
    <tr>
      <td>{props.codigo}</td>
      <td>{props.item}</td>
      <td>{props.preco}</td>
      <td>
        {props.quantidade}
      </td>
      <td>    {<button onClick={handleClickBotaoDiminuir}>-</button>}
                  {<button onClick={handleClickBotaoAumentar}>+</button>}</td>
      <td>
        <CloseButton onClick={handleClickBotaoRemover} />
      </td>
    </tr>
  );
}

function ListaEstoque() {
  const itens = useSelector((state) => state.listaEstoque.estoque);

  return (
    <div className="corpo">
      <div className="container-lg">
        <form className="row g-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Código</th>
                <th>Item</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Ação</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((item, index) => (
                <ItemEstoque
                  key={index}
                  codigo={item.codigo}
                  item={item.nome}
                  preco={item.preco}
                  quantidade={item.quantidade}
              
                />
              ))}
            </tbody>
          </Table>
        </form>
      </div>
    </div>
  );
}

export { ListaEstoque, ItemEstoque };