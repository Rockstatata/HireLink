// filepath: d:\CODE\HireLink\hirelink-frontend\src\store\authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => { state.loading = true; },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure: (state) => { state.loading = false; },
    logout: (state) => {
      state.user = null;
      state.loading = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;