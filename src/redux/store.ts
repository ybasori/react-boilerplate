import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/auth.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const logger: Middleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    console.log("will dispatch", action);
    const returnValue = next(action);
    console.log("state after dispatch", getState());
    return returnValue;
  };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

export const store = configureStore({
  reducer: persistReducer(
    persistConfig,
    combineReducers({
      auth: authReducer,
    })
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const persistor = persistStore(store);
