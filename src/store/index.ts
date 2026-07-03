// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";

// export const store = configureStore({
//   reducer: rootReducer,
//   devTools: import.meta.env.DEV,
// });

// export type AppStore = typeof store;
// export type AppDispatch = typeof store.dispatch;




import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { baseApi } from "../services/api/baseApi";

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),

  devTools: import.meta.env.DEV,
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;

