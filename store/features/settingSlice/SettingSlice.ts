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
  reducers: {
    addCategory: (state, action) => {
      const category = action.payload;
      state.question_category = category;
    },
    addType: (state, action) => {
      const type = action.payload;
      state.question_type = type;
    },
    addDifficulty: (state, action) => {
      const difficulty = action.payload;
      state.question_difficulty = difficulty;
    },
    addNumberOfQuestions: (state, action) => {
      const amount_of_question = action.payload;
      state.amount_of_question = amount_of_question;
    },
  },
});

export const { addCategory, addDifficulty, addNumberOfQuestions, addType } =
  settingSlice.actions;
  
export default settingSlice.reducer;
