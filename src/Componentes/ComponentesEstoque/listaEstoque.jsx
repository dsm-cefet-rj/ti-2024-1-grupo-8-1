import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import CloseButton from 'react-bootstrap/CloseButton';
import { rmvItem, editItem } from '../../features/listaEstoqueSlice';
import './estoque.css';

function ListaEstoque({ handleCadastrarItem }, { handleListarItens }) {

  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [nomeAtualizado, setNomeAtualizado] = useState('');
  const [precoAtualizado, setPrecoAtualizado] = useState('');
  const [descricaoAtualizado, setDescricaoAtualizado] = useState('');
  const [filtroAtualizado, setFiltroAtualizado] = useState('');
  const [quantidadeAtualizada, setQuantidadeAtualizada] = useState('');
  const [editarItem, setEditarItem] = useState(false);
  const itens = useSelector((state) => state.listaEstoque.estoque);

  const handleClickBotaoRemover = (cod) => {
    dispatch(rmvItem(cod));
  };

  const handleClickEditar = (id) => {
    setId(id);
    setEditarItem(true);
  };

  const handleAtualizarItem = (item) => {
    dispatch(
      editItem({
        id: item.id,
        nome: nomeAtualizado,
        preco: precoAtualizado,
        descricao: descricaoAtualizado,
        filtros: filtroAtualizado,
        quantidade: quantidadeAtualizada,
      })
    );

    setId(null);
    setNomeAtualizado('');
    setPrecoAtualizado('');
    setQuantidadeAtualizada('');
    setEditarItem(false);
  }
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
                <th>Remover</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    {editarItem && id === item.id ? (
                      <input type="text" value={nomeAtualizado} onChange={(e) => setNomeAtualizado(e.target.value)} />
                    ) : (
                      item.nome
                    )}
                  </td>
                  <td>
                    {editarItem && id === item.id ? (
                      <input type="number" value={precoAtualizado} onChange={(e) => setPrecoAtualizado(e.target.value)} />
                    ) : (
                      item.preco
                    )}
                  </td>
                  <td>
                    {editarItem && id === item.id ? (
                      <input type="number" value={quantidadeAtualizada} onChange={(e) => setQuantidadeAtualizada(e.target.value)} />
                    ) : (
                      item.quantidade
                    )}
                  </td>
                  <td>
                    <CloseButton onClick={(e) => handleClickBotaoRemover(item.id)} />
                  </td>
                  <td>
                    {editarItem && id === item.id ? (
                      <button onClick={(e) => {handleAtualizarItem(item); e.preventDefault()}}>Atualizar</button>
                    ) : (
                      <button onClick={(e) => {handleClickEditar(item.id); e.preventDefault()}}>Editar</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </form>
      </div>
    </div>
  );
}

export default ListaEstoque;