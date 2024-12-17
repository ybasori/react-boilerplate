import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "@/redux/store";

interface IParams {
  name: string;
  token: "";
  expires: 0;
}

export const authLogin = createAsyncThunk<
  IParams,
  IParams,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("auth/login", async (params, { rejectWithValue }) => {
  try {
    return params;
  } catch (error) {
    return rejectWithValue(error);
  }
});
