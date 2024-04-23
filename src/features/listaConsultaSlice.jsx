import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Consulta: [

        {
            "id":"0",
            "title":"Obturação",
            "start":"12/09/2003",
            "end":"01/01/2024",
            "paciente":"Nós",
            "pagamento":"Consulta com pagamento",
            "descrição":"Uma Belezura"
        },
    ],
};

const listaConsultaSlice = createSlice({
    name: "consulta",
    initialState,
    reducers:{
        adicionarConsulta: (state, action)=>{
            state.consulta = [...state.consulta, action.payload]
        }

    }

});

export const { adicionarConsulta } = listaConsultaSlice.actions;
export default listaConsultaSlice.reducer;