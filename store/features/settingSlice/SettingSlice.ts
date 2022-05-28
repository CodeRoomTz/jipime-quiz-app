import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  question_category: "",
  question_difficulty: "",
  question_type: "",
  amount_of_question: 50,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
});

export default settingSlice.reducer;
