import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { consultaService } from '../API/API_NODE/Services/consultaService';

// Thunk para buscar compromissos
export const fetchConsultas = createAsyncThunk(
  'agenda/fetchConsultas',
  async () => {
    const resposta = await consultaService.getAll();
    return resposta;
  }
);

// Thunk para deletar compromisso por ID
export const deleteConsultaById = createAsyncThunk(
  'agenda/deleteConsultaById',
  async (id) => {
    await consultaService.deleteById(id);
    return id;
  }
);

// Thunk para atualizar compromisso por ID
export const updateConsultaById = createAsyncThunk(
  'agenda/updateConsultaById',
  async ({ id, data }) => {
    const resposta = await consultaService.updateById(id, data);
    return resposta;
  }
);

// Thunk para criar um novo compromisso
export const createConsulta = createAsyncThunk(
  'agenda/createConsulta',
  async (data) => {
    const resposta = await consultaService.create(data);
    return resposta;
  }
);

const initialState = {
  consultas: []
};

const consultaSlice = createSlice({
  name: 'consulta',
  initialState,
  reducers: {
    addConsulta: (state, action) => {
      state.consultas.push(action.payload);
    },
    removeConsulta: (state, action) => {
      state.consultas = state.consultas.filter((consulta) => consulta.id !== action.payload);
    },
    editConsulta: (state, action) => {

      state.consultas = state.consultas.map(consulta => {
        if (consulta.id === action.payload.id) {
          return {
            ...consulta,
            ...action.payload.data // Atualiza todas as propriedades que foram passadas
          };
        }
        return consulta;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConsultas.fulfilled, (state, action) => {
      state.consultas = action.payload;
    });
    builder.addCase(deleteConsultaById.fulfilled, (state, action) => {
      state.consultas = state.consultas.filter((consulta) => consulta.id !== action.payload);
    });
    builder.addCase(updateConsultaById.fulfilled, (state, action) => {
      const updatedConsulta = action.payload;
      const index = state.consultas.findIndex(consulta => consulta.id === updatedConsulta.id);
      if (index !== -1) {
        state.consultas[index] = updatedConsulta;
      }
    });
    builder.addCase(createConsulta.fulfilled, (state, action) => {
      state.consultas.push(action.payload);
    });
  },
});

export const { addConsulta, removeConsulta, editConsulta } = consultaSlice.actions;
export default consultaSlice.reducer;
