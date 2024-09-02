import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { pagamentoController } from '../API/API_NODE/Controllers/pagamentoController';


export const fetchPagamentos = createAsyncThunk(
  'Pagamentos/fetchPagamentos',
  async () => {
    const resposta = await pagamentoController.getAll();
    return resposta;
  }
);


export const deletePagamentoById = createAsyncThunk(
  'Pagamentos/deletePagamentoById',
  async (id) => {
    await pagamentoController.deleteById(id);
    return id;
  }
);


export const updatePagamentoById = createAsyncThunk(
  'Pagamentos/updatePagamentoById',
  async ({ id, data }) => {
    const resposta = await pagamentoController.updateById(id, data);
    return resposta;
  }
);


export const createPagamento = createAsyncThunk(
  'Pagamentos/createPagamento',
  async (data) => {
    const resposta = await pagamentoController.create(data);
    return resposta;
  }
);

const initialState = {
  pagamentos: []
};

const ListaPagamentosSlice = createSlice({
  name: 'Pagamentos',
  initialState,
  reducers: {
    adicionarPagamento: (state, action) => {
      state.Pagamentos.push(action.payload);
    },
    removePagamento: (state, action) => {
      state.Pagamentos = state.Pagamentos.filter((Pagamento) => Pagamento._id !== action.payload);
    },
    editPagamento: (state, action) => {
      state.Pagamentos = state.Pagamentos.map(Pagamento => {
        if (Pagamento._id === action.payload._id) {
          return {
            ...Pagamento,
            ...action.payload
          };
        }
        return Pagamento;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPagamentos.fulfilled, (state, action) => {
      state.Pagamentos = action.payload;
    });
    builder.addCase(deletePagamentoById.fulfilled, (state, action) => {
      state.Pagamentos = state.Pagamentos.filter((Pagamento) => Pagamento._id !== action.payload);
    });
    builder.addCase(updatePagamentoById.fulfilled, (state, action) => {
      const updatedPagamento = action.payload;
      const index = state.Pagamentos.findIndex(Pagamento => Pagamento._id === updatedPagamento._id);
      if (index !== -1) {
        state.Pagamentos[index] = updatedPagamento;
      }
    });
  },
});

export const { adicionarPagamento, editPagamento, removePagamento } = ListaPagamentosSlice.actions;
export default ListaPagamentosSlice.reducer;
