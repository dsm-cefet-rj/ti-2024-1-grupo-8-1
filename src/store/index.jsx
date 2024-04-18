import {configureStore} from '@reduxjs/toolkit';
import listaPagamentosReducer from '../features/listaPagamentosSlice';
import listaPacientesReducer from '../features/listaPacientesSlice';
import listaEstoqueReducer from '../features/listaEstoqueSlice';

const store = configureStore({
    reducer:{
        listaPagamentos: listaPagamentosReducer,
        listaPacientes: listaPacientesReducer,
        listaEstoque: listaEstoqueReducer,
    }
});

export {store};
