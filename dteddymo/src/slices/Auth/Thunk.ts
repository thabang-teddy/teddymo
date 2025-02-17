import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../Helpers/axiosInstance";
import { User } from "../../Types/auth";
import { loginSuccess, logoutUser } from "./Reducer";

interface LoginPayload {
  email: string;
  password: string;
}

export const checklogin = () => async (dispatch: any) => {
  let user = localStorage.getItem("user-data");
  if (user != null && user != "") {
    dispatch(loginSuccess(JSON.parse(user)));
  }
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginPayload) => {
    try {
      const response = await API.post<{
        success: boolean;
        user: User;
        token: string;
      }>("/login", { email, password });
      if (response != null && response.data != null) {
        let results = response.data;
        if (results.success) {
          localStorage.setItem("token", results.token); // Store token in localStorage
          localStorage.setItem("user-data", JSON.stringify(results.user)); // Store user data in localStorage
          loginSuccess(results.user);
          return response.data;
        }
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  logoutUser();
  localStorage.removeItem("user-data"); // Remove token from localStorage
});
