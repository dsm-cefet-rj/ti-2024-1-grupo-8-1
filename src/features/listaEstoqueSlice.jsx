import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    item: [],
};

const listaEstoqueSlice = createSlice({
    name: "estoque",
    initialState,
    reducers: {
        adicionarItem: (state, action) => {
            state.item.push(action.payload);
        }
    }
});

export const { adicionarItem } = listaEstoqueSlice.actions;
export default listaEstoqueSlice.reducer;
