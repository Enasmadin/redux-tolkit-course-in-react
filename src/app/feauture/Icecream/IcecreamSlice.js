
import {orderd as cackeorderd} from "../cacke/CackeSlice"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfIcKream: 19,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderd: (state) => {
      state.numberOfIcKream--;
    },
    restocked: (state, action) => {
      state.numberOfIcKream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cackeorderd, (state) => {
      state.numberOfIcKream--;
    });
  },
  // extraReducers:{
  //   ["Cacke/orderd"]:(state)=>{
  //     state.numberOfIcKream--;
  //   }
  // }
});

 export default  icecreamSlice.reducer;
  export const {orderd,restocked}= icecreamSlice.actions;