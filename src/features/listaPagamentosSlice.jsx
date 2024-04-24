import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PagamentosServices } from '../API/pagamentos/pagamentosServices';

export const fetchPagamentos = createAsyncThunk(
  'pagamentos/fetchPagamentos',
  async () => {
    const resposta = await PagamentosServices.getAll();
    return resposta;
  }
);

export const deletePagamentoById = createAsyncThunk(
  'pagamentos/deletePagamentoById',
  async (id) => {
    await PagamentosServices.deleteById(id);
    return id;
  }
);
export const updatePagamentoById = createAsyncThunk(
  'pagamentos/updatePagamentoById',
  async ({ id, data }) => {
    const resposta = await PagamentosServices.updateById(id, data);
    return resposta;
  }
);
export const createPagamento = createAsyncThunk(
  'pagamentos/createPagamento',
  async (data) => {
    const resposta = await PagamentosServices.create(data);
    return resposta;
  }
);

const initialState = {
  pagamentos: []
};

const pagamentosSlice = createSlice({
  name: 'pagamentos',
  initialState,
  reducers: {
    addPag: (state, action) => {
      state.pagamentos.push(action.payload);
    },
    rmvPag: (state, action) => {
      state.pagamentos = state.pagamentos.filter((pagamento) => pagamento.id !== action.payload);
    },
    editPag: (state, action) => {
      state.pagamentos = state.pagamentos.map(pagamento => {
        if (pagamento.id === action.payload.id) {
          return {
            ...pagamento,
            valorTotal: action.payload.valorTotal,
            parcela: action.payload.parcela,
            data: action.payload.data,
            valorParcela: action.payload.valorParcela
          };
        }
        return pagamento;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPagamentos.fulfilled, (state, action) => {
      state.pagamentos = action.payload;
    });
    builder.addCase(deletePagamentoById.fulfilled, (state, action) => {
      state.pagamentos = state.pagamentos.filter((pagamento) => pagamento.id !== action.payload);
    });
    builder.addCase(updatePagamentoById.fulfilled, (state, action) => {
      const updatedPagamento = action.payload;
      const index = state.pagamentos.findIndex(pagamento => pagamento.id === updatedPagamento.id);
      if (index !== -1) {
        state.pagamentos[index] = updatedPagamento;
      }
    });
  },
});

export const { addPag, rmvPag, editPag } = pagamentosSlice.actions;
export default pagamentosSlice.reducer;