import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./apiSlice/authSlice";
import userReducer from "./apiSlice/userSlice";
import postReducer from "./apiSlice/postSlice";
import commentReducer from "./apiSlice/commentSlice";
import adminReducer from "./apiSlice/adminSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  comment: commentReducer,
  admin: adminReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
