import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    agenda: [

        {
            "id":"1",
            "title":"Preenchimento",
            "data":"12/09/2024",
            "hora":"08:07",
            "paciente":"Eu"
        },
        {
            "id":"2",
            "title":"Limpeza",
            "data":"29/12/2025",
            "hora":"06:11",
            "paciente":"Você"
        },

    ],
};

const listaAgendaSlice = createSlice({
    name: "agenda",
    initialState,
    reducers:{
        adicionarAgenda: (state, action)=>{
            state.agenda = [...state.agenda, action.payload]
        },
        removerAgenda: (state, action)=>{
            state.agenda = state.agenda.filter((agenda) => agenda.id !== action.payload)
        }
    }

});

export const { adicionarAgenda, removerAgenda  } = listaAgendaSlice.actions;
export default listaAgendaSlice.reducer;