import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    incre: (state, action) => {
      state.counter += action.payload;
    },
    decre: (state, action) => {
      state.counter -= action.decre;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
