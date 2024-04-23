import React, { useState } from 'react';
import '../styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { adicionarItem } from '../../features/listaEstoqueSlice';
function CadastrarItem({handleListarItens}) {
const dispatch = useDispatch();
    const Filtros = [

        { filtro: "Ortodontia" },
        { filtro: "Descartável" },
        { filtro: "Equipamento" }
    ];

    const [nome, setNomeItem] = useState('')
    const [codigo, setCodigoItem] = useState('')
    const [quantidade, setQuantidadeItem] = useState('')
    const [preco, setPrecoItem] = useState('')
    const [filtro, setFiltroSelecionado] = useState('')
    const [descricao, setDescricaoItem] = useState('')

    const handleClickEstoque = (event) => {
        event.preventDefault();
        const dados = {
          nome: nome,
          codigo: codigo,
          quantidade: quantidade,
          preco: preco,
          descricao: descricao,
          filtros: [...Filtros.map(f => f.filtro), filtro],
        };
        dispatch(adicionarItem(dados));
        console.log(dados);
      };
    return (
        <div className="corpo">
            <button onClick={handleListarItens}>Voltar</button>
            <div className="container-lg">
                <form className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="inputNome" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="inputNome" value={nome} onChange={(e) => setNomeItem(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputCodigo" className="form-label">Código</label>
                        <input type="text" className="form-control" id="inputCodigo" value={codigo} onChange={(e) => setCodigoItem(e.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputQuantidade" className="form-label">Quantidade</label>
                        <input type="number" className="form-control" id="inputQuantidade" value={quantidade} onChange={(e) => setQuantidadeItem(e.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputPreco" className="form-label">Preço</label>
                        <input type="number" className="form-control" id="inputPreco" value={preco} onChange={(e) => setPrecoItem(e.target.value)} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputFiltro" className="form-label">Filtro 1</label>
                        <select id="inputFiltro" className="form-select" onChange={(e) => setFiltroSelecionado(e.target.value)}>
                            <option selected>Escolha...</option>
                            {Filtros.map((f) => (
                                <option key={f.filtro} value={f.filtro}>
                                    {f.filtro}
                                </option>))
                            }
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputFiltro" className="form-label">Filtro 2</label>
                        <select id="inputFiltro" className="form-select" onChange={(e) => setFiltroSelecionado(e.target.value)}>
                            <option selected>Escolha...</option>
                            {Filtros.map((f) => (
                                <option key={f.filtro} value={f.filtro}>
                                    {f.filtro}
                                </option>))
                            }
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputFiltro" className="form-label">Filtro 3</label>
                        <select id="inputFiltro" className="form-select" onChange={(e) => setFiltroSelecionado(e.target.value)}>
                            <option selected>Escolha...</option>
                            {Filtros.map((f) => (
                                <option key={f.filtro} value={f.filtro}>
                                    {f.filtro}
                                </option>))
                            }
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputFiltro" className="form-label">Filtro 4</label>
                        <select id="inputFiltro" className="form-select" onChange={(e) => setFiltroSelecionado(e.target.value)}>
                            <option selected>Escolha...</option>
                            {Filtros.map((f) => (
                                <option key={f.filtro} value={f.filtro}>
                                    {f.filtro}
                                </option>))
                            }
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputDescricao" className="form-label">Descrição</label>
                        <textarea type="text" className="form-control" id="inputDescricao" value={descricao} onChange={(e) => setDescricaoItem(e.target.value)}></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={handleClickEstoque}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CadastrarItem;