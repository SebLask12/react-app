import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});




export default store;

//subscribe is a function that listens to the store, and updates every time the store changes

// store.subscribe(() => {
//     console.log(store.getState());
// });

//dispatch(wysyłka.ang) is a function that dispatches an action to the store

// store.dispatch({ type: 'INCREMENT' });
