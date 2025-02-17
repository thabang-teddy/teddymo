import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../Types/auth.ts";
// import { login, logout } from "./Thunk.ts";

const initialState: AuthState = {
  user: null,
  loading: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:  {
    loginSuccess(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    logoutUser(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  loginSuccess,
  logoutUser
} = authSlice.actions

export default authSlice.reducer;

