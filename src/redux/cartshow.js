import { createSlice } from "@reduxjs/toolkit";

export const cartShow = createSlice({
  name: "cartshow",
  initialState: {
    value: false,
  },
  reducers: {
    show: (state) => {
      if (state.value === false) {
        state.value = true;
      } else {
        state.value = false;
      }
    },
  },
});

export const { show } = cartShow.actions;
export default cartShow.reducer;
