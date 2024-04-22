import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    agenda: [],
};

const agendaSlice = createSlice({
    name: 'agenda',
    initialState,
    reducers:{
        adicionarAgenda: (state, action)=>{
            state.paciente.push(action.payload);
        }

    }

})

export const { adicionarAgenda } = agendaSlice.actions;
export default agendaSlice.reducer;