import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../Helpers/axiosInstance";
import { User } from "../../Types/auth";

interface LoginPayload {
  email: string;
  password: string;
}

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
  localStorage.removeItem("token"); // Remove token from localStorage
});
