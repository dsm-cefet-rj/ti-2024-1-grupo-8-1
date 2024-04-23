import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    consulta: [

        {
            "id":"0",
            "title":"Obturação",
            "data":"01/04/2024",
            "hora":"16:20",
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