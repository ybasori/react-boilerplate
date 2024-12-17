import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthData, IInitialState } from "./auth.type";
import { authLogin } from "./auth.thunk";

const initialState: IInitialState = {
  authData: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IAuthData | null>) => {
      state.authData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.authData = action.payload;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
