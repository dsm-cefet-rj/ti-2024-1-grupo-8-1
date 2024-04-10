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
  },
});

export const { addPag } = pagamentosSlice.actions;
export default pagamentosSlice.reducer;