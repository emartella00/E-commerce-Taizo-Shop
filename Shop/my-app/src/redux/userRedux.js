import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    reset: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
  },
    loginSuccess: (state, action) => {
      state.isFetching = true;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { reset, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;