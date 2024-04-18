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
    }
  },
});

export const { addPag,rmvPag } = pagamentosSlice.actions;
export default pagamentosSlice.reducer;