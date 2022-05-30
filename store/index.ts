import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "./features/scoreSlice";
import settingReducer from "./features/settingSlice";

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    score: scoreSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
