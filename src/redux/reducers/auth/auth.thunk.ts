import { createAsyncThunk } from "@reduxjs/toolkit";

export const authLogin = createAsyncThunk(
  "auth/login",
  async (
    params: { name: string; token: ""; expires: 0 },
    { rejectWithValue }
  ) => {
    try {
      return params;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
