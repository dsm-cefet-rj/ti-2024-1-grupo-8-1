import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    agenda: [

        {
            "id":"1",
            "title":"Preenchimento",
            "allDay":"Sim",
            "start":"12/09/2003",
            "end":"12/09/2024",
            "paciente":"Eu"
        },
        {
            "id":"2",
            "title":"Limpeza",
            "allDay":"Não",
            "start":"12/09/2003",
            "end":"12/09/2024",
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
        }

    }

});

export const { adicionarAgenda } = listaAgendaSlice.actions;
export default listaAgendaSlice.reducer;