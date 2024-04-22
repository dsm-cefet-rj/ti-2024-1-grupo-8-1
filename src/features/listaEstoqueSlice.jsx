import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  estoque: [],
};

const listaEstoqueSlice = createSlice({
  name: 'estoque',
  initialState,
  reducers: {
    adicionarItem: (state, action) => {
      state.estoque.push(action.payload);
    },
    rmvItem: (state, action) => {
      state.estoque = state.estoque.filter((estoque) => estoque.codigo !== action.payload);
    },
    aumentarQtd: (state, action) => {
     
    return {state, ...state.estoque.quantidade += 1};
    },
    diminuirQtd: (state, action) => {
        state.estoque = state.estoque.filter((estoque) => estoque.codigo == action.payload && estoque.quantidade -1);
    },
  },
});

export const { adicionarItem, rmvItem, aumentarQtd, diminuirQtd } = listaEstoqueSlice.actions;
export default listaEstoqueSlice.reducer;