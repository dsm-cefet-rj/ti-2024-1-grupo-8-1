import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pacientes: [],
};

const listaPacientesSlice = createSlice({
    name: "pacientes",
    initialState,
    reducers: {
        adicionarPaciente: (state, action) => {
            state.pacientes.push(action.payload);
        }
    }
})

export const { adicionarPaciente } = listaPacientesSlice.actions;
export default listaPacientesSlice.reducer;