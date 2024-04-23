import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import CloseButton from 'react-bootstrap/CloseButton';

import './estoque.css';
import { diminuirQtd, aumentarQtd, rmvItem, editItem } from '../../features/listaEstoqueSlice';

function ItemEstoque(props) {
  const dispatch = useDispatch();

  const [nomeAtualizado, setNomeAtualizado] = useState('');
  const [precoAtualizado, setPrecoAtualizado] = useState('');
  const [descricaoAtualizado, setDescricaoAtualizado] = useState('');
  const [filtroAtualizado, setFiltroAtualizado] = useState('');
  const [quantidadeAtualizada, setQuantidadeAtualizada] = useState('');
  const [editarItem, setEditarItem] = useState(false);

  const handleClickBotaoDiminuir = (event) => {
    event.preventDefault();
    dispatch(diminuirQtd(props.codigo));
  };

  const handleClickBotaoAumentar = (event) => {
    event.preventDefault();
    dispatch(aumentarQtd(props.codigo));
  };

  const handleClickBotaoRemover = () => {
    dispatch(rmvItem(props.codigo));
  };

  const handleClickEditar = (event) => {
    event.stopPropagation();
    setEditarItem(true);
  };

  const handleAtualizarItem = (codigo) => {
    dispatch(
      editItem({
        codigo: codigo,
        nome: nomeAtualizado,
        preco: precoAtualizado,
        descricao: descricaoAtualizado,
        filtros: filtroAtualizado,
        quantidade: quantidadeAtualizada,
      })
    );
    setEditarItem(false);
  };

  const handleNomeAtualizadoChange = (event) => {
    setNomeAtualizado(event.target.value);
  };

  const handlePrecoAtualizadoChange = (event) => {
    setPrecoAtualizado(event.target.value);
  };

  const handleQuantidadeAtualizadaChange = (event) => {
    setQuantidadeAtualizada(event.target.value);
  };

  return (
    <tr>
      <td>{props.codigo}</td>
      <td>
        {editarItem ? (
          <input type="text" value={nomeAtualizado} onChange={handleNomeAtualizadoChange} />
        ) : (
          props.item
        )}
      </td>
      <td>
        {editarItem ? (
          <input type="number" value={precoAtualizado} onChange={handlePrecoAtualizadoChange} />
        ) : (
          props.preco
        )}
      </td>
      <td>
        {editarItem ? (
          <input type="number" value={quantidadeAtualizada} onChange={handleQuantidadeAtualizadaChange} />
        ) : (
          props.quantidade
        )}
      </td>
      <td>
        <button onClick={handleClickBotaoDiminuir}>-</button>
        <button onClick={handleClickBotaoAumentar}>+</button>
      </td>
      <td>
        <CloseButton onClick={handleClickBotaoRemover} />
      </td>
      <td>
        {editarItem ? (
          <button onClick={() => handleAtualizarItem(props.codigo)}>Atualizar</button>
        ) : (
          <button onClick={() => handleClickEditar(props.codigo)}>Editar</button>
        )}
      </td>
    </tr>
  );
}

function ListaEstoque({ handleCadastrarItem }) {
  const itens = useSelector((state) => state.listaEstoque.estoque);

  return (
    <div className="corpo">
      <button onClick={handleCadastrarItem}>Cadastrar</button>
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
                <th>Editar</th>
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