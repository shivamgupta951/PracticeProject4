// Inside ./src/app/lib/store.tsx
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice"; // Ensures it looks in the same lib folder

export const makeStore = () => {
  return configureStore({
    reducer: {
      Counter: CounterReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
