import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { pacienteController } from '../API/API_NODE/Controllers/pacienteController';

// Fetch pacientes
export const fetchPacientes = createAsyncThunk(
  'Pacientes/fetchPacientes',
  async () => {
    const resposta = await pacienteController.getAll();
    return resposta;
  }
);

// Delete paciente by id
export const deletePacienteById = createAsyncThunk(
  'Pacientes/deletePacienteById',
  async (id) => {
    await pacienteController.deleteById(id);
    return id;
  }
);

// Update paciente by id
export const updatePacienteById = createAsyncThunk(
  'Pacientes/updatePacienteById',
  async ({ id, data }) => {
    const resposta = await pacienteController.updateById(id, data);
    return resposta;
  }
);

// Create paciente
export const createPaciente = createAsyncThunk(
  'Pacientes/createPaciente',
  async (data) => {
    const resposta = await pacienteController.create(data);
    return resposta;
  }
);

const initialState = {
  Pacientes: []
};

const ListaPacientesSlice = createSlice({
  name: 'Pacientes',
  initialState,
  reducers: {
    adicionarPaciente: (state, action) => {
      state.Pacientes.push(action.payload);
    },
    removePaciente: (state, action) => {
      state.Pacientes = state.Pacientes.filter((Paciente) => Paciente._id !== action.payload);
    },
    editPaciente: (state, action) => {
      state.Pacientes = state.Pacientes.map(Paciente => {
        if (Paciente._id === action.payload._id) {
          return {
            ...Paciente,
            ...action.payload
          };
        }
        return Paciente;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPacientes.fulfilled, (state, action) => {
      state.Pacientes = action.payload;
    });
    builder.addCase(deletePacienteById.fulfilled, (state, action) => {
      state.Pacientes = state.Pacientes.filter((Paciente) => Paciente._id !== action.payload);
    });
    builder.addCase(updatePacienteById.fulfilled, (state, action) => {
      const updatedPaciente = action.payload;
      const index = state.Pacientes.findIndex(Paciente => Paciente._id === updatedPaciente._id);
      if (index !== -1) {
        state.Pacientes[index] = updatedPaciente;
      }
    });
  },
});

export const { adicionarPaciente, editPaciente, removePaciente } = ListaPacientesSlice.actions;
export default ListaPacientesSlice.reducer;
