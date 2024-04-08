import React, { useState } from 'react';
import '../styles.css';

function DeletarItem() {

    const Itens = [

        {
            Nome: "Anestesia",
            Codigo: "123",
            Quantidade: 1,
            Preco: 10.00,
            Descricao: "?"

        },

        {
            Nome: "Broca",
            Codigo: "456",
            Quantidade: 2,
            Preco: 20.00,
            Descricao: "??"
        },

        {
            Nome: "Cauan",
            Codigo: "789",
            Quantidade: 3,
            Preco: 30.00,
            Descricao: "???"
        }
    ];

    const[itemSelecionado, setItemSelecionado] = useState('');
    const[botaoRemover, setBotaoRemover] = useState(false);
    const handleClickBotaoRemover = () =>{
        
        {Itens.filter((i) => (i.Itens != itemSelecionado))}
        
    }

    return (

        <div className= "corpo">
            <div className= "container-lg">
                <form className= "row g-3">
                    <div className= "col-md-6">
                        <select id="inputItem" className="form-select" onChange= {(e)=>setItemSelecionado(e.target.value)}>
                            <option selected>Escolha...</option>
                            {Itens.map((i) => (
                                <option key={i.Nome} value={i.Nome}>
                                    {i.Nome}
                                </option>))  
                            }
                        </select>
                    </div>
                    <div className= "col-md-6">
                        <button type="button" id="Remover-item" onClick={handleClickBotaoRemover} className="btn btn-primary">Remover</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeletarItem;