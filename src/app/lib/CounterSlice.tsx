import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});


export default CounterSlice.reducer
export const {increment,decrement} = CounterSlice.actions;