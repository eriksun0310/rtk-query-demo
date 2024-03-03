import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./api/apiSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;
