import {configureStore} from '@reduxjs/toolkit';
import listaPagamentosReducer from '../features/listaPagamentosSlice';
import listaPacientesReducer from '../features/listaPacientesSlice';
import listaEstoqueReducer from '../features/listaEstoqueSlice';
import listaAgendaReducer from '../features/listaAgendaSlice';
import listaConsultaReducer from '../features/listaConsultaSlice';

const store = configureStore({
    reducer:{
        listaPagamentos: listaPagamentosReducer,
        listaPacientes: listaPacientesReducer,
        listaEstoque: listaEstoqueReducer,
        listaAgenda: listaAgendaReducer,
        listaConsulta: listaConsultaReducer,
    }
});

export {store};
