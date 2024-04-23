import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    agenda: [

        {
            "id":"1",
            "title":"Preenchimento",
            "start":"12/09/2003",
            "end":"12/09/2023",
            "paciente":"Eu"
        },
        {
            "id":"2",
            "title":"Limpeza",
            "start":"12/09/2003",
            "end":"12/09/2023",
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