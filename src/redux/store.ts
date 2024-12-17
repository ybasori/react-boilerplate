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

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
  })
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
