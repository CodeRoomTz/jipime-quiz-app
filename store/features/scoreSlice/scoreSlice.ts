import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    handleScoreChange: (store, action) => {
      store.score = action.payload;
    },
  },
});

export const { handleScoreChange } = scoreSlice.actions;

export default scoreSlice.reducer;
