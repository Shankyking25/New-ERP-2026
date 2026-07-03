// import { combineReducers } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({});

// export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>;







// import { combineReducers } from "@reduxjs/toolkit";
// import { baseApi } from "../services/api/baseApi";

// const rootReducer = combineReducers({
//   [baseApi.reducerPath]: baseApi.reducer,
// });

// export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>;





import { combineReducers } from "@reduxjs/toolkit";

import { baseApi } from "../services/api/baseApi";

import authReducer from "../features/auth/slices/authSlice";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,

  auth: authReducer,
});

export default rootReducer;

export type RootState =
  ReturnType<typeof rootReducer>;