import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import apiReducer from "./apiSlice";

// const middleware = [
//   ...getDefaultMiddleware(),
//   createSerializableStateInvariantMiddleware(),
// ];

const store = configureStore({
  reducer: {
    counter: counterReducer,
    api: apiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;