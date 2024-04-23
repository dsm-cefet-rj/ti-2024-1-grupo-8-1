import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  estoque: [{
    nome :'',
    codigo:'',
    quantidade: '',
    preco: '',
    descricao: '', 
    filtros :[]
  }],
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
    adicionarPaciente: (state, action) => {
      state.estoque = [...state.estoque.quantidade =+ 1, action.payload];
      return state.estoque.quantidade =+ 1
    },
    diminuirQtd: (state, action) => {
        state.estoque = state.estoque.filter((estoque) => estoque.codigo == action.payload && estoque.quantidade -1);
    },
    editItem: (state, action) => {
      state.estoque.map(estoque => {
       if(estoque.id == action.payload.id){
         estoque.nome =  action.payload.nome;
         estoque.quantidade = action.payload.quantidade;
         estoque.preco = action.payload.preco;
         estoque.descricao = action.payload.descricao;
         estoque.filtros = action.payload.filtros;
       }
      })
     }
  },
});

export const { adicionarItem, rmvItem, aumentarQtd, diminuirQtd, editItem } = listaEstoqueSlice.actions;
export default listaEstoqueSlice.reducer;