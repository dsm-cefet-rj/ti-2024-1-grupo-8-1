import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pagamentos: [],
};

const pagamentosSlice = createSlice({
  name: 'pagamentos',
  initialState,
  reducers: {
    addPag: (state, action) => {
      state.pagamentos = [...state.pagamentos, action.payload];
  },
    rmvPag: (state, action) => {
      state.pagamentos = state.pagamentos.filter((pagamento) => pagamento.id !== action.payload);
    },
    editPag: (state, action) => {
     state.pagamentos.map(pagamento => {
      if(pagamento.id == action.payload.id){
        pagamento.valorTotal =  action.payload.valorTotal;
        pagamento.parcela = action.payload.parcela;
        pagamento.data = action.payload.data;
        pagamento.valorParcela = action.payload.valorParcela;
      }
     })
    },
  },
});

export const { addPag, rmvPag, editPag } = pagamentosSlice.actions;
export default pagamentosSlice.reducer;