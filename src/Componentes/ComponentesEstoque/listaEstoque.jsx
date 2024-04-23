import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import CloseButton from 'react-bootstrap/CloseButton';
import { rmvItem, editItem } from '../../features/listaEstoqueSlice';
import './estoque.css';

function ListaEstoque({ handleCadastrarItem }, { handleListarItens }) {

  const dispatch = useDispatch();

  const [codigo, setCodigo] = useState('');
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

  const handleClickEditar = (codigo) => {
    setCodigo(codigo);
    setEditarItem(true);
  };

  const handleAtualizarItem = (item) => {
    dispatch(
      editItem({
        codigo: item.codigo,
        nome: nomeAtualizado,
        preco: precoAtualizado,
        descricao: descricaoAtualizado,
        filtros: filtroAtualizado,
        quantidade: quantidadeAtualizada,
      })
    );

    setCodigo(null);
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
                <tr key={item.codigo}>
                  <td>{item.codigo}</td>
                  <td>
                    {editarItem && codigo === item.codigo ? (
                      <input type="text" value={nomeAtualizado} onChange={(e) => setNomeAtualizado(e.target.value)} />
                    ) : (
                      item.item
                    )}
                  </td>
                  <td>
                    {editarItem && codigo === item.codigo ? (
                      <input type="number" value={precoAtualizado} onChange={(e) => setPrecoAtualizado(e.target.value)} />
                    ) : (
                      item.preco
                    )}
                  </td>
                  <td>
                    {editarItem && codigo === item.codigo ? (
                      <input type="number" value={quantidadeAtualizada} onChange={(e) => setQuantidadeAtualizada(e.target.value)} />
                    ) : (
                      item.quantidade
                    )}
                  </td>
                  <td>
                    <CloseButton onClick={(e) => handleClickBotaoRemover(item.codigo)} />
                  </td>
                  <td>
                    {editarItem && codigo === item.codigo ? (
                      <button onClick={() => handleAtualizarItem(item)}>Atualizar</button>
                    ) : (
                      <button onClick={() => {handleClickEditar(item.codigo);}}>Editar</button>
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