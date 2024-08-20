import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { pacienteController } from '../API/API_NODE/Controllers/pacienteController'

export const fetchPacientes = createAsyncThunk(
  'Pacientes/fetchPacientes',
  async () => {
    const resposta = await pacienteController.getAll();
    return resposta;
  }
);

export const deletePacienteById = createAsyncThunk(
  'Pacientes/deletePacienteById',
  async (id) => {
    await pacienteController.deleteById(id);
    return id;
  }
);

export const updatePacienteById = createAsyncThunk(
  'Pacientes/updatePacienteById',
  async ({ id, data }) => {
    const resposta = await pacienteController.updateById(id, data);
    return resposta;
  }
);

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
      state.Pacientes = state.Pacientes.filter((Paciente) => Paciente.id !== action.payload);
    },
    editPaciente: (state, action) => {
      state.Pacientes = state.Pacientes.map(Paciente => {
        if (Paciente.id === action.payload.id) {
          return {
            ...Paciente,
            valorTotal: action.payload.valorTotal,
            parcela: action.payload.parcela,
            data: action.payload.data,
            valorParcela: action.payload.valorParcela
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
      state.Pacientes = state.Pacientes.filter((Paciente) => Paciente.id !== action.payload);
    });
    builder.addCase(updatePacienteById.fulfilled, (state, action) => {
      const updatedPaciente = action.payload;
      const index = state.Pacientes.findIndex(Paciente => Paciente.id === updatedPaciente.id);
      if (index !== -1) {
        state.Pacientes[index] = updatedPaciente;
      }
    });
  },
});

export const { adicionarPaciente, editPaciente, removePaciente } = ListaPacientesSlice.actions;
export default ListaPacientesSlice.reducer;