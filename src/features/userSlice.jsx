import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../API/API_NODE/Services/userService.jsx'

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async () => {
    const resposta = await userService.getAll();
    return resposta;
  }
);


export const signUpUser = createAsyncThunk(
  'user/signUpuser',
  async (data) => {
    const resposta = await userService.create(data);
    return resposta;
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({id, data}) => {
    const resposta = await userService.post(data);
    return resposta;
  }
);



const initialState = {
  users: [{
    email: 'lucas@gmail',
    senha: '123'
  },
  {
    email: 'doutora@doutora',
    senha: '1234'
  }],
  user :null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, senha } = action.payload;
      const authenticatedUser = state.users.find(
        (user) => user.email === email && user.senha === senha
      );
      if (authenticatedUser) {
        state.user = authenticatedUser;
      } else {
        state.user = null;
      }
    },
    logout: (state) => {
      state.user = null;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
  },
});

export const { login, logout, addUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;