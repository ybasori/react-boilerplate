import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useAuth = () => {
  const auth = useSelector(
    createSelector([(state: RootState) => state.auth], (auth) => auth.authData)
  );

  return auth;
};
