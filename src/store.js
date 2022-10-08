import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    changeCount(state, action) {
      state[action.payload].count = state[action.payload].count + 1;
    },
    plusContent(state) {
      state = [{ id: 1, name: "Blue Shoeus", count: 10 }, ...state];
    },
  },
});

export let { changeCount, plusContent } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
