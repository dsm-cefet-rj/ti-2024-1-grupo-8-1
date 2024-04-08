import React, { useState } from 'react';
import '../styles.css';

function ItemEstoque(props){

    const handleClickBotaoDiminuir = () =>{

        props.quantidade = props.quantidade - 1;

    }
    const handleClickBotaoAumentar = () =>{

        props.quantidade = props.quantidade + 1;

    }

    return <li>{props.nome} <button type = "button" id = "diminuirQuantidade" onClick = {handleClickBotaoDiminuir} className = "btn btn-primary"> - </button> {props.quantidade} <button type = "button" id = "aumentarQuantidade" onClick = {handleClickBotaoAumentar} className = "btn btn-primary"> + </button></li>
}

function ListaEstoque() {

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


    return(

        <div className= "corpo">
            <div className= "container-lg">
                <form className= "row g-3">

                    <ol className="listaEstoque">
                        {Itens.map((i) => <ItemEstoque codigo = {i.Codigo} nome = {i.Nome} quantidade = {i.Quantidade} preco = {i.Preco} descricao = {i.Descricao}/>)}
                    </ol>

                </form>
            </div>
        </div>    

    );
}

export {ListaEstoque, ItemEstoque};