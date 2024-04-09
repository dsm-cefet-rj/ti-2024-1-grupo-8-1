import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Pacientes from '../Componentes/Data/pagData';

const initialState = {
  
};

const pagamentosSlice = createSlice({
  name: 'pagamentos',
  initialState,
  reducers: {
    addPag: (state, action) => {
      
    },
  },
});

export const { addPag } = pagamentosSlice.actions;
export default pagamentosSlice.reducer;