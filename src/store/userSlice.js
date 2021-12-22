import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "demo_admin",
  password: "123456",
  profilPicture:
    "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  loggedIn: window.localStorage.getItem('loggedIn') || false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      if (
        action.payload.username == state.username &&
        action.payload.password == state.password
      ) {
        state.loggedIn = true;
        window.localStorage.setItem("loggedIn", true);
      }
    },
  },
});

// Action creators are generated for each case reducer function

export default userSlice.reducer;
export const { login } = userSlice.actions;
