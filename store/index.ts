import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./features/settingSlice";

export const store = configureStore({
  reducer: {
    setting: settingReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
