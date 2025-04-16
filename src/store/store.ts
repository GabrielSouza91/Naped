// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";

const testeReducer = (state = {}) => {
  return state; // Must return the state
};

export const store = configureStore({
  reducer: {
		teste: testeReducer
	},
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
