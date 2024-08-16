import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CompromissosServices } from '../API/agenda/CompromissosServices.jsx';

// Thunk para buscar compromissos
export const fetchCompromissos = createAsyncThunk(
  'agenda/fetchCompromissos',
  async () => {
    const resposta = await CompromissosServices.getAll();
    return resposta;
  }
);

// Thunk para deletar compromisso por ID
export const deleteCompromissoById = createAsyncThunk(
  'agenda/deleteCompromissoById',
  async (id) => {
    await CompromissosServices.deleteById(id);
    return id;
  }
);

// Thunk para atualizar compromisso por ID
export const updateCompromissoById = createAsyncThunk(
  'agenda/updateCompromissoById',
  async ({ id, data }) => {
    const resposta = await CompromissosServices.updateById(id, data);
    return resposta;
  }
);

// Thunk para criar um novo compromisso
export const createCompromisso = createAsyncThunk(
  'agenda/createCompromisso',
  async (data) => {
    const resposta = await CompromissosServices.create(data);
    return resposta;
  }
);

const initialState = {
  compromissos: []
};

const agendaSlice = createSlice({
  name: 'agenda',
  initialState,
  reducers: {
    addCompromisso: (state, action) => {
      state.compromissos.push(action.payload);
    },
    removeCompromisso: (state, action) => {
      state.compromissos = state.compromissos.filter((compromisso) => compromisso.id !== action.payload);
    },
    editCompromisso: (state, action) => {

      state.compromissos = state.compromissos.map(compromisso => {
        if (compromisso.id === action.payload.id) {
          return {
            ...compromisso,
            ...action.payload.data // Atualiza todas as propriedades que foram passadas
          };
        }
        return compromisso;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompromissos.fulfilled, (state, action) => {
      state.compromissos = action.payload;
    });
    builder.addCase(deleteCompromissoById.fulfilled, (state, action) => {
      state.compromissos = state.compromissos.filter((compromisso) => compromisso.id !== action.payload);
    });
    builder.addCase(updateCompromissoById.fulfilled, (state, action) => {
      const updatedCompromisso = action.payload;
      const index = state.compromissos.findIndex(compromisso => compromisso.id === updatedCompromisso.id);
      if (index !== -1) {
        state.compromissos[index] = updatedCompromisso;
      }
    });
    builder.addCase(createCompromisso.fulfilled, (state, action) => {
      state.compromissos.push(action.payload);
    });
  },
});

export const { addCompromisso, removeCompromisso, editCompromisso } = agendaSlice.actions;
export default agendaSlice.reducer;
