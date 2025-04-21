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
    endloading(state) {
      state.loading = false;
    },
  },
});

export const {
  loginSuccess,
  logoutUser,
  endloading
} = authSlice.actions

export default authSlice.reducer;

