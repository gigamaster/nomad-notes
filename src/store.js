import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

//reducers
import {
  menuReducer,
  modalReducer,
  tagsReducer,
  notesListReducer,
} from "./features";

/* persist */
const persistConfig = {
  key: "nomadnotes",
  storage,
};

const rootReducer = combineReducers({
  menu: menuReducer,
  modal: modalReducer,
  tags: tagsReducer,
  notesList: notesListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
