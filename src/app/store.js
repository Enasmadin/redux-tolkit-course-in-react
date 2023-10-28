import cackeReducer from "./feauture/cacke/CackeSlice";
import iccreanReducer from "./feauture/Icecream/IcecreamSlice";
import userReducer from "./feauture/user/usersSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cacke: cackeReducer,
    icecream: iccreanReducer,
    user: userReducer,
  },
});


export default store ;
