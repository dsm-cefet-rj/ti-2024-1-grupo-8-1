import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [{
    email: 'lucas@gmail',
    senha: '123'
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
});

export const { login, logout, addUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectUsers = (state) => state.user.users;
export default userSlice.reducer;