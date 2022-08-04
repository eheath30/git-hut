import { createSlice } from "@reduxjs/toolkit";

const initState = {
  saved: [],
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: initState,
  reducers: {
    add: (state, action) => {
      state.saved.push(action.payload);
    },
    remove: (state, action) => {
      state.saved = state.saved.filter((e) => e.name != action.payload.name);
    },
  },
});

export const { add, remove } = favouriteSlice.actions;
export default favouriteSlice.reducer;
