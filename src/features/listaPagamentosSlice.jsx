import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pagamentos: [],
};

const pagamentosSlice = createSlice({
  name: 'pagamentos',
  initialState,
  reducers: {
    addPag: (state, action) => {
      state.pagamentos.push(action.payload);
    },
    rmvPag: (state, action) => {
      state.pagamentos = state.pagamentos.filter((pagamento) => pagamento.id !== action.payload);
    },
    editPag: (state, action) => {
      const index = state.pagamentos.findIndex((pagamento) => pagamento.id === action.payload.id);
      if (index !== -1) {
        state.pagamentos[index] = action.payload;
      }
    },
  },
});

export const { addPag, rmvPag, editPag } = pagamentosSlice.actions;
export default pagamentosSlice.reducer;