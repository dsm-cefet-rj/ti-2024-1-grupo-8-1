import {configureStore} from '@reduxjs/toolkit';
import listaPagamentosReducer from '../features/listaPagamentosSlice';
import listaPacientesReducer from '../features/listaPacientesSlice';

const store = configureStore({
    reducer:{
        listaPagamentos: listaPagamentosReducer,
        listaPacientes: listaPacientesReducer,
    }
});

export {store};
