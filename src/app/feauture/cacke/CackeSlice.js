import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCake: 10,
};

const cakeSlice = createSlice({
  name: "Cacke",
  initialState,
  reducers: {
    orderd: (state) => {
      state.numberOfCake--;
    },
    reStocked: (state, action) => {
      state.numberOfCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;

export const { orderd, reStocked } = cakeSlice.actions;
