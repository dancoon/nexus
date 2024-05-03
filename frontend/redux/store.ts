import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { apiSlice } from "./services/apiSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "./storage";
import { setupListeners } from "@reduxjs/toolkit/query";

// Exclude non-serializable actions from being persisted
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  blacklist: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
};

const rootReducer = combineReducers({
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(apiSlice.middleware),
  });

export const store = makeStore();
setupListeners(store.dispatch);
export const persistor = persistStore(store);
export const purgeData = async () => {
  await persistor.purge();
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
