import {configureStore} from '@reduxjs/toolkit';
import listaPagamentosReducer from '../features/listaPagamentosSlice';
const store = configureStore({

    reducer:{
        listaPagamentos: listaPagamentosReducer,
    }
});

export {store};
