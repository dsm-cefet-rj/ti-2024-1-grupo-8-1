import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../API/API_NODE/Services/userService.jsx'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'



export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const resposta = await userService.getAll();
    return resposta;
  }
);

export const signUpUser = createAsyncThunk(
  'users/signUpuser',
  async (data) => {
    const resposta = await userService.create(data);
    return resposta;
  }
);

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (data) => {
    const resposta = await userService.post(data);
    return resposta;
  }
);



const initialState = {
  users: [{
    username: 'lucas@gmail',
    senha: '123'
  },
  {
    username: 'doutora@doutora',
    senha: '1234'
  }],
  checkUser :null
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action) => {
      const authenticatedUser = action.payload;
      if (authenticatedUser) {
        state.checkUser = authenticatedUser;
      } else {
        state.checkUser = null;
      }
    },
    logout: (state) => {
      state.users = null;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = "logged_in";
      state.users.push(action.payload);
    });
  },
});

export const { login, logout, addUser } = userSlice.actions;
export const selectUser = (state) => state.listaUser.checkUser;
export default userSlice.reducer;